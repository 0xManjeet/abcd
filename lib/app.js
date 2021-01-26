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
serviceAccount = {
    "type": "service_account",
    "project_id": "bluecat-quiz",
    "private_key_id": "3d5f83895c1da4688c85687dd699468af4b46a04",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQClGGGLvtCVGSRc\novHVt8xYWf25M6NODa9SoOnn74s/TbPXE2qwDfMF8Tf5rd0GrVDqhfdKVmFfEb9U\nEhKnJFBOg9saWIGBHkg8jy9srMKs6paopdsmytNslfs11X3NssyxsGDIsjBCH/lp\nrxRxTSaCKHjhU+dbExXS7a/rm5ACV/NAKSe6PLzkQBBNhqWGWxXLlhKOpq0p1TTN\ncHiiZ7PA1vonRfR98r4E49NG0mzn+zKbbcQBkEQNYsj85oUD3zLEsKTHfTUqsACh\nx57pYEycuuGpQiB+54/G07tyhwTZGjb6H2/Y2Cbnmat+GK/IQPB/LW+D56DnKceu\nONxSfH0JAgMBAAECggEAHTz0pZGdEhK6UFehOabL30fMufxtqviceKc71ZIkWIkz\n1N7A8b3+sKo4LhU/BBw0rNwd4AHtS69ycXqj6Arz1/vdFUzgXpQU2fjHvtjXv1Tq\naqK47aVVDTGApFeTaJcGTl+8vD5mcoeEHdXeanRt4fY19j3sRsJaBpmGotTRi8Br\nm2DTAM+WGsfSArhty+1rWzCSCE87EGkkCV+1oWnvYKt+KCuobwStvYXoG+z2C06d\ncH8iksvp941iIOCNcUqDzNBWFDu4w/eYquEFezEBI5Wi84ORdpczzLzr5nF9dwY9\neSHF9/1AloemshAlHSS61FjhhMnuJy3ZlAqmeeUwWwKBgQDhG0vDUvIWWsZP+3Nk\nNL6hJDFPQ2s0heryuriS+20uMVWRgxFoTajWlNkc8x9ByjTKVT2LBm3bZcCFKAZk\n3QiLld1TCZ9rYbLijMBlpL4xu/Tjc6+qf2fqfYLhKYyFr5MqkDx8WDRSRJ2k8Cai\nWLaG7pYKCOiPc8iURCq+uqhqwwKBgQC7wLI9tpVH6seruthuB9wxaXMBrC/14rd8\nJdjWqX3Z8mNcRmy2Y9rEIbGLo9zxvbyvmk+E9NwNrt8oxfu47iSWi4PtzTje+jM4\nKiSsH4jJqeP3lsZwFVePaFVkrqaeEwDStJCUHOf5COzB6Nr3Yj52BmyWZfSahOGs\nxamGq3SEQwKBgC62m2JNNC+vZrfyVl/VEjoeaJ0qQHUF1VvJo8PcqSuM0VUA/fvH\nIeJlwShgy3u7mnjid4MCMon0856uT6VeuQc+ck9pD8wY2iZpTwPIzC9F8evBdhLL\nnaTrpt1S4fZcGQ4cIHEtXK41zwELVPkbr8UQfdJXRut9+4HJI5Ww5oJBAoGAc5xF\nZRDfvUgJqWpFSQOYB+kZwybm5W60c0LO0efOMf06R6Cp4ml8VRc2P3koXMbrv+my\nG3m3YsmSaoX26bniV70TAMREx7CjB2uT51UHor31PQjfqjbKEuk44+VTfbTP5e7/\ns+RUxxlCyGh9JKWfNofgJ4AibV9zozKXn/BFsAcCgYEAocIn56H85YZKaM5+Pf9I\nMMtTNj6v9ZSrPXvfaB7RI9vlhQQmYeQt1NxXqFhY3oMelq/siJasMImYpZBpnR8i\n6QzpdqPLRTAXni77b/zp47FiSk0uMqWBsK/Uk1vvG/hTEguTh1yAfVlQ0tYuePJS\nRUJqMQH542N6DFSpjCKbvj4=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-4pice@bluecat-quiz.iam.gserviceaccount.com",
    "client_id": "107257410379336494443",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4pice%40bluecat-quiz.iam.gserviceaccount.com"
};
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
