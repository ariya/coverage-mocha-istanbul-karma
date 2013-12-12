module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['mocha'],
    files: [
      'sqrt.js',
      'test/*.js'
    ],
    browsers: ['PhantomJS', 'Firefox'],

    reporters: ['progress', 'coverage'],
    preprocessors: { '*.js': ['coverage'] },

    singleRun: true
  });
};
