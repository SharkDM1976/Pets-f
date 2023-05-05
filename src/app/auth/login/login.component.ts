import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../utils/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../shared/interfaces";
import {HeaderComponent} from "../../base/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  message: string = ''

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Пожалуйста, авторизуйтесь...'
      } else if (params['authFailed']) {
        this.message = 'Сессия истекла. Авторизуйтесь заново.'
      }
    })
    this.form = new FormGroup({
      id: new FormControl('1'),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  submit() {
    if (this.form.invalid) {
      return
    }

    const user: User = {
      username: this.form.value.username,
      password: this.form.value.password,
      returnSecureToken: true
    }

    console.log(user)

    this.auth.login(user)
      .subscribe( () => {
          this.form.reset();
          this.router.navigate(['/pets'])
        }
      );

  }
}
