const content = window.YISELY_CONTENT;
const list = document.querySelector('#material-list');
const dialog = document.querySelector('#material-dialog');
let previousFocus;
const isSafeUrl = (value) => { try { return new URL(value).protocol === 'https:'; } catch { return false; } };
content.materials.forEach(material => {
  const article = document.createElement('article');
  article.className = 'card'; article.dataset.type = material.type;
  // Catalog copy is local, trusted editorial content from content.js.
  article.innerHTML = `<div class="cover cover-${material.style}"><span class="cover-label">YISELY / ESPANHOL</span><span class="cover-title">${material.cover}</span><span class="cover-subtitle">${material.subtitle}</span><span class="cover-symbol" aria-hidden="true">${material.symbol}</span></div><div class="card-body"><span class="badge">${material.type === 'free' ? 'GRATUITO · ' : ''}${material.level}</span><h3>${material.title}</h3><p>${material.description}</p><div class="card-action"><span>${material.type === 'free' ? 'Atividade para imprimir' : material.checkoutUrl && isSafeUrl(material.checkoutUrl) ? 'Conteúdo pago' : 'Em breve'}</span></div></div>`;
  const action = article.querySelector('.card-action');
  if (material.type === 'free') {
    const link = document.createElement('a'); link.href = material.file; link.download = ''; link.textContent = 'Baixar atividade ↓'; action.append(link);
  } else if (material.checkoutUrl && isSafeUrl(material.checkoutUrl)) {
    const link = document.createElement('a'); link.href = material.checkoutUrl; link.textContent = 'Comprar e acessar ↗'; link.target = '_blank'; link.rel = 'noopener noreferrer'; action.append(link);
  } else {
    const button = document.createElement('button'); button.textContent = 'Ver detalhes ↗';
    button.setAttribute('aria-label', `Ver detalhes: ${material.title}`);
    button.addEventListener('click', () => {
      previousFocus = button;
      document.querySelector('#dialog-title').textContent = material.title;
      document.querySelector('#dialog-description').textContent = material.description;
      document.querySelector('#material-email').href = `mailto:clases.con.yisely@gmail.com?subject=${encodeURIComponent('Interesse no material: ' + material.title)}`;
      dialog.showModal();
    }); action.append(button);
  }
  list.append(article);
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  list.querySelectorAll('.card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== card.dataset.type; if (!card.hidden) count++; });
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'material exibido' : 'materiais exibidos'}.`;
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => previousFocus?.focus());
if (content.videoUrl && isSafeUrl(content.videoUrl)) {
  const videoUrl = new URL(content.videoUrl);
  if (['www.youtube-nocookie.com', 'www.youtube.com', 'player.vimeo.com'].includes(videoUrl.hostname)) {
    const frame = document.createElement('iframe'); frame.src = videoUrl.href; frame.title = 'Yisely explica os materiais'; frame.loading = 'lazy'; frame.allowFullscreen = true; frame.allow = 'encrypted-media; picture-in-picture'; document.querySelector('#video-area').replaceChildren(frame);
  }
}
