import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  // Set a start and pause. Set start to false as we want the button enabled and pause to true as we want it to start disabled
  start = false;
  pause = true;

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    // When we click start game set start to true and pause to false to disable start and enable pause
    this.start = true;
    this.pause = false;
  }

  onPauseGame() {
    clearInterval(this.interval);
    // do the reverse as we did above
    this.start = false;
    this.pause = true;
  }
}
