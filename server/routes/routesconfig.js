const { router } = require('./api');
const PromptController = require('./api');

exports.routesConfig = function (app) {

    app.post('/prompts', [PromptController.generateContent]);

}