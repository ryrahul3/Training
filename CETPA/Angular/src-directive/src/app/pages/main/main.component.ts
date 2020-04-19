import { Component, OnInit ,OnDestroy} from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy {
  resData;
  newsData;
  subData;
  constructor(private nser:NewsService) { }
  ngOnInit() 
  {
     this.subData=this.nser.getNews()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.status=="ok")
        {
          this.newsData=this.resData.articles;
          console.log(this.newsData)
        }
        
      },err=>
      {
        console.log(err);
      })
  }
   ngOnDestroy()
   {
     if(this.subData)
     {
       this.subData.unsubscribe();
     }
   }
}
