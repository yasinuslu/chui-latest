Package.describe({
  summary: "Latest Chocolate Chip UI with conditional platform css"
});

Package.on_use(function(api, where) {
  api.use('jquery', 'client');

  api.add_files('lib/chui/chui.js', 'client');


  api.add_files('lib/loadStyle.js', 'client');

  api.add_files([
    'lib/chui/chui-ios.css',
    'lib/chui/chui-android.css',
    'lib/chui/chui-win.css'
  ], 'client', {
    isAsset: true
  });

});