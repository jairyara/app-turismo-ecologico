import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../api/service.service';
import {User} from '../objects/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userObj: User;
  pswOk = true;
  credentials: FormGroup;

  constructor(private fb: FormBuilder, private api: ServiceService, private router: Router) {
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    this.api.login(this.credentials.value.email).subscribe(r => {
      this.userObj = r.user;
      if (this.userObj.password === this.credentials.value.password) {
        localStorage.id = this.userObj.id;
        localStorage.name = this.userObj.name;
        localStorage.email = this.userObj.email;
        this.router.navigateByUrl('/app/tab1');
      } else {
        this.pswOk = false;
      }
    });
  }
}
