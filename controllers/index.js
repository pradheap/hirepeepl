var questionModel = require("../models/question").question;

module.exports = function(app) {
    app.get('/api/questions', function (req, res){
        return questionModel.find(function (err, questions) {
            if (!err) {
                return res.send(questions);
            } else {
                return console.log(err);
            }
        });
    }); 
    app.post('/api/questions', function (req, res){
        var product;
        console.log("POST: ");
        console.log(req.body);
        question = new questionModel({
            level: req.body.level,
            category: req.body.category,
            language: req.body.language,
        });
        question.save(function (err) {
            if (!err) {
                return console.log("created");
            } else {
                return console.log(err);
            }
        });
        return res.send(question);
    }); 
};
