
import express from 'express';
import { ActionOnNext, QuestionInterface } from "./models/models";
import { ResponseTypes, ActionTypes, AnswerTypes } from "./enums/enums";
import * as admin from 'firebase-admin';


var router = express.Router()

const docRef = admin.firestore().collection("questions")

router.get('/', async (req, res) => {

    // let ff: Map<string, ActionOnNext> = new Map();
    //   ff.set("default", { actionData: "f", actionType: ActionTypes.NewQuestion })
    let q1: QuestionInterface = {
        qID: "firstQuestion",
        question: "What's your name?",
        answer: {
            answerType: AnswerTypes.Text,
            data: {
                "default": {
                    actionData: "qid_2",
                    actionType: ActionTypes.NewQuestion
                },
            }
        }
    }
    /*
    
    SVGs
    
        let maleOption: BoxWithIcon = {
            option: "Male",
            icon_svg: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z" />
    </svg>`
        }
        let femaleOption: BoxWithIcon = {
            option: "Female",
            icon_svg: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z" />
    </svg>`
        }
        let otherGenderOption: BoxWithIcon = {
            option: "Other",
            icon_svg: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17.58,4H14V2H21V9H19V5.41L15.17,9.24C15.69,10.03 16,11 16,12C16,14.42 14.28,16.44 12,16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72,16.44 6,14.42 6,12A5,5 0 0,1 11,7C12,7 12.96,7.3 13.75,7.83L17.58,4M11,9A3,3 0 0,0 8,12A3,3 0 0,0 11,15A3,3 0 0,0 14,12A3,3 0 0,0 11,9Z" />
    </svg>`
        }
    
    */


    let q2 = {
        qID: "qid_2",
        question: "Please select your gender- ",
        answer: {
            answerType: AnswerTypes.GenderSelection,
            data: {

                "Male": {
                    actionData: "qid_4",
                    actionType: ActionTypes.NewQuestion
                }, "Female": {
                    actionData: "qid_4",
                    actionType: ActionTypes.NewQuestion
                }, "Other": {
                    actionData: "qid_4",
                    actionType: ActionTypes.NewQuestion
                },

            }
        }
    }



    let q3: QuestionInterface = {
        qID: "qid_3",
        question: "What's your date of birth?",
        answer: {
            answerType: AnswerTypes.Date,
            data: {
                "default": {
                    actionData: "qid_4",
                    actionType: ActionTypes.NewQuestion
                },
            }
        }
    }


    let q4: QuestionInterface = {
        qID: "qid_4",
        question: "Choose one of the following, and we'll ask a few related question to that option",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Hollywood": {
                    actionData: "qid_5_0",
                    actionType: ActionTypes.NewQuestion
                },
                "TV series": {
                    actionData: "qid_5_1",
                    actionType: ActionTypes.NewQuestion
                },
                "Anime": {
                    actionData: "qid_5_2",
                    actionType: ActionTypes.NewQuestion
                },
                "End this quiz": {
                    actionData: "You didn't take whole quiz :)",
                    actionType: ActionTypes.EndQuiz
                }
            }
        }
    }

    let q_5_0: QuestionInterface = {
        qID: "qid_5_0",
        question: "We too love hollywood movies :) , Select a movie, and We'll ask a tough question about that movie",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Iron man": {
                    actionData: "qid_6_0_0",
                    actionType: ActionTypes.NewQuestion
                },
                "Deadpool": {
                    actionData: "qid_6_0_1",
                    actionType: ActionTypes.NewQuestion
                },
                "Avengers : Age of ultron": {
                    actionData: "qid_6_0_2",
                    actionType: ActionTypes.NewQuestion
                },
            }
        }
    }
    let q_5_1: QuestionInterface = {
        qID: "qid_5_1",
        question: "TV series are great to watch, we learn a lot from them. Choose your favourite TV series, and we'll ask a question about it",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Suits": {
                    actionData: "qid_6_1_0",
                    actionType: ActionTypes.NewQuestion
                },
                "Mr. Robot": {
                    actionData: "qid_6_1_1",
                    actionType: ActionTypes.NewQuestion
                },
                "Game of thrones": {
                    actionData: "qid_6_1_2",
                    actionType: ActionTypes.NewQuestion
                },
            }
        }
    }

    let q_5_2: QuestionInterface = {
        qID: "qid_5_2",
        question: "Animes are love :) , Which one is your favourite",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Naruto": {
                    actionData: "qid_6_2_0",
                    actionType: ActionTypes.NewQuestion
                },
                "My hero academia": {
                    actionData: "qid_6_2_1",
                    actionType: ActionTypes.NewQuestion
                },
                "Death Note": {
                    actionData: "qid_6_2_2",
                    actionType: ActionTypes.NewQuestion
                },

            }
        }
    }

    let q_6_0_0: QuestionInterface = {
        qID: "qid_6_0_0",
        question: "How much power did Mr. Stark calculated of the mini arc reactor in the cave?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "2.4 GW": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "3 GW": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "3.6 GW": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }
    let q_6_0_1: QuestionInterface = {
        qID: "qid_6_0_1",
        question: "What was the real name of Deadpool in movie?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Wade Wilson": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Ryan Reynolds": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Hugh Jackman": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }
    let q_6_0_2: QuestionInterface = {
        qID: "qid_6_0_2",
        question: "Which one of these is a quote by Ultron?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "\"I can fly without wings\"": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "\"Clearly, you never made an omelette\"": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "\"I want my free pizza\"": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }

    let q_6_1_0: QuestionInterface = {
        qID: "qid_6_1_0",
        question: "Who is favourite Suits character?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Donna Paulsen": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Harvey Specter": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Mike Ross": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }
    let q_6_1_1: QuestionInterface = {
        qID: "qid_6_1_1",
        question: "Which desktop environment did Elliot use primarily?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "GNOME": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "XFCE": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "KDE Plasma": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }
    let q_6_1_2: QuestionInterface = {
        qID: "qid_6_1_2",
        question: "Who was the first husband of Daenerys Targaryen?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Khal Drogo": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Jon Snow": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Mance Raydar": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }

    let q_6_2_0: QuestionInterface = {
        qID: "qid_6_2_0",
        question: "What was the name of Naruto's father?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Minato": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Obito Uchiha": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Kakashi Hatake": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }
    let q_6_2_1: QuestionInterface = {
        qID: "qid_6_2_1",
        question: "What type of power did All-Might had?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "All for one": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "One for all": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "None for none": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }
    let q_6_2_2: QuestionInterface = {
        qID: "qid_6_2_2",
        question: "What was the name of Amane's shinigami?",
        answer: {
            answerType: AnswerTypes.MCQ,
            data: {
                "Ryuk": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Rem": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
                "Rosse": {
                    actionData: " ",
                    actionType: ActionTypes.EndQuiz
                },
            }
        }
    }

    console.log('ggg');

    docRef.doc(q1.qID).set({
        question: q1.question,
        answer: {
            answerType: q1.answer.answerType,
            data: q1.answer.data
        }
    }).then((t) => {
        console.log(t.writeTime);

    })
    docRef.doc(q2.qID).set({
        question: q2.question,
        answer: {
            answerType: q2.answer.answerType,
            data: q2.answer.data
        }
    })



    docRef.doc(q3.qID).set({
        question: q3.question,
        answer: q3.answer
    })
    docRef.doc(q4.qID).set({
        question: q4.question,
        answer: q4.answer
    })

    docRef.doc(q_5_0.qID).set({
        question: q_5_0.question,
        answer: q_5_0.answer
    })
    docRef.doc(q_5_1.qID).set({
        question: q_5_1.question,
        answer: q_5_1.answer
    })
    docRef.doc(q_5_2.qID).set({
        question: q_5_2.question,
        answer: q_5_2.answer
    })
    docRef.doc(q_6_0_0.qID).set({
        question: q_6_0_0.question,
        answer: q_6_0_0.answer
    })
    docRef.doc(q_6_0_1.qID).set({
        question: q_6_0_1.question,
        answer: q_6_0_1.answer
    })
    docRef.doc(q_6_0_2.qID).set({
        question: q_6_0_2.question,
        answer: q_6_0_2.answer
    })
    docRef.doc(q_6_1_0.qID).set({
        question: q_6_1_0.question,
        answer: q_6_1_0.answer
    })
    docRef.doc(q_6_1_1.qID).set({
        question: q_6_1_1.question,
        answer: q_6_1_1.answer
    })
    docRef.doc(q_6_1_2.qID).set({
        question: q_6_1_2.question,
        answer: q_6_1_2.answer
    })
    docRef.doc(q_6_2_0.qID).set({
        question: q_6_2_0.question,
        answer: q_6_2_0.answer
    })

    docRef.doc(q_6_2_1.qID).set({
        question: q_6_2_1.question,
        answer: q_6_2_1.answer
    })
    docRef.doc(q_6_2_2.qID).set({
        question: q_6_2_2.question,
        answer: q_6_2_2.answer
    })
    res.send('ok')
})

module.exports = router;
