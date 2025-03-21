import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience || !experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((group, index) => (
        <div key={index}>
          <h3 style={{ fontWeight: 'bold' }}>{group.company}</h3>
          {group.roles.map((role, idx) => (
            <SummaryItem
              key={idx}
              // You can choose how to display each role; for example, using the description as both title and text
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
