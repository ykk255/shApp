import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tables-main',
  templateUrl: './tables-main.component.html',
  styleUrls: ['./tables-main.component.css']
})
export class TablesMainComponent implements OnInit {
  tableList = [{"nm" : "kim", "age": 27, "city" : "seoul"},
  {"nm" : "lee", "age": 24, "city" : "busan"},
  {"nm" : "park", "age": 24, "city" : "newyork"}];

  arr = new Array<any>();
  map = new Map<string, string>();

  constructor() { }

  ngOnInit() {
    this.map;
  }

  filterTest (arr: any): Array<any> {
    return arr.filter(ar => ar.age == 24);
  }
}
