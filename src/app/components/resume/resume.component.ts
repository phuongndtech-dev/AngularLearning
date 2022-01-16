import { Component, OnInit } from '@angular/core';
import AES from './models/experience-companies/aes';
import ThaiSon from './models/experience-companies/thaison';
import Viniva from './models/experience-companies/vinova';
import information from './models/information';
import Social from './models/social';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  vinova: Viniva={
    responsibilities:["Test GUI and functions on the App",
                      "Test flows of all modules on CMS",
                      "Review and analyze the requirement",
                      "Write the checklist/ test case and run them",
                      "Execute test ( GUI test, Integration test, System test, Acceptance test on production enviroment)",
                      "Test API by Swagger, Postman",
                      "Test database by Posgresql",
                      "Interact with Client to understand product requirements.",
                      "Report file"
                    ],
    projects: [{name: "Gofix FM", link:"https://apps.apple.com/sg/app/gofix-fm/id1568980348"},
              ]
  }

  aes: AES={
    responsibilities:["Testing main flow and UX/UI.",
                      "Manage bugs and features on Excel.",
                      "Reporting to the leader."],
    projects: [{name: "Savills", link:"https://www.savills.com.vn/"}]
  }

  thaison: ThaiSon={
    responsibilities:["","",""],
    projects: [{name: "", link:""},
               {name:"", link:""}]
  }

  information: information = {
    name: "Tran Thi Truc Anh",
    address: "114/15 Bui Quang La streeet, ward 12, Tan Binh district, HCMC",
    phone: "+84 366 113 219",
    email: "trucanh.imex@gmail.com",
    coverInfo: "I have three years of working with manual testing. My projects are e-commerce, estate, and logictis domain." +
               "I've tested the Mobile App, Web, CMS, APIs, and virtual environments."
  }

  social: Social={
    linkedin: "https://www.linkedin.com/in/truanhtester/",
    gitHub:"",
    twitter:"",
    resume:""
  }

  constructor() { }

  ngOnInit(): void {}

}
