import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent {

  constructor() { }

  //data

  pressureList = [
    { level: 1, high: 120, low: 80 },
    { level: 2, high: 138, low: 88 },
    { level: 3, high: 139, low: 89 },
    { level: 4, high: 159, low: 99 },
    { level: 5, high: 179, low: 109 },
    { level: 6, high: 180, low: 110 },
    { level: 7, high: 500, low: 500 },
  ]

  sugarList = [
    {level: 1, start: 0,   end: 100},
    {level: 2, start: 101, end: 124},
    {level: 3, start: 125, end: 125},
    {level: 4, start: 126, end: 154},
    {level: 5, start: 155, end: 182},
    {level: 6, start: 183, end: 183},
    {level: 7, start: 184, end: 500},
  ]

  //ScreenWidth
  public getScreenWidth: any;
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  } 

  //Input value
  pressureHigh = null
  pressureLow = null
  sugar = null

  //Result
  resultPressure = 0
  resultSugar = 0

  
  fnCalculate() {
    //Clear result
    this.resultPressure = 0
    this.resultSugar = 0

    //Validate input
    if (this.pressureHigh == null  && this.pressureLow == null && this.sugar == null) {
      return 
    }

    //Press only
    if (this.pressureHigh != null  && this.pressureLow != null) {
      let tmpH = this.pressureHigh == null ? 0 : this.pressureHigh
      let tmpL = this.pressureLow == null ? 0 : this.pressureLow
      let pressureItem = this.pressureList.find(item => {
        return tmpH <= item.high && tmpL <= item.low
      })
      if (pressureItem) {
        this.resultPressure = pressureItem.level
      }
    }

    //Sugar only
    if (this.sugar != null) {
      let tmp = this.sugar == null ? 0 : this.sugar
      let sugarItem = this.sugarList.find(item => {
        return tmp >= item.start && tmp <= item.end;
      });
      if (sugarItem) {
        this.resultSugar = sugarItem.level
      }
    }

    //Compare value
    if (this.resultPressure > this.resultSugar) {
      this.resultSugar = 0
    }
    if (this.resultSugar > this.resultPressure) {
      this.resultPressure = 0
    }
  }
}
