import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-skpf-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  siteKey:string;
 
  constructor(private recaptchaV3Service: ReCaptchaV3Service) {
    
     this.siteKey = 'YOUR_SITE_KEY';

    this.recaptchaV3Service.siteKey.next(this.siteKey);
   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.recaptchaV3Service
              .execute('salvar')
              .subscribe(token=>{
                console.log("Token: ",token)
              });
  }
}
