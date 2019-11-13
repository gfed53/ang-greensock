import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ang-greensock';
  timeline = gsap.timeline({ paused: true });
  shouldReverse;

  @ViewChild('divWrapper') divWrapper;
  @ViewChild('divBox') divBox;



  ngOnInit() {


    console.log('ngOnInit');
    


  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    this.createTimeline();

  }

  createTimeline() {
    let wrapperEl = this.divWrapper.nativeElement,
        boxEl = this.divBox.nativeElement;
    // console.log('wrapperEl', wrapperEl);

    this.timeline
      .add('start')
      .from(wrapperEl, 0.5, { duration: 1, opacity: 0 }, 'start')
      .from(boxEl, 0.25, { duration: 1, scale: 0 }, 'start')
      .to(boxEl, { duration: 0.5, x: 800 })
      .to(boxEl, { duration: 0.75, x: 300 })
      .add('1')
      .to(boxEl, { duration: 1.5, rotate: 360 }, '1')
      .to(boxEl, { duration: 0.5, scale: 0.5 }, '1')
      .to(boxEl, { duration: 0.5, scale: 1 })
      .to(boxEl, { duration: 0.5, x: 800 })
  }

  trigger() {
    if (this.shouldReverse) {
      this.timeline.reverse();
      this.shouldReverse = false;
    } else {
      this.timeline.play();
      this.shouldReverse = true;
    }
  }
}
