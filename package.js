Package.describe({
    name: 'coniel:react-tap-event-plugin',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: 'Add the react tap event plugin to your project',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/coniel/meteor-react-tap-event-plugin.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({
    'externalify': '0.1.0',
    'react-tap-event-plugin': '0.2.1'
});

Package.onUse(function(api){

    api.use(['react@0.14.3']);
    api.use(['cosmos:browserify@0.8.1']);


    api.addFiles([
        'client.browserify.options.json',
        'client.browserify.js'
    ]);

    api.export(["injectTapEventPlugin"]);
});