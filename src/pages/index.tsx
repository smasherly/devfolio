import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

interface Project {
  name: string;
  description: string;
  link: string;
}

interface Role {
  name: string;
  description: string;
  link: string;
}

interface Experience {
  company: string;
  roles: Role[];
}

interface Skill {
  name: string;
  description: string;
}

interface SiteMetadata {
  name: string;
  title: string;
  description: string;
  about: string;
  author: string;
  github: string;
  linkedin: string;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
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

const Index: React.FC<PageProps> = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {!noBlog && <SectionBlog posts={posts} />}
    </Layout>
  );
};

export default Index;

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
        projects {
          name
          description
          link
        }
        experience {
          company
          roles {
            name
            description
            link
          }
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
