import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:`    
    <amexio-row>
      <amexio-column [size]="'3'">
        
      </amexio-column>
      <amexio-column [size]="'6'">
        <amexio-image [path]="'assets/image/page-not-found.jpg'" [width]="'400px'" [height]="'400px'"
                      [tooltip]="'Image'">
        </amexio-image>
      </amexio-column>
      <amexio-column [size]="'3'">

      </amexio-column>
    </amexio-row>



  `
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
