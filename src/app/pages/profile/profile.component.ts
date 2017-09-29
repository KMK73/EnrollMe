import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  marked: false;
  theCheckbox: false;
  selected = 0;
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

}
