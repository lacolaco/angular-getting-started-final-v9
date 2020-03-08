import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  user = this.auth.user;

  ngOnInit(): void {
  }

  signIn() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
