import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage  {

  db: SQLiteObject = null;

  public database: SQLiteObject;

Usuario:string;

  constructor(private activeroute: ActivatedRoute, private router: Router, private sqlite: SQLite,) {
  }

  forgot(){
    console.log('forgot password:' + this.Usuario)
  }

}

