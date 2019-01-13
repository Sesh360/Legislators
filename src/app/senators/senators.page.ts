import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, reduce, catchError, mergeMap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { pipe } from '@angular/core/src/render3';

@Component({
  selector: 'senator-list',
  templateUrl: 'senators.page.html',
  styleUrls: ['senators.page.scss']
})
export class SenatorsPage implements OnInit {
  selectedLegislator: any;
  legislators: any;

  constructor(public http: Http) {
    this.getJson().subscribe(jsonStr => (this.legislators = jsonStr));
  }

  private getJson(): Observable<any> {
    return this.http.get('./assets/legislators.json').pipe(
      map((res: any) =>
        res.json().filter(items => items && items.AssemblyId == 2)
      ),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
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
