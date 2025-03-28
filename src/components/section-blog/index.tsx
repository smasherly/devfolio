import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

interface MarkdownRemark {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
    };
  };
}

interface SectionBlogProps {
  posts: MarkdownRemark[];
}

const SectionBlog: React.FC<SectionBlogProps> = ({ posts }) => {
  return (
    <Section title="Latest Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
      {posts.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/blog">
          View all posts &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionBlog;
