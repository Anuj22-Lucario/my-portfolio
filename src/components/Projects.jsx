import "../style.css";

export default function Projects() {
  return (
    <>
      <section className="project-section">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">

          {/* project 1: Tech-Commerce */}

          <a className="project-link" href="https://tech-commercee.netlify.app/" target="_blank">
            <div className="project-card">
              <h3>Tech Commerce</h3>
              <p>
                A full-featured e-commerce platform build with web technologies,
                focusing on product listing user experience.
              </p>
            </div>
          </a>

          {/* project 2: Tic-Tac-Toe */}

          <a className="project-link" href="https://anuj22-lucario.github.io/Tic-Tac-Toe/" target="_blank">
            <div className="project-card">
              <h3>Tic-Tac-Toe Game</h3>
              <p>
                An interactive web game featuring complex game logic and
                real-time DOM manipulation using JavaScript.
              </p>
            </div>
          </a>

          {/* project 3: Currency Converter */}

          <a className="project-link" href="https://anuj22-lucario.github.io/Currency-Converter/" target="_blank">
            <div className="project-card">
              <h3>Currency Converter</h3>
              <p>
                A real-time currency conversion tool using external APIs to
                fetch live exchange rates.
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
