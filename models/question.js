var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({   
    apiQuestionId: Number,
    isPublic: Boolean,
    level: { type: String, enum: ['First', 'Second','Third']},
    category: { type: String, enum: ['Puzzle','Arithmetic'] },
    language: { type: String, enum: ['PHP', 'JAVA','PYTHON'] },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
    },
    created: { type: Date },
    modified: { type: Date, default: Date.now }
});

var question = mongoose.model('question', QuestionSchema);

module.exports = { 
   question: question
}
