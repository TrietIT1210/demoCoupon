import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ApiResponse } from '../responses/api.response';
import { ValidationException } from '../exceptions/ValidationException';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  calculateCouponValue(couponCode: string, totalAmount: number): Observable<number> {
    const url = `${this.apiBaseUrl}/coupons/calculate`;
    const params = new HttpParams()
      .set('couponCode', couponCode)
      .set('totalAmount', totalAmount.toString());
      debugger
      var res = new Observable<number>;
      try {
        res = this.http.get<number>(url, { params });
        console.log(url);
      } catch (error) { 
        console.log(error); 
      }
      return res;
    }
}
  