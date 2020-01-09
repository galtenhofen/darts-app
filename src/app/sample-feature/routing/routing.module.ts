import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BonanzaGameComponent } from '../../core/components/bonanza/bonanza-game/bonanza-game.component';
import { BonanzaStartComponent } from '../../core/components/bonanza/bonanza-start/bonanza-start.component';
import { BonanzaLeaderboardComponent} from "@core/components/bonanza/bonanza-leaderboard/bonanza-leaderboard.component";

export const routes: Route[] = [
  {
    path: '',
    component: BonanzaStartComponent
  },
  {
    path: 'bonanza-game',
    component: BonanzaGameComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SampleFeatureRoutingModule { }
