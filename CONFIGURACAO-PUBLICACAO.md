# Configuração para publicação e Google Ads

O site está funcional para apresentação local. Antes da publicação, serão necessários apenas dados que dependem do cliente ou das contas externas.

## 1. Domínio

Quando o domínio HTTPS definitivo for escolhido:

1. Adicionar a URL canônica em cada página:
   `<link rel="canonical" href="https://DOMINIO/PAGINA">`
2. Trocar `DOMINIO-DO-CLIENTE` em `sitemap.xml.template`.
3. Renomear `sitemap.xml.template` para `sitemap.xml`.
4. Acrescentar em `robots.txt`: `Sitemap: https://DOMINIO/sitemap.xml`.
5. Usar exatamente esse domínio como URL final e URL exibida no Google Ads.

## 2. Mensuração

O JavaScript já envia os seguintes eventos para `window.dataLayer`:

- `generate_lead`: formulário validado e WhatsApp aberto;
- `click_phone`: clique em telefone;
- `click_route`: clique para abrir a rota;
- `select_service`: escolha de serviço.

Depois que o cliente fornecer o ID do Google Tag Manager ou Google Ads, instalar a tag oficial e mapear esses eventos como conversões. Não há ID fictício no código.

## 3. Dados a confirmar com o cliente

- Domínio definitivo;
- Horários de atendimento;
- Condições exatas do parcelamento;
- Prazo de garantia por tipo de reparo;
- Confirmação da razão social e do CNPJ exibidos;
- Conta do Google Ads, Tag Manager, Analytics e Search Console.
