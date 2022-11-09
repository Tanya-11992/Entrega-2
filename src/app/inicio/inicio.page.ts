import { Component, OnInit } from '@angular/core';
import { AutenthicationService } from '../services/autenthication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public authenticationSerive:AutenthicationService) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationSerive.logout();
  }

}
