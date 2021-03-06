module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
		/* 파일 합치기
		 * https://github.com/gruntjs/grunt-contrib-concat
		 */
		concat: {
			/*css: {
				files: {
					'dist/ui.css' : ['source/css/*.css'] 
				}
			},*/
			js: {
				files: {
					'dist/ui.js' : ['source/js/*.js'] 
				}
			}
		},

		/* 자바스크립트 파일 압축하기
		 * https://github.com/gruntjs/grunt-contrib-uglify 
		 */ 
		uglify: {
			dist: {
				files: {
					'dist/ui.min.js': ['dist/ui.js']
				}
			}
		},

		/* less파일 -> css파일로변환
		 * https://github.com/gruntjs/grunt-contrib-less
		 */
		less: {
			dist: {
				files: {
					'dist/ui.css' : ['source/less/reset.less'] 
				}
			}
		},

		// .css파일 .min.css 파일로 압축하기
		cssmin: {
			dist: {
				expand: true,

				cwd: 'dist/',
				src: ['*.css', '!*.min.css'],

				dest: 'dist/',
				ext: '.min.css'
			}
		},
		imagemin: {
			/*static: {
				options: {
					optimizationLevel: 7
				}
			},*/
			dynamic: {
				files: [{
					expand: true,
					cwd: 'source/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/'
				}]
			}
		},
		watch: {
			/*css:{
				files: ['source/css/*.css'],
				tasks: ['concat:css', 'cssmin']
			},*/
			js:{
				files: ['source/js/*.js'],
				tasks: ['concat:js', 'uglify'],
				options: {
        			// Start another live reload server on port 3000
        			livereload: true
      			}
			},
			less:{
				files: ['source/less/*.less'],
				tasks: ['less', 'cssmin'],
				options: {
        			// Start another live reload server on port 3000
        			livereload: true
      			}
			},
			images: {
				files: ['source/**/*.{png,jpg,gif}'],
				tasks: ['imagemin:dynamic'],
				options: {
					spawn: false,
					livereload: true
				}
			}//,			
	        //html: {
	          //  files: ['**/*.html'],
	           // options: {
	            //    livereload: true
	            //}
	        //}
		}
	});


	/* 작업에 필요한 모듈 로드하기
	 * grunt.loadNpmTasks('grunt-ANY-PLUGIN');
	 */ 
	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
	}

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin','imagemin', 'watch']);

};