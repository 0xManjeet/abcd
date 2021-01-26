"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerTypes = exports.ActionTypes = exports.ResponseTypes = void 0;
var ResponseTypes;
(function (ResponseTypes) {
    ResponseTypes[ResponseTypes["QuestionDoesNotExists"] = 0] = "QuestionDoesNotExists";
    ResponseTypes[ResponseTypes["Success"] = 1] = "Success";
    ResponseTypes[ResponseTypes["UnexpectedError"] = 2] = "UnexpectedError";
})(ResponseTypes = exports.ResponseTypes || (exports.ResponseTypes = {}));
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["NewQuestion"] = 0] = "NewQuestion";
    ActionTypes[ActionTypes["ShowDialog"] = 1] = "ShowDialog";
    ActionTypes[ActionTypes["EndQuiz"] = 2] = "EndQuiz";
    ActionTypes[ActionTypes["SubmitAnswers"] = 3] = "SubmitAnswers";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
var AnswerTypes;
(function (AnswerTypes) {
    AnswerTypes[AnswerTypes["MCQ"] = 0] = "MCQ";
    AnswerTypes[AnswerTypes["Phone"] = 1] = "Phone";
    AnswerTypes[AnswerTypes["Date"] = 2] = "Date";
    AnswerTypes[AnswerTypes["Text"] = 3] = "Text";
    AnswerTypes[AnswerTypes["BoxedOptions"] = 4] = "BoxedOptions";
})(AnswerTypes = exports.AnswerTypes || (exports.AnswerTypes = {}));
