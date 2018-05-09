import { Component, OnInit } from '@angular/core';

//콘솔에 jQuery 에러 나서 해결하려고 적어놓은건데, 아래 문법이 되는 것 같진 않음 
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appGitFlowStudy';

  constructor() {
    
  }

  ngOnInit() {
    
  }
}