import { render } from '@testing-library/react';
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
    <li style={{ backgroundColor: props.backgroundColor }}>
      {props.text}
      <span>
        <img src={props.emoji} alt="Level description emoji" />
      </span>
    </li>
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
      <ul className="skills">
        <Skill
          text="HTML+CSS"
          emoji="./images/emojis/strong.jpeg"
          backgroundColor="blue"
        />
        <Skill
          text="JavaScipt"
          emoji="./images/emojis/strong.jpeg"
          backgroundColor="yellow"
        />
        <Skill
          text="Web Design"
          emoji="./images/emojis/strong.jpeg"
          backgroundColor="yellowgreen "
        />
        <Skill
          text="GitHub"
          emoji="./images/emojis/thumbs-up.jpeg"
          backgroundColor="maroon"
        />
        <Skill
          text="React"
          emoji="./images/emojis/strong.jpeg"
          backgroundColor="lightblue"
        />
        <Skill
          text="Svelte"
          emoji="./images/emojis/strong.jpeg"
          backgroundColor="crimson"
        />
      </ul>
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
