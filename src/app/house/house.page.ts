import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {
  map,
  filter,
  scan,
  reduce,
  catchError,
  concat,
  merge
} from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { pipe } from '@angular/core/src/render3';

@Component({
  selector: 'house-list',
  templateUrl: 'house.page.html',
  styleUrls: ['house.page.scss']
})
export class HousePage implements OnInit {
  legislators: any;
  legislatorsToAdd: any;
  private start: number = 0;
  private end: number = 30;

  constructor(public http: Http) {
    //Load the first ten
    this.getJson(this.start, this.end).subscribe(
      jsonStr => (this.legislators = jsonStr)
    );
  }

  private getJson(start: number, end: number): Observable<any> {
    return this.http.get('./assets/legislators.json').pipe(
      map((res: any) =>
        res.json().filter(items => items && items.AssemblyId == 1)
      ),
      map(data => {
        console.log(this.legislators);
        return data.slice(this.start, this.end + this.start);
      }),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }

  loadData(event) {
    console.log(this.start);
    if (this.start === 124) {
      event.target.complete();
      // console.log('here');
      // this.start = 0;
      // setTimeout(() => {
      //   console.log(this.start);
      //   this.getJson(this.start, this.end).subscribe(
      //     jsonStr => (this.legislators = jsonStr)
      //   );
      //   event.target.complete();
      // }, 500);
    } else {
      setTimeout(() => {
        this.start++;
        this.start += this.end;
        this.getJson(this.start, this.end).subscribe(
          jsonStr => (this.legislators = jsonStr)
        );
        event.target.complete();
      }, 500);
    }
  }

  mailto(email) {
    let Link = 'mailto:' + email;
    window.open(Link, '_system');
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
