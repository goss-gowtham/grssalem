import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isReadMore:boolean = true;
  team = [{
    name: 'Dhanam Palanimuthu',
    desg: 'PROPRIETRIX',
    imgSrc: '../../../assets/Dhanam.jpg',
    desc: `A homemaker turned to social entrepreneur thought of finding solutions
    for most of the environment challenges. She started "Green Resource
    Solutions" to build a strong technical team for providing solutions to
    analytical testing, Operation & Maintenance and technology providing
    services.`,
  }, {
    name: 'Vijayakumar Palanimuthu',
    desg: 'CEO',
    imgSrc: '../../../assets/Vijayakumar.JPG',
    desc: `Passionate about waste to energy technology and environmental solutions.
    Having 14years of technical experience in various plant operation &
    maintenance activities and optimization of various waste to energy
    plants. Scientific and technical knowledge in the waste to energy and
    environmental business and held the position of C.O.O. at Mahavir Eco
    Projects, Surat in 2017-2021. <br/>Has considerable experience in formulating
    O&M procedures, risk assessment, ISO standards, external contractors,
    cost control, budget proposal and safe work practices. Involved in
    southeast Asia largest waste to energy plant at Recycle Energy Sdn Bhd,
    Malaysia in 2012-2014 handled O&M activities and optimization of
    hazardous waste projects. Completed Executive Development Program in
    Operations Management at IIM, Kashipur.`,
  }, ];

  constructor() { }

  ngOnInit(): void {
  }

}
