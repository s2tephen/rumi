module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        options: {
          jshintrc: "jshintrc.json"
        },
        src: ["models/**/*.js", "lib/**/*.js", "client/views/**/*.js", "client/routes.js", "client/helpers.js", "server/**/*.js"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
