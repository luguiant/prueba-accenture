import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgForm} from '@angular/forms';
import { Login } from '../../models/login';
import { Errors } from '../../models/errors';
import { Token } from '../../models/token';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public login: Login;
  public submitted = false;
  public save = false;
  public showErrors = {};
  public errors: Errors;
  public identity;
  public token: Token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
  ) { 
    this.login  = new Login( '', '');
    this.errors =  new Errors([],null,'','',false,200,'','');
  }

  ngOnInit() {
    this.submitted = false;
    if (localStorage.getItem('token')) {
      this.token = new Token(localStorage.getItem('token'));
      this._router.navigate(['/user-dashboard']);
    }
    this.logout();
  }

  fnLogin(f: NgForm) {
    this.save = false;
      this._userService.signup(this.login).subscribe(
          response => {
           // this.register  = new Register( null, null, null, null, null, null, null, null, null, null, null,null,null);
            this.showErrors = {};
            f.reset();
            localStorage.setItem('token',response.data.token);
            this.save = true;
            this._router.navigate(['/user-dashboard']);
          },
          error => {
              this.errors = <any>error;
              if(this.errors.error.error){
                  
                this.showErrors = Object.entries(this.errors.error.error).map(([type, value]) => ({type, value}));
                
              }
              
          }
      );
  }

  logout() {
    this._route.params.subscribe(params => {
        let logout = +params['sure'];
        if (logout === 1) {
            localStorage.removeItem('token');
            this.identity = null;
            this.token = null;
            this._router.navigate(['']);
        }
    });
}


}
