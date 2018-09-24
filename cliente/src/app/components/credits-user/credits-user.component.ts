import { CreditService } from '../../services/credit.service';
import { Credit } from '../../models/credit';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Errors } from '../../models/errors';
import { NgForm} from '@angular/forms';
import { Token } from '../../models/token';

@Component({
  selector: 'ngx-credits-user',
  templateUrl: './credits-user.component.html',
  styleUrls: ['./credits-user.component.scss']
})
export class CreditsUserComponent implements OnInit, DoCheck{

  public credit: Credit;
  public submitted = false;
  public submitted2 = false;
  public submitted3 = false;
  public save = false;
  public errors: Errors;
  public showErrors = {};
  public token:Token;
  
  public min = null;
  public max = new Date();

  public showCalendar = true;
  public validationDate1 = false;
  public validationDate2 = false;
  public validationSalary = false;

  constructor(
    private _userCredit: CreditService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.credit  = new Credit( null, null, null, new Date(),null,null);
    this.errors =  new Errors([],null,'','',false,200,'','');
    this.save = false;
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.credit.token = localStorage.getItem('token');
    }else{
      this._router.navigate(['']);
    }
  }

  ngDoCheck(){
    let date = new Date();
    let datamodel = this.credit.date;
    if(
        datamodel.getDate()  >= date.getDate() && 
        datamodel.getMonth()  >= date.getMonth() &&
        datamodel.getFullYear()  >= date.getFullYear()
      ){
      this.validationDate1 = true;
      this.submitted = false;
    }else{
      this.validationDate1 = false;
      this.submitted = true;
    }

    let days = this.calculeTimeJob();

    if(days < 548){
      this.validationDate2 = true;
      this.submitted2 = false;
    }else{
      this.validationDate2 = false;
      this.submitted2 = true;
    }

    

    if(
       this.credit.value <= 10000000 && 
       this.credit.value >=800000 &&
       this.credit.value !== null
      ){

       this.submitted3 = true;
       this.validationSalary = false;
    
    }else if(
      
      (
        this.credit.value < 800000 || 
        this.credit.value > 10000000
      ) && 
      this.credit.value != null
    ){
      this.submitted3 = false;
      this.validationSalary = true;
    }

    console.log(days,this.submitted);
  }

  calculeTimeJob(){
    let msecPerMinute = 1000 * 60;
    let msecPerHour = msecPerMinute * 60;
    let msecPerDay = msecPerHour * 24;

    // asignar la fecha en milisegundos
    let date = new Date();
    let dateMsec = date.getTime();

    // asignar la fecha el 1 de enero del a la media noche
    let compare = this.credit.date.getTime();

    // Obtener la diferencia en milisegundos
    let interval = dateMsec - compare;

    // Calcular cuentos días contiene el intervalo. Substraer cuantos días
    //tiene el intervalo para determinar el sobrante
    let days = Math.floor(interval / msecPerDay );
    interval = interval - (days * msecPerDay );

    // Calcular las horas , minutos y segundos
    let hours = Math.floor(interval / msecPerHour );
    interval = interval - (hours * msecPerHour );

    let minutes = Math.floor(interval / msecPerMinute );
    interval = interval - (minutes * msecPerMinute );

    let seconds = Math.floor(interval / 1000 );

    return days;
  }

  openCalendar(){
     switch(this.showCalendar){
        case true: { 
            this.showCalendar = false;
            break; 
        } 
        case false: { 
            this.showCalendar = true;
            break; 
        } 
        default: { 
            this.showCalendar = true;
            break; 
        } 
     }
  }

  fnSubmit(f: NgForm){
    this.save = false;
    this.credit.dateString = this.credit.date.toLocaleDateString('en-GB');
  
    this._userCredit.saveCredit(this.credit).subscribe(
      response => {
        this.credit = new Credit( null, null, null, new Date(),null,null);
        this.showErrors = {};
        this.save = true;
        f.reset();
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
