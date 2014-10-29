Package.describe({
  name: 'dandv:caret-position',
  summary: '(x, y) coordinates of the caret in a textarea or input type="text"',
  version: '2.1.1',
  git: 'https://github.com/dandv/meteor-caret-position.git'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.export('getCaretCoordinates', 'client');
  api.addFiles('component/index.js', 'client');
});
