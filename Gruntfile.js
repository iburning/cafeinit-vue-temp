/**
 * @fileOverview Gruntfile
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-16
 */


'use strict';

module.exports = function (grunt) {
  // require('time-grunt')(grunt);

  // Force use of Unix newlines
  grunt.util.normalizelf('\n');

  // grunt.file.setBase('../../');

  var config = {
    src: './src',
    dist: './dist'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: config,

    watch: {
      less: {
        files: '<%= config.src %>/less/**/*.less',
        tasks: ['less'],
        options: {}
      }
    },

    less: {
      development: {
        // options: {
        //   paths: ['<%= config.src %>/less']
        // },
        files: {
          '<%= config.dist %>/css/cafeinit.css': '<%= config.src %>/less/cafeinit.less'
        }
      },

      // production: {
      //   options: {
      //     paths: ['assets/css'],
      //     plugins: [
      //       new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
      //       new (require('less-plugin-clean-css'))(cleanCssOptions)
      //     ],
      //     modifyVars: {
      //       imgPath: '"http://mycdn.com/path/to/images"',
      //       bgColor: 'red'
      //     }
      //   },
      //   files: {
      //     'path/to/result.css': 'path/to/source.less'
      //   }
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
};
