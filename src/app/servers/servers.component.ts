import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus="no server was created";
  serverName="Production";


  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus="Server was created and server name is: "+this.serverName;
  }
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
