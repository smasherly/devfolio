import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

interface Project {
  name: string;
  description: string;
  link: string;
}

interface SectionProjectsProps {
  projects: Project[];
}

const SectionProjects: React.FC<SectionProjectsProps> = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
