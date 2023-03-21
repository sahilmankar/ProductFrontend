import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { User } from './User';

@Component({
  selector: 'git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent {
  
  userName:string="";
  user:User | undefined;

  constructor(private svc :GithubService){}

  getData():void{
    this.svc.getuserDetails(this.userName).subscribe((user1)=>{
                                        this.user=user1; console.log(this.user);
    })
  }
}
