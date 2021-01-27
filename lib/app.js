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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const enums_1 = require("./enums/enums");
let serviceAccount = require("./sac.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
// 
const helpers_1 = require("./helpers/helpers");
const fs = admin.firestore();
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(compression_1.default());
app.get("/questions/:qID", async (req, res) => {
    let qID = req.params.qID;
    try {
        let qData = await helpers_1.getSingleQuestionData(qID);
        //  let slaveData: Array<SlaveData> = await getSlaveData(Array.from(qData.answer.data.values()))
        helpers_1.sendResponse(res, enums_1.ResponseTypes.Success, { mainData: qData, slaveData: 'slaveData' });
    }
    catch (error) {
        console.log(error, qID);
        helpers_1.sendResponse(res, enums_1.ResponseTypes.UnexpectedError);
    }
});
const initData = require('./initData');
app.use('/init', initData);
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
module.exports = app;
