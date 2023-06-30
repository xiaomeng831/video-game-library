import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Game } from 'src/app/models/models';
import { RawgApiService } from 'src/app/services/rawg-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  isLoading: boolean = false;
  gameId: string;
  game: Game;

  constructor(private activatedRoute: ActivatedRoute, private apiService: RawgApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string) {
    this.isLoading = true;
    this.apiService.getGameDetails(id).subscribe((gameResp: Game) => {
      this.game = gameResp;
      this.isLoading = false;
    });

  }

}
