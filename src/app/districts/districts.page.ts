import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, reduce, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: 'districts.page.html',
  styleUrls: ['districts.page.scss']
})
export class DistrictsPage implements OnInit {
  selectedDistrict: any;
  districts: any;
  legislators: any;

  constructor(public http: Http) {
    this.getDistrictJson().subscribe(jsonStr => {
      this.districts = jsonStr;
    });
  }

  private getDistrictJson(): Observable<any> {
    return this.http.get('./assets/Districts.json').pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }

  onDistrictSelected() {
    return this.getLegislatorsJson().subscribe(jsonStr => {
      this.legislators = jsonStr;
    });
  }

  private getLegislatorsJson(): Observable<any> {
    return this.http.get('./assets/legislators.json').pipe(
      map((res: any) =>
        res
          .json()
          .filter(items => items && items.DistrictId == this.selectedDistrict)
      ),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }

  private handleError<T>(error: any, result?: T) {
    console.log('This is getting error:');
    console.log(error);
    return of(result as T);
  }

  ngOnInit() {}
}
