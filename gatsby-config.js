module.exports = {
    siteMetadata: {
        siteUrl: 'https://kryptonmc.org',
        title: 'Krypton'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-advanced-sitemap',
            options: {
                exclude: ['/repository', '/404', '/discord']
            }
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://kryptonmc.org',
                sitemap: 'https://kryptonmc.org/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        }
    ]
};
