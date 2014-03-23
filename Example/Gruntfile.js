module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    phantom: {
      build: {
        src: 'demo.html',
        dest: 'build/rendering.html'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // load phantom
  grunt.loadNpmTasks('grunt-phantom');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('render', ['phantom']);
};
