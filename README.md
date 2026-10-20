# Yisely — espanhol com afeto

Site estático em português, independente dos demais projetos. Abra `index.html` ou sirva esta pasta com um servidor HTTP. Não requer instalação nem etapa de build.

## Publicar no GitHub Pages

Crie um repositório separado chamado `xis_`. Envie apenas os arquivos desta pasta. Em Settings → Pages, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`. O endereço esperado será `https://memaria48-sudo.github.io/xis_/` (somente disponível após ativação e implantação).

## Atualizar o conteúdo

- Apresentação, contato, preços e textos do blog: `index.html`.
- Cores, fontes e layout responsivo: `styles.css`.
- Catálogo e vídeo: `content.js`. O vídeo usa URL de incorporação do YouTube ou Vimeo, e não o link comum de assistir. Sem URL, aparece um aviso de vídeo em breve.
- Material gratuito: adicione o arquivo à raiz do site e altere `file` no catálogo. A amostra atual foi criada para demonstrar a interface e está identificada como tal.
- Material pago: substitua os itens de demonstração pelos títulos, descrição, nível e preço reais. Preencha `checkoutUrl` com um checkout HTTPS de uma plataforma que processe o pagamento **e entregue o material com acesso protegido**. Sem checkout, o site informa que o material ainda não está à venda e oferece contato por e-mail.

**Não coloque os arquivos pagos neste repositório ou no GitHub Pages.** O código e todos os arquivos publicados são públicos; esconder um link com JavaScript não protege o conteúdo. A plataforma externa deverá cuidar da confirmação do pagamento, entrega, regras de acesso, termos de compra e eventuais reembolsos. Este site não processa pagamentos nem simula desbloqueio.

## Confirmar antes de divulgar

- Revisar os dados da biografia e o nome das escolas com a Yisely. O texto descreve aplicação de exames DELE conforme o relato fornecido, sem atribuir uma credencial específica não confirmada.
- Validar a taxa histórica de aprovação; a página não promete resultados futuros.
- Confirmar se R$ 200 corresponde ao valor total por aula da turma A1 com quatro alunos (a interpretação atual), além da duração das aulas. O valor individual C1 informado é R$ 600 por aula.
- Substituir os espaços de material e vídeo pelos conteúdos reais. Revisar as três dicas iniciais do blog antes de assiná-las como conteúdo da professora.

## Privacidade e dependências

Sem formulário que armazene dados, analytics ou cookies próprios. Links de contato abrem o cliente de e-mail do visitante. Fontes são carregadas do Google Fonts, com fallback local. Vídeos, quando configurados, são carregados do provedor escolhido e seguem as políticas desse provedor.
