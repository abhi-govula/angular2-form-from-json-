import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionService } from "../../app/dynamic-form/question.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  questions = undefined;
  text: string = "";
  dis: boolean = true;
  constructor(public navCtrl: NavController, public service: QuestionService) {}
  ionViewDidLoad() {
    this.text = "kool";
    this.dis = true;
    this.questions = this.service.getQuestions();
    console.log(this.questions);
    setTimeout(() => this.dis = false, 2000);
  }

}
