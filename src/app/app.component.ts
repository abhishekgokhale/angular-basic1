import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  title: string = "Welcome to Angular";
  arr = ["Apple", "Mango", "Banana", "Chickoo", "Pear"];
  loginFlag = false;
}
