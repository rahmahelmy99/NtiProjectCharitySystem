import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'src/app/models/case';
import { DataService } from 'src/app/providers/service/data.service';

@Component({
  selector: 'app-singlecase',
  templateUrl: './single-case.component.html',
  styleUrls: ['./single-case.component.css']
})
export class SinglecaseComponent implements OnInit {
  id:any
  case :Case={
      "id": 0,
      "title":"",
      "content":"",
      "cat_id": "",
      "image": "",
      "created_at": "",
      "reactions_count": "",
      "department_data": {
        "id": 0,
        "dep_name": ""
      },
      
  }
  isLoaded = false
  constructor(private _route:ActivatedRoute, public _data:DataService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params?.['artId']
    this.getCase(this.id)
  }

  getCase(id:number){
    this._data.getSinglecase(id).subscribe(
      (res)=>{
        console.log(res.data)
      this.case=res.data[0]
    },
    (e)=>{},
    ()=>{
      this.isLoaded=true
    }
    )
  }
}
