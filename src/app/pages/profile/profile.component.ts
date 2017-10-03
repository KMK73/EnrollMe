import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  
  grades = [
    { value: '0', viewValue: 'Grade 1' },
    { value: '1', viewValue: 'Grade 2' },
    { value: '2', viewValue: 'Grade 3' },
    { value: '3', viewValue: 'Grade 4' }
  ];
  @ViewChild('myModal') myModal: ElementRef;
  closeResult: string;
  
  constructor(private modalService: NgbModal) { }

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

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
