module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                bitwise: false,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                es3: true,
                globals: {
                    // for node/browser compat
                    "global": false,
                    // requirejs
                    "define": false,
                    "require": true,
                    // handlebars, for helpers file
                    "Handlebars": false,
                    // jasmine
                    "beforeEach": false,
                    "describe": false,
                    "xdescribe": false,
                    "expect": false,
                    "it": false,
                    "xit": false,
                    "jasmine": false,
                    "runs": false,
                    "spyOn": false,
                    "waits": false,
                    "waitsFor": false,
                    "addToHome": true,
                    "Modernizr": true,
                    "module": true
                }
            },
            all: [
                'Gruntfile.js',
                'public/scripts/**/*.js',
                '!public/scripts/templates/**/*.js',
                '!public/scripts/config/handlebars.js'
            ]
        },

        watch: {
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint']
            },
            handlebars: {
                files: [
                    'templates/**/*.hbs'
                ],
                tasks: ['templates']
            }
        },

        handlebars: {
            compile: {
                options: {
                    amd: true,
                    namespace: false,
                    partialRegex: /.*\.hbs/,
                    partialsPathRegex: /\/partials\//,
                    processPartialName: function (filePath) {
                        var frags = filePath.split('/');
                        var fileName = grunt.util._.last(frags);
                        var fileFrag = fileName.split('.')[0];
                        var partialFrag = frags.indexOf('partials');

                        frags = grunt.util._.rest(frags, partialFrag + 1);
                        frags.splice(frags.length - 1, 1, fileFrag);

                        return frags.join('/');
                    }
                },
                expand: true,
                cwd: 'templates/',
                src: '**/*.hbs',
                dest: 'public/scripts/templates/',
                ext: '.js'
            }
        }

    });

    // Load npm tasks.
    grunt.util._.each([
        'contrib-jshint',
        'contrib-watch',
        'contrib-handlebars'
    ], function (tasks) {
        grunt.loadNpmTasks('grunt-' + tasks);
    });

    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('templates', [
        'handlebars:compile'
    ]);
};