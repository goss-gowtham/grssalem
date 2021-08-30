import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { ContactForm } from '../contact/contact.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  mechanicalServices = [{
    title: 'Vacuum Products',
    list: ['Ejectors', 'Steam Jet Refrigeration System', 'Thermo Compressors', 'Process Condensers']
  }, {
    title: 'Zero Discharge Systems',
    list: ['Multiple Effect Evaporators', 'Crystallizers', 'ATFD', 'Stripper Column']
  }, {
    title: 'Air Pollution Control Systems',
    list: ['High Energy Venturi Scrubbers', 'Jet Venturi Scrubbers', 'Packed Towers']
  }]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ContactForm, {
      width: 'auto',
      height: '100vh',
      minWidth: '50vw',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        title: 'Apply for Testing'
      }
    });
  }

}
