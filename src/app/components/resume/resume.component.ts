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
                      "Interact with Client to understand product requirements",
                      "Report to PM"
                    ],
    projects: [{name: "Gofix FM", link:"https://apps.apple.com/sg/app/gofix-fm/id1568980348"},
              ]
  }

  aes: AES={
    responsibilities:["Testing main flow and UX/UI",
                      "Manage bugs and features on Excel",
                      "Reporting to the leader"],
    projects: [{name: "Savills", link:"https://www.savills.com.vn/"}]
  }

  thaison: ThaiSon={
    responsibilities:["Support customers use custom software via Team viewer",
                      "Solve E-Cuss problems over the phone",
                      "Attend professional training sessions",
                      "Instructions and support required by customers",
                      "Monthly report to GM"
                    ],
    projects: [{name:"EBH", link:"https://ebh.vn/"}]
  }

  information: information = {
    name: "Tran Thi Truc Anh",
    address: "114/15 Bui Quang La streeet, ward 12, Go Vap district, HCMC",
    phone: "+84 366 113 219",
    email: "trucanh.imex@gmail.com",
    coverInfo: `I have 3 years of experience in a Software Testing job. 
                I worked as a tester, a test lead. 
                I used to work in a company specializing in testing and got training about Software testing methodically.
                I can directly work with customers.
                I am always ready to learn new things and love learning. I am responsible, patient, innovative, and have the ability to work under pressure.`
  }

  social: Social={
    linkedin: "https://www.linkedin.com/in/truanhtester/",
    gitHub:"",
    twitter:"",
    resume:"https://drive.google.com/file/d/18ilyQoRzetn2ovcmbgI29d1r6zHa-QFp/view?usp=sharing"
  }

  constructor() { }

  ngOnInit(): void {}

}
