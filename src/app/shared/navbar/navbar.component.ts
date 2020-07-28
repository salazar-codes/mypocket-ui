import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public _userService: UsuarioService ) { }

  ngOnInit(): void {
  }

  logout(){
    this._userService.logout();
  }

}
