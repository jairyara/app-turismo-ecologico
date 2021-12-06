import {Component} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // data: FormGroup;
  id: string;
  name: string;
  email: string;

  constructor() {
    this.id = localStorage.id;
    this.name = localStorage.name;
    this.email = localStorage.email;
  }

  // ngOnInit() {
  //   this.data = this.fb.group({
  //     id: ['', [Validators.required]],
  //     name: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]],
  //   });
  // }

  // async update() {
  //   this.api.updateUser(this.data.value.id, this.data.value.name, this.data.value.email).subscribe(r => {
  //     console.log(r);
  //   });
  // }
}
