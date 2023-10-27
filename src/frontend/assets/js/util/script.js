function loadScript(src, callback) {
  var plugin_path = '/template/js/';
  var script = document.createElement('script');
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}

export function loadAllScripts() {
  loadScript(
    'https://favspot.site/template/js/jquery-3.6.0.min.js',
    function () {
      loadScript(
        'https://favspot.site/template/js/plugins-jquery.js',
        function () {
          loadScript(
            'https://favspot.site/template/js/slick/slick.min.js',
            function () {
              loadScript(
                'https://favspot.site/template/js/custom.js',
                function () {
                  loadScript(
                    'https://unpkg.com/swiper/swiper-bundle.min.js',
                    function () {
                      // All scripts have been loaded
                      // console.log('All scripts loaded.');
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
}
