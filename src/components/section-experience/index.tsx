import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

interface Role {
  name: string;
  description: string;
  link: string;
}

interface Experience {
  company: string;
  roles: Role[];
}

interface SectionExperienceProps {
  experience: Experience[];
}

const SectionExperience: React.FC<SectionExperienceProps> = ({
  experience,
}) => {
  if (!experience || !experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((group, index) => (
        <div key={index}>
          <h3 style={{ fontWeight: 'bold' }}>{group.company}</h3>
          {group.roles.map((role, idx) => (
            <SummaryItem
              key={idx}
              name={role.name}
              description={role.description}
              link={role.link}
            />
          ))}
        </div>
      ))}
    </Section>
  );
};

export default SectionExperience;
