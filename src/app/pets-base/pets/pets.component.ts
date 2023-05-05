import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']

})
export class PetsComponent implements OnInit {


  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  constructor() { }

  ngOnInit(): void {

  }

}
