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

interface BlogPostsProps {
  posts: MarkdownRemark[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <Section title="All Blog Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default BlogPosts;
