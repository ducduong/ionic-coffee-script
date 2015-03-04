# ionic-coffee-script

About:

Base project for IonicFramework using sass and coffeescript.

scss goes to www/scss, will be compiled and concatenated to
www/css/application.css

coffeescript goes to www/coffee, will be complied and concatenated to
www/js/application.js

for production, uncomment minify and uglify pipe in gulpfile.js

Usage:

npm install
gulp watch
ionic serve (or ionic emulate iso -l)

