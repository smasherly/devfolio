import React from 'react';

import Section from '../section';

interface SectionAboutProps {
  about: string;
}

const SectionAbout: React.FC<SectionAboutProps> = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
