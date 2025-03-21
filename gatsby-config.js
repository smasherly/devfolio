module.exports = {
  pathPrefix: '/devfolio',

  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ashleyholbrook.com/`,
    // Your Name
    name: 'Ashley Holbrook',
    // Main Site Title
    title: `Ashley Holbrook | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer with over 4 years of professional experience in JavaScript/TypeScript applications (React, Node.js).`,
    // Optional: Github account URL
    github: `https://github.com/smasherly`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ashley-holbrook`,
    // Content of the About Me section
    about: `I'm a Software Developer with over 4 years of professional experience building high-quality JavaScript/TypeScript applications (React, Node.js). I specialize in crafting robust, scalable web apps with a strong focus on usability and interface polish, drawing on my background in design. I also bring a solid foundation in testing — from edge cases to exploratory testing — to ensure reliability and maintainability at every stage of development. I take pride in clean, tested code and enjoy mentoring junior developers on remote agile teams.`,
    // List your projects
    projects: [
      {
        name: `Today's Dollars`,
        description:
          'Google Chrome Extension that calculates inflation-adjusted USD values using CPI-U data. Built with JavaScript, HTML5, and CSS.',
        link: 'https://chromewebstore.google.com/detail/bfdehmfnafpnhfgaocbkjdidgcomapik?utm_source=item-share-cb',
      },
      {
        name: `The Internet, MUI`,
        description:
          'I created this project to remake The Internet (https://the-internet.herokuapp.com/), a well known website used for automated testing UI features, to use React, Typescript, and MUI.',
        link: 'https://cremalab.github.io/the-internet-crema/#/',
      },
      {
        name: `Booster Club Site`,
        description:
          'Subscription management SPA enabling parents to download football game photos via AWS S3 integration. Built with React.js, Node.js/Express, GraphQL, AWS, and Strapi.',
        link: 'https://osfalconfootball.com/',
      },
    ],
    // List your experience
    experience: [
      {
        company: 'Crema',
        roles: [
          {
            description: 'Software Developer II (Jan. 2023 – Present)',
            link: '',
          },
          {
            description: 'Software Developer I (Jan. 2022 – Dec. 2022)',
            link: '',
          },
          {
            description:
              'Software Developer Apprentice (Jan. 2021 – Dec. 2021)',
            link: '',
          },
          {
            description: 'Senior Test Developer (Jan. 2020 – Dec. 2020)',
            link: '',
          },
          { description: 'Test Developer (Nov. 2017 – Dec. 2019)', link: '' },
        ],
      },
      {
        company: 'Tabco Inc.',
        roles: [
          {
            description: 'Prepress Coordinator (Jul. 2011 – Nov. 2017)',
            link: '',
          },
        ],
      },
    ],

    // List your skills
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'React.js, TypeScript, JavaScript, Node.js, Express, TurboRepo, Material UI, Tailwind CSS, DaisyUI, GraphQL',
      },
      {
        name: 'Tools & Testing',
        description:
          'Jest, Cypress, WDIO, Mocha, Chai, AWS, Docker, CI/CD, WCAG Compliance',
      },
      {
        name: 'Soft Skills',
        description:
          'Analytic thinking, Debugging, Customer-Centric Focus, Communication, Problem Solving, Mentorship, Adaptability',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
