module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mkdir: {
      all: {
        options: {
          create: ['img/extrasmall']
        }
      }
    },
    imageoptim: {
      myTask: {
        options: {
          jpegMini: false,
          imageAlpha: true,
          quitAfter: true
        },
        src: ['img/extrasmall']
      },
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            rename: false,
            width: 140,
            quality: 100
          }]
        },
      files: [{
        expand: true,
        src: ['**.{jpg,gif,png}'], // Files to be matched for the task.
        cwd: 'img', // Where the files are to be taken from.
        dest: 'img/extrasmall' // Where the new files are to be stored.
        }]
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          "dist/app.js": "src/app.js"
        }
      }
    }
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('images', ['mkdir', 'responsive_images', 'imageoptim']);
  grunt.registerTask('default', ['babel']);
};
