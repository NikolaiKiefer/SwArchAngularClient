import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: any;
  uId: number;
  constructor(private userService: UserServiceService,
              private route: ActivatedRoute) {
    this.uId = this.route.snapshot.params['uid'];
  }


  ngOnInit() {
    // this.userService.getUser().subscribe(value => this.user = value);
    // console.log(this.user);
    this.userService.getUser(this.uId).subscribe(value => {this.user = value} );
    console.log(this.user);
  }

}
