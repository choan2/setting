
##라이브코딩 방법

''module.exports = function(grunt) {
''	// Project configuration.
''	grunt.initConfig({
''		 pkg: grunt.file.readJSON('package.json'),
''	    // Grunt express - our webserver
''		// https://github.com/blai/grunt-express
''		express: {
''		    all: {
''		        options: {
''		            bases: ['C:\\Users\\woodam\\Desktop\\grunt'],
''		            port: 8080,
''		            hostname: "0.0.0.0",
''		            livereload: true
''		        }
''		    }
''		},
''
''		// grunt-watch will monitor the projects files
''		// https://github.com/gruntjs/grunt-contrib-watch
''		watch: {
''		    html: {
''	            files: ['**/*.html'], //걍 html ㅇㅇ
''	            options: {
''	                livereload: true
''	            }
''	        }
''		},
''
''		// grunt-open will open your browser at the project's URL
''		// https://www.npmjs.org/package/grunt-open
''		open: {
''		    all: {
''		        path: 'http://localhost:8080/index.html'
''		    }
''		}
''	});
''
''
''	/* 작업에 필요한 모듈 로드하기
''	 * grunt.loadNpmTasks('grunt-ANY-PLUGIN');
''	 */ 
''	for (var key in grunt.file.readJSON("package.json").devDependencies) {
''		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
''	}
''
''  // Default task(s).
''  grunt.registerTask('default', ['express', 'open', 'watch']);
''
''};

#<script src="//localhost:35729/livereload.js"></script> 기본포트는 35729이다


