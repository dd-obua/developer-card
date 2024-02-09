import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

const Avatar = () => {
  return <img className="developer-image" src="images/dev-img.webp" alt="Developer" />;
};

const Skill = (props) => {
  return (
    <li style={{ backgroundColor: props.color }}>
      <span>{props.text}</span>
      <span>{props.emoji}</span>
    </li>
  );
};

const SkillList = () => {
  return (
    <ul className="skills">
      <Skill text="HTML+CSS" emoji="💪" color="blue" />
      <Skill text="JavaScipt" emoji="💪" color="yellow" />
      <Skill text="Web Design" emoji="💪" color="yellowgreen " />
      <Skill text="GitHub" emoji="💪" color="maroon" />
      <Skill text="React" emoji="💪" color="lightblue" />
      <Skill text="Svelte" emoji="🌝" color="crimson" />
    </ul>
  );
};

const Details = () => {
  return (
    <div className="details">
      <h2>Jan Doe</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis ad nostrum
        fugit ipsam quasi ullam cumque ratione pariatur obcaecati laudantium, magnam
        veniam eos? Accusamus officiis architecto corrupti maiores labore.
      </p>
      <SkillList />
    </div>
  );
};

const App = () => {
  return (
    <article className="card">
      <Avatar />
      <Details />
    </article>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
