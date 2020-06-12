import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public login(): void{
    if (this.form.valid) {
      this.auth.login();
    }
  }

  public exit(): void{
    this.auth.exit();
  }
}
