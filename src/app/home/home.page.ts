import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})

export class HomePage {
  constructor(public http: HttpClient, public platform: Platform) {
    this.platform.ready().then(() => {
      this.SaveUserData();
    });
  }

  SaveUserData() {
    const dataToSend = { name: "Bee ", surname: "CK" };
    const url = "http://localhost:5000/api/profile/";
    this.http
      .post(
        url,
        { data: JSON.stringify(dataToSend) },
        { headers: new HttpHeaders({ "content-Type": "application/json" }) }
      )
      .subscribe(data => {
        alert(data);
      });
  }
}
