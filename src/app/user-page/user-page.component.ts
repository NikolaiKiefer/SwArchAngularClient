import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    // this.userService.getUser(1).subscribe(value => this.user = value);
  }

}
