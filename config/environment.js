/* jshint node: true */

module.exports = function(environment) {
  
  var ENV = {
    modulePrefix: 'ckdu-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' http://use.typekit.net  https://platform.twitter.com  http://connect.facebook.net",
      'font-src': "'self' http://typekit.net", 
      'connect-src': "'self' http://localhost:3000",
      'img-src': "'self' http://www.gravatar.com http://p.typekit.net http://s3.amazonaws.com https://syndication.twitter.com", 
      'style-src': "'self' 'unsafe-inline' http://use.typekit.net", 
      'media-src': "'self' http://ckdu.dal.ca:8000",
      'frame-src': "http://platform.twitter.com https://www.facebook.com http://www.facebook.com https://s-static.ak.facebook.com http://static.ak.facebook.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
    
  if (environment === 'development') {
    ENV.ACTIVE_MODEL_API_URL = 'http://localhost:3000/api/v1';
    ENV.apiHost = 'http://localhost:3000';

    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;


  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.ACTIVE_MODEL_API_URL = "http://staging.ckdu.ca/api/v1";
    ENV.apiHost = 'http://staging.ckdu.ca';
  }

  return ENV;
};
