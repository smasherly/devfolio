import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

interface Skill {
  name: string;
  description: string;
}

interface SectionSkillsProps {
  skills: Skill[];
}

const SectionSkills: React.FC<SectionSkillsProps> = ({ skills }) => {
  return (
    <Section title="Skills">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;
