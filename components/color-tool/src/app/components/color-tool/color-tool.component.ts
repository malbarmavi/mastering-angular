import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-tool',
  templateUrl: './color-tool.component.html',
  styleUrls: ['./color-tool.component.css']
})
export class ColorToolComponent implements OnInit {

  public colors: string[];
  public newColor: string;

  constructor() {

  }

  public addNewColor() {
    this.colors.push(this.newColor);
    this.newColor = "";
  }

  ngOnInit() {
    this.colors = ['red', 'green', 'blue']
  }

}
