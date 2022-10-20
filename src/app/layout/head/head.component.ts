import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  @Input() title?: string;

  constructor() {
    this.title = 'Oops!';
  }

  ngOnInit(): void {}
}
