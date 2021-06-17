import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getCovidDataList() {
    return this.httpClient.get(environment.API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
