rake pipeline example
=====================

This is a simple demo for using rake-pipeline to manage static assets separately to any other development enviroment. This demo uses SASS and Handlebars, but you can customise your Assetfile to whatever workflow suits you.

* `bundle install` in the root directory to install all dependencies
* `bundle exec foreman start` in the root directory to run foreman (the ‘watcher’)
* Make changes and save your asset files as normal (within /assets/**/*) — the generated files will go into the relevant directory within /public.
* To generate the production (application.min.css and application.min.js) versions, from the root directory run: 
  `RAKEP_ENV=production bundle exec rakep build`

Gotchas
-------

* If you have invalid syntax in your SCSS files, then compilation will fail and Foreman will report the error at the command line. Check this first if you ever find your CSS changes aren't being reflected in the browser.
* The default behaviour of SASS for the non-production environment includes comments for selector source line numbers; you might find this causes conflicts if you have lots of people generating this then committing the output — you can disable these comments with an option passed to SASS (see the Assetfile for details).
* Foreman only generates the non-production file automatically, so if you don't also have a deploy step to generate this you'll need to generate it manually before committing.
* JavaScript files are automatically appended alphabetically *after* any files whose order is specifically stated within Assetfile. If you have a JS file with a load order dependency you can add it to the list specified there to ensure it will load before all other non-specified files.