/* global module: false, require: false, __dirname: false, process: false */

var path = require('path');
var config = require('./config/grunt_config');

module.exports = function (grunt) {

    var env = grunt.option('env') || 'alpha';
    var assetUrl = config.build('assetUrl', env);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        '<%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        
        watch: {
            sass: {
                files: [
                    'front/src/styles/**/*.scss'
                ],
                tasks: [
                    'sass:dev'
                ]
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint']
            },
            handlebars: {
                files: [
                    'front/src/templates/helpers.js',
                    'front/src/templates/**/*.hbs'
                ],
                tasks: ['templates']
            }
            // html: {
            //     files: ['templates/**/*.ejs'],
            //     tasks: ['html:dev']
            // }
        },

        // clean: {
        //     dev: [
                // "app/index.html",
                // "app/geo-lockout.html",
                // "app/public/styles",
                // "app/public/scripts",
                // "app/public/images",
                // "app/public/fonts",
                // "app/public/player"
        //     ],
        //     test: [
        //         "_SpecRunner.html",
        //         "test/junit"
        //     ],
        //     dist: ["dist"],
        //     docs: ["docs"]
        // },

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
                'app/**/*.js',
                'front/src/scripts/**/*.js',
                'test/spec/**/*.js',
                'utils/**/*.js',
                '!front/src/scripts/templates/**/*.js'
            ]
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: true
                },
                files: {
                    'front/public/styles/css/app.css': 'front/src/styles/sass/app.scss',
                    'front/public/styles/css/foundation.css': 'front/src/styles/sass/foundation.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    compass: true
                },
                files: {
                    'front/public/styles/css/app.css': 'front/src/styles/sass/app.scss'
                }
            }
        },

        // jasmine: {
        //     custom: {
        //         options: {
        //             specs: ['test/spec/**/*.js'],
        //             junit: {
        //                 path: "test/junit"
        //             },
        //             host: 'http://127.0.0.1:<%= connect.test.options.port %>/',
        //             template: 'test/runner.tmpl',
        //             templateOptions: {
        //                 baseUrl: '<%= requirejs.compile.options.baseUrl %>',
        //                 config: '<%= requirejs.compile.options.mainConfigFile %>',
        //                 requirejs: 'app/public/packages/requirejs/require.js'
        //             }
        //         }
        //     }
        // },

        // requirejs: {
        //     compile: {
        //         options: {
        //             name: 'main',
        //             baseUrl: './app/src/scripts/',
        //             mainConfigFile: 'app/src/scripts/config/require.js',
        //             out: 'dist/build/public/scripts/app.js',
        //             optimize: 'none'
        //         }
        //     }
        // },

        // compass: {
        //     options: {
        //         httpPath: '/',
        //         cssDir: 'front/public/styles/css',
        //         sassDir: 'front/src/styles/sass',
        //         specify: 'front/src/styles/sass/*.scss',
        //         imagesDir: 'front/public/images',
        //         fontsDir: 'public/fonts',
        //         generatedImagesDir: 'front/public/images',
        //         httpImagesPath: '/public/images/',
        //         httpGeneratedImagesPath: '/public/images/',
        //         require: ['sass-css-importer', 'susy']
        //     },
        //     dist: {
        //         options: {
        //             cssDir: 'dist/build/public/css'
        //         }
        //     },
        //     dev: {}
        // },

        // ejs: {
        //     options: {
        //         copyright: '<%= new Date().getFullYear() %>'
        //     },
        //     dev: {
        //         options: {
        //             title: 'RHUSA',
        //             config: assetUrl + '/src/scripts/config/require.js',
        //             entry: assetUrl + '/public/packages/requirejs/require.js',
        //             version: '<%= ejs.options.version %>'
        //         },
        //         src: 'templates/index.ejs',
        //         dest: 'app/index.html'
        //     },
        //     dist: {
        //         options: {
        //             title: 'RHUSA',
        //             entry: assetUrl + '/public/scripts/app.js?rel=' +
        //                    '<%= new Date().getTime() %>',
        //             version: '<%= ejs.options.version %>'
        //         },
        //         src: 'templates/index.ejs',
        //         dest: 'dist/build/index.html'
        //     }
        // },

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
                cwd: 'front/src/templates/',
                src: '**/*.hbs',
                dest: 'front/src/scripts/templates/',
                ext: '.js'
            }
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            handlebars: {
                src: [
                    'front/public/packages/handlebars/handlebars.runtime.js',
                    'front/src/scripts/templates/helpers.js'
                ],
                dest: 'front/public/scripts/handlebars.js'
            },
            js: {
                src: [
                    'front/public/packages/almond/almond.js',
                    'dist/build/public/scripts/app.js'
                ],
                dest: 'dist/release/public/scripts/app.js'
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/release/public/styles/css/app.css': [
                        'dist/build/public/css/app.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.js.dest %>',
                dest: '<%= concat.js.dest %>'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true
                },
                files: {
                    'dist/release/index.html': 'dist/build/index.html'
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'front/src/html',
                        src: ['**'],
                        dest: 'front/'
                    },
                    {
                        expand: true,
                        cwd: 'front/src/images',
                        src: ['**'],
                        dest: 'front/public/images/'
                    },
                    {
                        src: 'front/public/packages/modernizr/modernizr.js',
                        dest: 'front/public/scripts/modernizr.js'
                    },
                    {
                        expand: true,
                        cwd: 'front/src/fonts',
                        src: ['**'],
                        dest: 'front/public/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'front/public/packages/fontawesome/fonts',
                        src: '*.{eot,svg,ttf,woff,otf}',
                        dest: 'front/public/styles/fonts'
                    }
                ]
            },
            release: {
                files: [
                    {
                        expand: true,
                        cwd: 'front/src/html',
                        src: ['**'],
                        dest: 'dist/release/'
                    },
                    {
                        expand: true,
                        cwd: 'front/public/images',
                        src: ['**'],
                        dest: 'dist/release/public/images/'
                    },
                    {
                        expand: true,
                        cwd: 'front/public/packages/fontawesome/fonts',
                        src: ['**'],
                        dest: 'dist/release/public/styles/fonts'
                    },
                    {
                        src: 'front/favicon.ico',
                        dest: 'dist/release/favicon.ico'
                    },
                    {
                        expand: true,
                        cwd: 'front/public/packages/select2',
                        src: '*.{png,jpg,jpeg,gif}',
                        dest: 'dist/release/public/styles/css'
                    },
                    {
                        src: 'front/public/scripts/modernizr.js',
                        dest: 'dist/release/public/scripts/modernizr.js'
                    }
                ]
            }
        },
        "git-describe": {
            hash: {
                options: {
                    template: '{%=object%}'
                }
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                version: '<%= pkg.version %>',
                options: {
                    paths: ['front/src/scripts/'],
                    outdir: 'docs/'
                }
            }
        },
        concurrent: {
            dev: {
                tasks: [
                    'templates',
                    'copy:build',
                    'css:dev',
                    'html:dev',
                    'proxy:dev',
                    'watch'
                ],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        shell: {
            images: {
                command: './utils/convert.sh',
                options: {
                    stdout: true
                }
            }
        }
    });

    // Load npm tasks.
    grunt.util._.each([
        'contrib-clean',
        'contrib-sass',
        'contrib-concat',
        'contrib-copy',
        'contrib-handlebars',
        'contrib-htmlmin',
        'contrib-jasmine',
        'contrib-jshint',
        'contrib-cssmin',
        'contrib-requirejs',
        'contrib-uglify',
        'contrib-yuidoc',
        'contrib-watch'
    ], function (tasks) {
        grunt.loadNpmTasks('grunt-' + tasks);
    });

    // Register local tasks.
    grunt.registerTask('templates', [
        'handlebars:compile'
        // 'concat:handlebars'
    ]);

    grunt.registerTask('test', ['connect:test', 'templates', 'jasmine']);

    grunt.registerTask('test:debug', [
        'templates',
        'jasmine:custom:build',
        'connect:specrunner'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'test',
        'copy:build',
        'css:dist',
        'html:dist',
        'manifest',
        'requirejs'
    ]);

    grunt.registerTask('release', [
        'build',
        'concat',
        'cssmin',
        'uglify',
        'htmlmin',
        'manifest',
        'copy:release'
    ]);

    grunt.registerTask('run:docs', [
        'clean:docs',
        'yuidoc',
        'connect:docs'
    ]);

    grunt.event.on('git-describe', function (matches) {
        grunt.config.set(
            'ejs.options.version',
            '<%= pkg.title || pkg.name %> - v<%= pkg.version %>+' +
            matches.toString() + ' (Built <%= grunt.template.today() %>)'
        );
    });

    grunt.registerTask('html', function () {
        var gitHash = process.env['GIT_HASH'];
        var options;

        if (gitHash) {
            grunt.event.emit('git-describe', gitHash.substring(0, 7));
        } else {
            grunt.task.run('git-describe');
        }

        options = grunt.config.get('ejs.options');

        grunt.util._.extend(options, {
            environment: env,
            assetUrl: assetUrl
        });

        grunt.config.set('ejs.options', options);
        grunt.task.run('ejs:' + this.args[0]);
    });

    grunt.registerTask('css', function () {
        var options = grunt.config.get('compass.options');

        grunt.util._.extend(options, {
            httpPath: assetUrl + '/',
            httpImagesPath: assetUrl + '/public/images/',
            httpGeneratedImagesPath: assetUrl + '/public/images/'
        });

        grunt.config.set('compass.options', options);
        grunt.task.run('compass:' + this.args[0]);
    });

    grunt.registerTask('proxy', function () {
        var done = this.async();
        var app = require('./utils/proxy')();
        app.on('close', done);
    });

    grunt.registerTask('run:dev', [
        'templates',
        'copy:build',
        'css:dev'
        // 'html:dev',
        // 'manifest',
        // 'proxy:dev'
    ]);

    grunt.registerTask('default', ['concurrent:dev']);

    grunt.registerTask('run:release', [
        'release',
        'proxy:release'
    ]);


    grunt.loadNpmTasks('grunt-notify');

};
