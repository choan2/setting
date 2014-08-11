
##라이브코딩 방법


''module.exports = function(grunt) {	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),	 
		express: {
		    all: {
		        options: {
		            bases: ['C:\\Users\\woodam\\Desktop\\grunt'],
		            port: 8080,
		            hostname: "0.0.0.0",
		            livereload: true
		        }
		    }
		},		
		watch: {
		    html: {
	            files: ['**/*.html'], //걍 html ㅇㅇ
	            options: {
	                livereload: true
	            }
	        }
		},
		open: {
		    all: {
		        path: 'http://localhost:8080/index.html'
		    }
		}
	});
	
	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
	} 
  grunt.registerTask('default', ['express', 'open', 'watch']);
};''


## <script src="//localhost:35729/livereload.js"></script> 기본포트는 35729이다


