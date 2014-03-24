'use strict';
module.exports = function(grunt) {

    //show elapsed time at the end    
    require('time-grunt')(grunt);

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: [
				'Gruntfile.js',
				'package.json',
				'source/**/*.js',
				'<%= nodeunit.tests %>'
			]
		},
		nodeunit: {
			tests: ['tests/nodeunit/*_test.js']
		},
		connect: {
			www: {
				options: {
					// keepalive: true,
					base: 'source',
					port: 4545
				}
			}
		},
		casperjs: {
			test: {
				files: [{
					src: ['tests/ghost/*_test.js']
				}]
			},
			options: {
				args: {
                                    baseUrl: 'http://google.at'
					//baseUrl: 'http://localhost:' +
					//	'<%= connect.www.options.port %>/'
				},
				direct: false,
				logLevel: 'error',
				printCommand: false,
                                pre: 'tests/ghost/pre.js',
				printFilePaths: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-casperjs');

	//grunt.registerTask('test', ['jshint', 'nodeunit', 'connect', 'ghost']);
        grunt.registerTask('test', ['casperjs']);
	grunt.registerTask('default', ['connect']);
};
