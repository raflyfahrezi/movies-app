import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {
    this.title = 'Movie App';
  }

  ngOnInit(): void {}
}
