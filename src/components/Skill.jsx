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

export default Skill;
