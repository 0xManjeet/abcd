"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleQuestionData = exports.sendResponse = void 0;
const admin = __importStar(require("firebase-admin"));
const fs = admin.firestore();
function sendResponse(res, ResponseType, data) {
    return res.send({
        'responseType': ResponseType,
        'data': data
    });
}
exports.sendResponse = sendResponse;
async function getDoc(qID) {
    return await fs.doc(`questions/${qID}`).get();
}
async function getSingleQuestionData(qID) {
    let dummy;
    let data;
    dummy = await getDoc(qID);
    data = dummy.data();
    if (data == undefined)
        throw `${qID} does not exist`;
    else
        return {
            qID: dummy.id,
            question: data.question,
            answer: data.answer
        };
}
exports.getSingleQuestionData = getSingleQuestionData;
// async function getMultipleQuestionData(qIDs: Array<string>): Promise<Array<QuestionInterface>> {
//     let questionsData: Array<QuestionInterface> = new Array();
//     try {
//         for (let qID of qIDs) {
//             let dummy = await getSingleQuestionData(qID);
//             questionsData.push(dummy)
//         }
//         return questionsData;
//     } catch (error) {
//         throw error
//     }
// }
