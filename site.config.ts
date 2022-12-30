import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1b1c5b696f3648a5b3d6fd0c8503c129',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Personal site of Oleksii Semisalov',
  domain: 'osemisalov.dev',
  author: 'Oleksii Semisalov',

  // open graph metadata (optional)
  description: 'Personal site of Oleksii Semisalov',

  // social usernames (optional)
  //twitter: 'transitive_bs',
  github: 'semisalov',
  linkedin: 'oleksii-semisalov',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,


  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'd3406989c4114fcab9bbabf97a3959e5'
    },
    {
      title: 'Contact',
      pageId: 'fe9a1fd48f30472ca2316c5bef29ff14'
    }
  ]
})
