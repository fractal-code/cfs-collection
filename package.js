Package.describe({
  name: 'gliese: cfs-collection',
  version: '0.5.4',
  summary: 'Gliese flavour of CollectionFS, FS.Collection object (INTERNAL USE ONLY)',
  git: 'https://github.com/gliesesoftware/cfs-collection.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    // CFS
    'gliese:cfs-base@0.0.28',
    'gliese:tempstore@0.1.4',
    // Core
    'deps',
    'check',
    'livedata',
    'mongo-livedata',
    // Other
    'raix:eventemitter@0.1.1'
  ]);

  // Weak dependencies for uploaders
  api.use(['cfs:upload-http@0.0.19', 'cfs:upload-ddp@0.0.17'], { weak: true });

  api.addFiles([
    'common.js',
    'api.common.js'
  ], 'client');

  api.addFiles([
    'common.js',
    'api.common.js'
  ], 'server');
});

Package.onTest(function (api) {
  api.use(['gliese:cfs-core', 'gliese:cfs-gridfs', 'tinytest', 'underscore', 'test-helpers']);

  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
