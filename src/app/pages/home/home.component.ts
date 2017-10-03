import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// import { BsModalService } from 'ngx-bootstrap';
// import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MdSelect } from '@angular/material';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  marked: false;
  theCheckbox: false;
  selected = 0;
  
  selectedValue: string;

  grades = [
    { value: '0', viewValue: 'Grade 1' },
    { value: '1', viewValue: 'Grade 2' },
    { value: '2', viewValue: 'Grade 3' },
    { value: '3', viewValue: 'Grade 4' }
  ];

  @ViewChild('myModal') myModal: ElementRef;
  closeResult: string;

  constructor(private router: Router, private modalService: NgbModal) {

  }

  ngOnInit() {
  }

  viewProfile() {
    const link = ['/user'];
    this.router.navigate(link);
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

  // showStudentModal() {
  //   console.log('modal click');
  //    // open modal using jQuery
  //    jQuery(this.myModal.nativeElement).modal('show');
  // }

  toggleVisibility(e) {
    this.marked = e.target.checked;
    if (this.marked) {
      this.selected++;
    }else {
      this.selected--;
    }
    console.log(this.selected);
  }

  // toggleVisibility(event) {
  //   console.log(event);

  //   let totalRowCount = 0;
  //   const checkCount = 0;
  //   const table = document.getElementById("studentTable");
  //   const rows = table.getElementsByTagName('tr');
  //   // for each table row
  //   for (let i = 0; i < rows.length; i++) {
  //     totalRowCount++;
  //     // get all checkbox inside row
  //     // if (rows[i].getElementsByTagName("input").length > 0) {
  //     //   if (rows[i].getElementsByTagName("input").checked === true) {
  //     //     checkCount++;
  //     //   }
  //     // }
  //   }
  //   let message = 'Total Row Count: ' + totalRowCount;
  //   message += '\ncheckCount Count: ' + checkCount;
  //   // alert(message);
  // }
}
