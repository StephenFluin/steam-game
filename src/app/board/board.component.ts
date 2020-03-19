import { Component, OnInit } from "@angular/core";

export class Coord {
  constructor(public y: number, public x: number) {}
}
export class renderLink {
  style;
}

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  nodes = [new Coord(10, 10), new Coord(300, 35), new Coord(100, 300)];
  renderLinks = [{ style: { "width.px": 300, "left.px": 100, "top.px": 100 } }];
  constructor() {}

  ngOnInit() {}
}
