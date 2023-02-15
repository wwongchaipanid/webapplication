import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-whatis7tt',
  templateUrl: './whatis7tt.component.html',
  styleUrls: ['./whatis7tt.component.scss']
})
export class Whatis7ttComponent {
  public getScreenWidth: any;
  
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
