import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactForm } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ContactForm, {
      width: 'auto',
      height: '90vh',
      minWidth: '50vw',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        title: 'JSW'
      }
    });
  }

}
