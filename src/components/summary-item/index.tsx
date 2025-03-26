import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

interface SummaryItemProps {
  name: string;
  description: string;
  link?: string | boolean;
  internal?: boolean;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  name,
  description,
  link = false,
  internal = false,
}) => {
  let linkContent;
  if (internal && typeof link === 'string') {
    linkContent = <Link to={link}>{name}</Link>;
  } else if (typeof link === 'string') {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
