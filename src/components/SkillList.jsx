import Skill from './Skill';
import skills from '../skills';

const SkillList = () => {
  return (
    <ul className="skills">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </ul>
  );
};

export default SkillList;
