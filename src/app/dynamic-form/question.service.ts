import { Injectable }       from '@angular/core';

import { QuestionBase }     from './question-base';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [
      {
        questionId: 18,
        question: "Student ID",
        possibleOptions: {"minLength":"1","maxLength":"256"},
        description: "Student ID",
        required: true,
        questionTypeName:"Text Entry - Text",
        questionCode: "TE-TEXT",
        questionOrder: 0
      },
      {
        questionId: 17,
        question: "Student ID 22",
        possibleOptions: {"minLength":"1","maxLength":"256"},
        description: "Student ID dd",
        required: true,
        questionTypeName:"Text Entry - Text",
        questionCode: "TE-TEXT",
        questionOrder: 2
      },
      {
        questionId: 16,
        question: "Student ID 223",
        possibleOptions: {"minLength":"1","maxLength":"256"},
        description: "Student ID dd3",
        required: true,
        questionTypeName:"Text Entry - Text",
        questionCode: "TE-TEXT",
        questionOrder: 1
      }
    
    
    ];

    return questions.sort((a, b) => a.questionOrder - b.questionOrder);
  }
}