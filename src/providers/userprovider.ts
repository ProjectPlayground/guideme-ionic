import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';

/*
  Generated class for the Userprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Userprovider {

  constructor(public http: Http) {
    console.log('Hello Userprovider Provider');
  }
}
