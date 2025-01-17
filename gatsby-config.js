module.exports = {
  siteMetadata: {
    title: `Bruno Luiz Blog`,
    author: `Bruno Luiz Silva`,
    description: `Personal Blog by Bruno Luiz Silva | A collection of random software engineering thoughts.`,
    siteUrl: `https://brunoluiz.net`,
    social: {
      email: `contact@brunoluiz.net`,
      twitter: `brunoluiz`,
      github: 'brunoluiz'
    },
    icon: `/coffee.png`
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://brunoluiz.net`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-86893932-1'
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bruno Luiz Blog`,
        short_name: `Bruno Luiz Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/coffee.svg`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `brunoluiz`
      }
    }
  ]
}
