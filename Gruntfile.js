// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {
 
  // Load Grunt tasks declared in the package.json file
  var path = require('path');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  // Configure Grunt 
  grunt.initConfig({
 
    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
		  bases: path.resolve(__dirname),
          livereload: true
        }
      }
    },
 
    // grunt-watch will monitor the projects files
    //watch: {
    //  all: {
    //    files: 'index.html',
    //    options: {
    //      livereload: true
    //    }
    //  }
    //},
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  });
 
  // Creates the `server` task
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);
};