import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  //mensajes: any[] = [];
  mensajes: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.mensajes = this.dataService.getPosts();
    // this.dataService.getPosts()
    //   .subscribe((post: any[]) => {
    //     this.mensajes = post;
    //   });
  }
  escuchaClick(id){
    console.log("click en : "+ id);
  }
}