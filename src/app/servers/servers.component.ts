import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus="no server was created";
  serverName="";


  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus="Server was created";
  }
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
