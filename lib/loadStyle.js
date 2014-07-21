var getRequiredCSS = function() {
  var userAgent = navigator.userAgent;

  if (userAgent.match(/Trident/i)) {
    return '<link rel="stylesheet" href="/packages/chui-latest/lib/chui/chui-win.css">';
  } else if (userAgent.match(/Android/i)) {
    return '<link rel="stylesheet" href="/packages/chui-latest/lib/chui/chui-android.css">';
  } else {
    // ios is pretty why dont we use it as default
    return '<link rel="stylesheet" href="/packages/chui-latest/lib/chui/chui-ios.css">';
  }
}

var str = getRequiredCSS();

// we will prepend this to head so that we can override the rules with ease
// dont wait for dom ready because we dont want to show user ugly css
$(str).prependTo('head');