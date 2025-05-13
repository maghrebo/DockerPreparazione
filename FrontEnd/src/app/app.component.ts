import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.get<any>('https://5000-maghrebo-dockerpreparaz-ggr28qpgkxq.ws-eu118.gitpod.io/api/data').subscribe(data => {
      this.message = data.message;
    });
  }
}
