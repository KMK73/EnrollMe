import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  marked: false;
  theCheckbox: false;
  selected = 0;

  @ViewChild('myModal') myModal: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
    if (this.marked) {
      this.selected++;
    }else {
      this.selected--;
    }
    console.log(this.selected);
  }

  showStudentModal() {
    console.log('modal click');
     // open modal using jQuery
     jQuery(this.myModal.nativeElement).modal('show');
  }

}
