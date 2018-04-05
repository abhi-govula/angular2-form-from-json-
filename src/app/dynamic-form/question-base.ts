export class QuestionBase<T>{
  questionId: number;
  question: string;
  possibleOptions: object;
  description: string;
  required: boolean;
  questionTypeName: string;
  questionCode: string;
  questionOrder: number;

  constructor(options: {
      questionId?: number,
      question?: string,
      possibleOptions?: object,
      description?: string,
      required?: boolean,
      questionTypeName?: string,
      questionCode?: string,
      questionOrder?: number
    } = {}) {
    this.questionId = options.questionId;
    this.question = options.question;
    this.possibleOptions = options.possibleOptions || {};
    this.description = options.description || '';
    this.required = options.required || false;
    this.questionTypeName = options.questionTypeName || '';
    this.questionCode = options.questionCode || '';
    this.questionOrder = options.questionOrder == undefined ? 0 : options.questionOrder;
    
    
  }
}