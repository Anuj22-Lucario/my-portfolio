import "../style.css";

export default function Skills() {
  return (
    <>
      <section className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <ul className="skills-list">
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/Java" target="_blank"><li>Java</li></a>
          <a href="https://react.dev/learn" target="_blank"><li>React</li></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><li>JavaScript</li></a>
          <a href="cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json" target="_blank"><li>HTML</li></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><li>CSS</li></a>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank"><li>Bootstrap</li></a>
        </ul>
      </section>
    </>
  );
}
