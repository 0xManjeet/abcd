import * as admin from "firebase-admin";
import express from "express";
import compression from "compression";

import { ActionOnNext, QuestionInterface } from "./models/models";
import { ResponseTypes, ActionTypes, AnswerTypes } from "./enums/enums";



let serviceAccount = require("./sac.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
//
import { getSingleQuestionData, sendResponse } from "./helpers/helpers"

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable("x-powered-by")
app.use(compression())


app.get("/questions/:qID", async (req, res) => {

    let qID = req.params.qID;
    try {
        let qData = await getSingleQuestionData(qID);
        //  let slaveData: Array<SlaveData> = await getSlaveData(Array.from(qData.answer.data.values()))
        sendResponse(res, ResponseTypes.Success, { mainData: qData, slaveData: 'slaveData' });
    } catch (error) {
        console.log(error, qID);
        sendResponse(res, ResponseTypes.UnexpectedError)
    }
});


const initData = require('./initData')
app.use('/init', initData);






const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


module.exports = app;