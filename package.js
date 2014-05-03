'use strict';

Package.describe({
  summary: '(x, y) coordinates of the caret in a textarea or input type="text"'
});

Package.on_use(function (api) {
  api.export('getCaretCoordinates', 'client');
  api.add_files('component/index.js', 'client');
});
