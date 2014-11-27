/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-hub');

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    hub: {
      all: {
        src: ['ng-app/Gruntfile.js'],
        tasks: ['build'],
      },
    },
  });

  grunt.registerTask('heroku', ['hub:all']);

};
