const whatsapp =
  "https://api.whatsapp.com/send?phone=553134871561&text=Olá!%20Vim%20pelo%20site%20da%20Tecsystem%20e%20gostaria%20de%20um%20orçamento.";

const services = [
  {
    number: "01",
    title: "Celulares",
    text: "Diagnóstico e reparo para seu smartphone voltar à rotina com segurança e desempenho.",
  },
  {
    number: "02",
    title: "Notebooks",
    text: "Manutenção, limpeza, upgrades e correções para trabalhar e estudar sem interrupções.",
  },
  {
    number: "03",
    title: "Computadores",
    text: "Soluções para lentidão, falhas de hardware, montagem, formatação e melhoria de performance.",
  },
  {
    number: "04",
    title: "Acessórios",
    text: "Itens selecionados para completar, proteger e melhorar a experiência com seus equipamentos.",
  },
];

const faqs = [
  {
    question: "Como solicito um orçamento?",
    answer:
      "Fale com a equipe pelo WhatsApp e conte o que está acontecendo. Para confirmar a causa e o valor do reparo, o equipamento pode precisar passar por avaliação técnica na loja.",
  },
  {
    question: "Os serviços possuem garantia?",
    answer:
      "Sim. A Tecsystem oferece garantia de até 6 meses, conforme o tipo de serviço ou peça aplicada. As condições são informadas no orçamento.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim. O pagamento pode ser dividido em até 6 vezes no cartão, sujeito às condições informadas no atendimento.",
  },
  {
    question: "Onde fica a Tecsystem?",
    answer:
      "Estamos na Rua Silva Alvarenga, 470, Loja 01, bairro São Geraldo, em Belo Horizonte/MG.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Tecsystem - início">
          <img
            src="/logo-tecsystem.svg"
            width={214}
            height={54}
            alt="Tecsystem Assistência Técnica"
          />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#localizacao">Localização</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">
          Pedir orçamento
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow"><span /> Assistência técnica em Belo Horizonte</p>
            <h1>Seu equipamento funcionando como deveria.</h1>
            <p className="hero-copy">
              Assistência especializada para celulares, notebooks e computadores,
              com atendimento direto, orçamento transparente e garantia.
            </p>
            <div className="hero-actions">
              <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
                Falar com um técnico
              </a>
              <a className="text-link" href="#servicos">
                Conhecer serviços <span aria-hidden="true">↘</span>
              </a>
            </div>
            <div className="hero-proof" aria-label="Diferenciais da Tecsystem">
              <div><strong>Até 6 meses</strong><span>de garantia</span></div>
              <div><strong>Até 6x</strong><span>no cartão</span></div>
              <div><strong>Atendimento</strong><span>direto no WhatsApp</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Especialistas em tecnologia">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="device device-phone">
              <span className="device-speaker" />
              <span className="device-check">✓</span>
              <small>diagnóstico</small>
            </div>
            <div className="device device-laptop">
              <div className="laptop-screen">
                <span className="pulse" />
                <b>TECSYSTEM</b>
              </div>
              <div className="laptop-base" />
            </div>
            <div className="visual-tag tag-top"><i /> Manutenção especializada</div>
            <div className="visual-tag tag-bottom"><strong>+ performance</strong><span>para sua rotina</span></div>
          </div>
        </section>

        <section className="section services" id="servicos">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark"><span /> O que resolvemos</p>
              <h2>Tecnologia sem complicação.</h2>
            </div>
            <p>
              Do diagnóstico ao reparo, cuidamos do seu equipamento com atenção
              técnica e explicações claras em cada etapa.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon" aria-hidden="true">{service.title.charAt(0)}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Solicitar orçamento para ${service.title}`}>
                  Solicitar orçamento <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="como-funciona">
          <div className="process-copy">
            <p className="eyebrow"><span /> Simples e transparente</p>
            <h2>Do problema à solução, sem enrolação.</h2>
            <p>
              Você sabe o que está acontecendo, qual é a solução recomendada e
              quanto vai investir antes da execução do serviço.
            </p>
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
              Começar atendimento
            </a>
          </div>
          <ol className="steps">
            <li><span>1</span><div><h3>Conte o problema</h3><p>Envie uma mensagem e explique o que o equipamento apresenta.</p></div></li>
            <li><span>2</span><div><h3>Receba a orientação</h3><p>Nossa equipe indica o próximo passo e realiza o diagnóstico necessário.</p></div></li>
            <li><span>3</span><div><h3>Aprove o orçamento</h3><p>Você recebe uma proposta clara antes de autorizar o serviço.</p></div></li>
            <li><span>4</span><div><h3>Volte à sua rotina</h3><p>Após o reparo e os testes, seu equipamento estará pronto para uso.</p></div></li>
          </ol>
        </section>

        <section className="section trust">
          <div className="trust-image">
            <img
              src="/images/instagram-01.jpg"
              alt="Identidade visual da assistência técnica Tecsystem"
              loading="lazy"
            />
          </div>
          <div className="trust-copy">
            <p className="eyebrow dark"><span /> Por que escolher a Tecsystem</p>
            <h2>Confiança também faz parte do reparo.</h2>
            <p>
              Seu equipamento concentra trabalho, estudos, contatos e momentos
              importantes. Por isso, cada atendimento começa com escuta e termina
              com testes cuidadosos.
            </p>
            <ul>
              <li><span>✓</span><div><strong>Atendimento próximo</strong><p>Converse diretamente com quem entende do assunto.</p></div></li>
              <li><span>✓</span><div><strong>Orçamento transparente</strong><p>Decida com clareza antes de autorizar o serviço.</p></div></li>
              <li><span>✓</span><div><strong>Serviço com garantia</strong><p>Mais tranquilidade depois que o equipamento volta para você.</p></div></li>
            </ul>
          </div>
        </section>

        <section className="social-strip">
          <div>
            <p className="eyebrow"><span /> Acompanhe a Tecsystem</p>
            <h2>Bastidores, dicas e soluções no Instagram.</h2>
          </div>
          <a className="text-link light" href="https://www.instagram.com/tecsyste.bh/" target="_blank" rel="noreferrer">
            @tecsyste.bh <span>↗</span>
          </a>
          <div className="social-grid">
            {["instagram-01.jpg", "instagram-02.jpg", "instagram-03.jpg"].map((image, index) => (
              <a href="https://www.instagram.com/tecsyste.bh/" target="_blank" rel="noreferrer" key={image}>
                <img
                  src={`/images/${image}`}
                  alt={`Publicação da Tecsystem no Instagram ${index + 1}`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>

        <section className="location" id="localizacao">
          <div className="location-copy">
            <p className="eyebrow dark"><span /> Venha nos visitar</p>
            <h2>Tecsystem em Belo Horizonte</h2>
            <address>
              Rua Silva Alvarenga, 470 — Loja 01<br />
              São Geraldo, Belo Horizonte — MG<br />
              CEP 31050-640
            </address>
            <a className="button" href="https://www.google.com/maps/search/?api=1&query=Tecsystem%20Rua%20Silva%20Alvarenga%20470%20Belo%20Horizonte" target="_blank" rel="noreferrer">
              Abrir rota no Google Maps
            </a>
          </div>
          <div className="map-wrap">
            <iframe
              title="Mapa com a localização da Tecsystem"
              src="https://www.google.com/maps?q=Tecsystem%20Rua%20Silva%20Alvarenga%20470%20Belo%20Horizonte%20MG&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section className="section faq" id="duvidas">
          <div className="faq-heading">
            <p className="eyebrow dark"><span /> Dúvidas frequentes</p>
            <h2>Antes de chamar, talvez sua resposta esteja aqui.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div>
            <p className="eyebrow"><span /> Precisa de ajuda?</p>
            <h2>Não deixe o problema parar sua rotina.</h2>
          </div>
          <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
            Solicitar orçamento no WhatsApp
          </a>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <img src="/logo-tecsystem.svg" alt="Tecsystem" width={214} height={54} loading="lazy" />
          <p>Assistência técnica para celulares, notebooks e computadores em Belo Horizonte.</p>
          <div className="footer-links">
            <a href="#servicos">Serviços</a>
            <a href="#localizacao">Localização</a>
            <a href="https://www.instagram.com/tecsyste.bh/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tecsystem. Todos os direitos reservados.</span>
          <span>Rua Silva Alvarenga, 470 — São Geraldo — BH</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Tecsystem pelo WhatsApp">
        <span>WhatsApp</span>
        <b aria-hidden="true">↗</b>
      </a>
    </>
  );
}
