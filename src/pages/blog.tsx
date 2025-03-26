import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';

interface SiteMetadata {
  name: string;
  title: string;
  description: string;
  about: string;
  author: string;
  github: string;
  linkedin: string;
}

interface MarkdownRemark {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      description: string;
    };
  };
}

interface PageData {
  site: {
    siteMetadata: SiteMetadata;
  };
  allMarkdownRemark: {
    edges: MarkdownRemark[];
  };
}

interface PageProps {
  data: PageData;
}

const BlogPage: React.FC<PageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <Header metadata={data.site.siteMetadata} />
      {!noBlog && <BlogPosts posts={posts} />}
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
