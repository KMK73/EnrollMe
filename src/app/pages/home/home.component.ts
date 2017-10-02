import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
// import { BsModalService } from 'ngx-bootstrap';
// import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AddStudentComponent } from '../../components/add-student/add-student.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { MdSelect } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public modalRef: BsModalRef;
  selected = 0;
  selectedValue: string;

  grades = [
    { value: '0', viewValue: 'Grade 1' },
    { value: '1', viewValue: 'Grade 2' },
    { value: '2', viewValue: 'Grade 3' },
    { value: '3', viewValue: 'Grade 4' }
  ];

  constructor(private router: Router, private dialogService: DialogService) {

  }

  ngOnInit() {
  }

  viewProfile() {
    let link = ['/user'];
    this.router.navigate(link);
  }

  showConfirm() {
    this.dialogService.addDialog(AddStudentComponent, { title: 'Add a Student', message: 'Alert message!!!' });

    // let disposable = this.dialogService.addDialog(AddStudentComponent, {
    //     title:'Confirm title',
    //     message:'Confirm message'})
    //     .subscribe((isConfirmed) => {
    //         // We get dialog result
    //         if (isConfirmed) {
    //             alert('accepted');
    //         } else {
    //             alert('declined');
    //         }
    //     });
    // // We can close dialog calling disposable.unsubscribe();
    // // If dialog was not closed manually close it by timeout
    // setTimeout(() => {
    //     disposable.unsubscribe();
    // }, 10000);
  }

  toggleVisibility(event) {
    console.log(event);
    
    let totalRowCount = 0;
    let checkCount = 0;
    let table = document.getElementById("studentTable");
    let rows = table.getElementsByTagName("tr");
    // for each table row 
    for (let i = 0; i < rows.length; i++) {
      totalRowCount++;
      // get all checkbox inside row 
      // if (rows[i].getElementsByTagName("input").length > 0) {
      //   if (rows[i].getElementsByTagName("input").checked === true) {
      //     checkCount++;
      //   }
      // }
    }
    let message = "Total Row Count: " + totalRowCount;
    message += "\ncheckCount Count: " + checkCount;
    alert(message);
  }

  // var table = $('#example').DataTable();

  //    $('#example tbody').on( 'click', 'tr', function () {
  //        $(this).toggleClass('selected');
  //    } );

  //    $('#button').click( function () {
  //        alert( table.rows('.selected').data().length +' row(s) selected' );
  //    } );
}
