import { ActionTypes, AnswerTypes } from '../enums/enums';

type ActionOnNextParams = `actionType` | `actionData`;

export interface ActionOnNext extends Partial<Record<ActionOnNextParams, any>> { }

export interface QuestionInterface {
    qID: string
    question: string,
    answer: {
        answerType: AnswerTypes,
        data: {
            [key: string]: ActionOnNext
        }
    },
}
