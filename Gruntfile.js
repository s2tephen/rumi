module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        options: {
          jshintrc: "jshintrc.json"
        },
        src: ["meteor/models/**/*.js", "meteor/lib/**/*.js", "meteor/client/views/**/*.js", "meteor/client/routes.js", "meteor/client/helpers.js", "meteor/server/**/*.js"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
