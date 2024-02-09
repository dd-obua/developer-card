import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import skills from './skills';
import './css/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

const Avatar = () => {
  return <img className="developer-image" src="images/dev-img.webp" alt="Developer" />;
};

const Skill = ({ skill, color, level }) => {
  return (
    <li style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '🌝'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </li>
  );
};

const SkillList = () => {
  return (
    <ul className="skills">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
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
