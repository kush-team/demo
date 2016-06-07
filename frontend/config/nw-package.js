// config/nw-package.js

module.exports = {
  appName: 'ember-kt-editor',
  platforms: ['win64', 'win32'],
  version: '0.12.2',
  buildType: function() {
    return this.appVersion;
  }
};