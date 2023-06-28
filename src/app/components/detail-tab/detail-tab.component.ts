import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/models';

@Component({
  selector: 'app-detail-tab',
  templateUrl: './detail-tab.component.html',
  styleUrls: ['./detail-tab.component.scss']
})
export class DetailTabComponent {
  @Input() game: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
