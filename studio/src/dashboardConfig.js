export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602ec9381289422115520c7e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4kjsatrt',
                  apiId: 'e600c62f-293e-4c53-9f0a-2087c38a949b'
                },
                {
                  buildHookId: '602ec9389237d523a3950d32',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9pr5p94p',
                  apiId: '1beecba3-cf15-49d2-9c26-801f3ba1f9c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thematthopkins/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9pr5p94p.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
