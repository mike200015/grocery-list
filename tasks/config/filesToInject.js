/**
 * Files injected into index.html by gulp-inject
 * used by tasks inject & watch
 */

module.exports = [
  'public/app.js',
  'public/animations/*.js',
  'public/directives/**/*.js', '!public/directives/**/*.spec.js',
  'public/components/**/*.js', '!public/components/**/*.spec.js',
  'public/providers/**/*.js',
  'public/filters/**/*.js', '!public/filters/**/*.spec.js',
  'public/services/**/*.js', '!public/services/**/*.spec.js',
  'public/views/**/*.js', '!public/views/**/*.spec.js', '!public/views/**/*.e2e.js'
];
