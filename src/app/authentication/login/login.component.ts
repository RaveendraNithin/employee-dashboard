import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  formError: boolean = false;

  constructor(
    private _formbuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService) {
    this.loginFormGroup = this._formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  submit(){
    if(this.loginFormGroup.controls.username.value == 'fingent' && this.loginFormGroup.controls.password.value == 'fingent') {
      console.log('sux')
      this.formError = false;
      this._authService.loginUser(true);
      this._router.navigate(['/dashboard']);
      console.log(localStorage);
    } else {
      this.formError = true;
    };
  }


}
