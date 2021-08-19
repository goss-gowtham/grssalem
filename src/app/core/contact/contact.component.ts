import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactContent = [{
    title: "Apply for Testing",
    content: "Fill the form now and you are one tap away from applying for testing with GRS.",
    buttonName: "Test Form",
    icon: "invert_colors",
  }, {
    title: "Career Opportunities",
    content: "Join the enthusiastic team and make environment greener with your part in it.",
    buttonName: "Apply for career",
    icon: "work",
  }, {
    title: "Queries / feedback",
    content: "Any support or query or drop an appreciation here. We'll get back to you asap.",
    buttonName: "Drop a note",
    icon: "rate_review"
  }]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(title) {
    if (title == "Career Opportunities") {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSedoJpjl53bsy1ZMBmXuRvE3xiKbLJvzY2ePgRXwoSITJph_g/viewform?usp=sf_link", "_blank");
    } else {
      this.dialog.open(ContactForm, {
        width: 'auto',
        height: '100vh',
        minWidth: '50vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
        data: {
          title
        }
      });
    }
  }

}

@Component({
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactForm {
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data);
  }
}
