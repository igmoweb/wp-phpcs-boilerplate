module.exports = function( grunt ) {

	var PRE_COMMIT_INSTALL = './tools/wp-dev-lib/install-pre-commit-hook.sh';

	grunt.loadNpmTasks('grunt-shell');

	// Project config
	grunt.initConfig( {
		shell: {
			installprecommithook: {
				command: 'if [ -f "' + PRE_COMMIT_INSTALL + '" ]; then sh ' + PRE_COMMIT_INSTALL + '; fi'
			}
		}
	} );

	grunt.registerTask( 'install', function() {
		if ( false === grunt.file.exists( './.git/hooks/pre-commit' ) ) {
			grunt.task.run( 'shell:installprecommithook' );
		}
	} );
};
