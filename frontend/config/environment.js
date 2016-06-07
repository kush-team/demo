/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-kt-editor',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
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

  ENV['adapter'] = {
    'host': 'http://192.168.0.104:1138',
    'namespace': 'api'     
  };


  ENV['contentSecurityPolicy'] = {
      'default-src': "* 'unsafe-inline' 'unsafe-eval'",
      'script-src': "* 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* 'unsafe-inline' 'unsafe-eval'",
      'connect-src': "*",
      'img-src': "* 'unsafe-inline' 'unsafe-eval'",
      'style-src': "* 'unsafe-inline' 'unsafe-eval'",
      'media-src': "* 'unsafe-inline' 'unsafe-eval'",
      'report-uri': 'http://irreversible.cc'
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token',
    crossOriginWhitelist: ['http://192.168.0.104:1138'],

    session: 'session:custom',
  };

  // Sailsjs JSON Web Token (JWT) Configuration
  ENV['simple-auth-token'] = {
    serverTokenEndpoint: 'http://192.168.0.104:1138/auth/login',
    authorizationPrefix: null,
    tokenPropertyName: 'access_token',
    authorizationHeaderName: 'access_token',
    identificationField: 'email',
  };   

  ENV['ember-can'] = {
    inject: {
      session: 'session:custom'
    }
  };      
  
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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

  }


  return ENV;
};