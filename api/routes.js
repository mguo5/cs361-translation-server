'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/translate/:fromLang/:targetLang/:text')
       .get(controller.getTranslate);
    app.route('/translate')
       .post(controller.getPost);
    app.route('/languages')
        .get(controller.getLanguages);
};