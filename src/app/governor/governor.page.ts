import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, reduce, catchError, mergeMap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { pipe } from '@angular/core/src/render3';

@Component({
  selector: 'governor-list',
  templateUrl: 'governor.page.html',
  styleUrls: ['governor.page.scss']
})
export class GovernorPage implements OnInit {
  private selectedItem: any;
  legislators: any;

  constructor(public http: Http) {
    this.getJson().subscribe(jsonStr => (this.legislators = jsonStr));
  }

  private getJson(): Observable<any> {
    return this.http.get('./assets/legislators.json').pipe(
      map((res: any) =>
        res.json().filter(items => items && items.AssemblyId == 3)
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
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
