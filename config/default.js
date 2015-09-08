'use strict';


module.exports = {
  log: {
    level: 'debug',
    file: 'morpheus.log',
  },
  'repositoryStrategy': {
    type: 'file-system-repository-strategy'
  },
  debug: true, //useful for seeing some logs in the browser console
  permalinkStructure:'/:year/:month/:day/:title/', //you can also use /:title/ or '/:year/:month/:title/'
  postPerPage: 3, // number of posts per page
  siteUrl: 'http://morpheus-reactblog-d5a6.coding.io:8080', // the url of your website
  useSSL: false, // if true it redirects all incoming requests to the https url
  siteTitle: 'Morpheus',
  theme: 'blablabla', // currently used theme
  siteDescription: '- say hi to the next generation web publishing platform -',
  port: 8080,
  ip: '0.0.0.0',
  authors: {
    'admin@hainuo.info': {
      meta: 'I really like to write :)'
    }
  },
  googleAnalytics : 'UA-XXXXX', //your google analytics tracking code
  disqusComments : 'hainuo' //your disqus shortname
};
