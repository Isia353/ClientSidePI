import { Component } from '@angular/core';
import { apiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  constructor(private apiService: apiService) {}
  data: any;

  ngOnInit(): void {
    this.apiService.fetchData().subscribe(
      (data) => {
        console.log('Data:', data);
        // Assign data to your component property if needed
        // this.data = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

 new: any[] =[ {name: "isai",  price: 14 },{name: "gil",price: 23},{name:"mike",price: 54},{name: "gil",price: 23},{name: "gil",price: 23},];

responsiveOptions: any[] = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
];

}
