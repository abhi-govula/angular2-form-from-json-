import { Component, Input,OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { QuestionControlService } from "../../app/dynamic-form/question-control.service";


@Component({
  selector: 'newcom',
  templateUrl: 'newcom.html',
  providers: [ QuestionControlService ]  
})
export class NewcomComponent  implements OnInit {
  
  @Input() questions = [];
  @Input() disableForm; 
  @Input() dis;
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {
    console.log('Hello NewcomComponent Component');
    // console.log(this.questions);
  }

  ngOnInit() {
    console.log("got here");
    console.log(this.questions);
    console.log(this.dis);
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.form);       
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.form.value);
  }
}
