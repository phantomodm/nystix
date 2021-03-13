import { Component, OnInit } from '@angular/core';
import { Router } from '../../common';
import { AppState } from '../../reducers';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
  }

  login(){

  }

  

}
