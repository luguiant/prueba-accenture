import { MENU_CLIENT } from '../../menu/client-menu';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params  } from '@angular/router';


@Component({
  selector: 'ngx-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
    
  public menu = {}
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.menu = MENU_CLIENT;
  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this._router.navigate(['']);
    }
  }
}
