const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js").version()
    .js("resources/js/checkout.js", "public/js").version()
    .sass(
    "resources/sass/app.scss",
    "public/css"
).version();

mix.browserSync({
    proxy:'nginx',
    open:false,
    files: [
        './resources/views/**/*.blade.php',
        './resources/js/*.js',
        './resources/sass/*.scss',
    ],
    reload: true
});
mix.options({
    hmrOptions: {
        host: 'localhost',
        port: '3000'
    },
});
//
// mix.webpackConfig({
//     mode: "development",
//     devtool: "inline-source-map",
//     devServer: {
//         disableHostCheck: true,
//         headers: {
//             'Access-Control-Allow-Origin': '*'
//         },
//         host: "localhost",
//         port: 3000
//     },
// });
