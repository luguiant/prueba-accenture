import { Register } from '../../models/register';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Errors } from '../../models/errors';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, DoCheck {

  public register: Register;
  public submitted = false;
  public save = false;
  public errors: Errors;
  public showErrors = {};
  public ageValid = false;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.register  = new Register( null, null, null, null, null, null, null, null, null, null, null,null,null);
    this.errors =  new Errors([],null,'','',false,200,'','');
    this.save = false;
  }

  ngDoCheck() {
    if(this.register.age !== null && (this.register.age < 18 || this.register.age >120 )){
      this.ageValid = true;
      this.submitted = false;
    }else{
      this.ageValid = false;
      this.submitted = true;
    }

    if(
      this.register.email !== null && 
      this.register.email_confirmation !== null &&
      this.register.email_confirmation !== this.register.email
    ){
      this.submitted = false;
    }else{
      this.submitted = true;
    }
    
    if(
      this.register.password !== null && 
      this.register.password_confirmation !== null &&
      this.register.password_confirmation !== this.register.password
    ){
      this.submitted = false;
    }else{
      this.submitted = true;
    }
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['']);
    }
  }

  fnReister(f: NgForm){
      this.save = false;
      this._userService.registrarUser(this.register).subscribe(
          response => {
           // this.register  = new Register( null, null, null, null, null, null, null, null, null, null, null,null,null);
            this.showErrors = {};
            f.reset();
            this.save = true;
          },
          error => {
              this.errors = <any>error;
              if(this.errors.error.error){
                  
                this.showErrors = Object.entries(this.errors.error.error).map(([type, value]) => ({type, value}));
                
              }
              
          }
      );
    }
}
