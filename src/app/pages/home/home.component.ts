import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Covid } from './models/covid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covidData: Array<Covid> = [];
  realData!: any;


  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getCovidDataList();
   }

   getCovidDataList() {
     this.homeService.getCovidDataList().subscribe((data) => {
       let obj: any = data;
       this.covidData = obj.data;
       this.realData = this.covidData.find(x => x.state == this.covidData[0].state);
     })
   }

   provideCovidDataValues(deviceValue: any) {
     this.realData = this.covidData.find(x => x.state == deviceValue.target.value);
   }


}
