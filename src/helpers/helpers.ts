import { QuestionInterface, ActionOnNext } from '../models/models';
import { ResponseTypes, ActionTypes } from '../enums/enums';
import * as admin from 'firebase-admin';


const fs = admin.firestore()

export function sendResponse(res: any, ResponseType: ResponseTypes, data?: any) {
    return res.send({
        'responseType': ResponseType,
        'data': data
    })
}

async function getDoc(qID: string) {
    return await fs.doc(`questions/${qID}`).get()
}

export async function getSingleQuestionData(qID: string): Promise<QuestionInterface> {

    let dummy: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>;
    let data: FirebaseFirestore.DocumentData | undefined
    dummy = await getDoc(qID)
    data = dummy.data();

    if (data == undefined) throw `${qID} does not exist`
    else return {
        qID: dummy.id,
        question: data.question,
        answer: data.answer
    }
}

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

