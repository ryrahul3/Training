import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getNews()
  {
    let url="https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-28&sortBy=publishedAt&apiKey=32578531dba04580b24d506734b339ee";
    return this.http.get(url)
  }
}
