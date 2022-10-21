import { Input, OnInit, Component } from '@angular/core';

import { Movie } from '@/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie?: Movie;

  constructor() {}

  ngOnInit(): void {}
}
