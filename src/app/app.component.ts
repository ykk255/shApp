import { Component, OnInit } from '@angular/core';

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