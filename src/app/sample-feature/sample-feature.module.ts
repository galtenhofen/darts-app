import { NgModule } from '@angular/core';
import { BonanzaLeaderboardComponent } from "@core/components/bonanza/bonanza-leaderboard/bonanza-leaderboard.component";
import { BonanzaCurrentComponent } from "@core/components/bonanza/bonanza-current/bonanza-current.component";
import { BonanzaHistoryComponent } from "@core/components/bonanza/bonanza-history/bonanza-history.component";
import { BonanzaStartComponent } from '../core/components/bonanza/bonanza-start/bonanza-start.component';
import { BonanzaGameComponent } from '../core/components/bonanza/bonanza-game/bonanza-game.component';
import { SharedModule } from '@shared/shared.module';
import { SampleFeatureRoutingModule } from './routing/routing.module';
import {MatCardModule} from "@angular/material/card";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSelectModule,
  MatInputModule,
  MatOptionModule,
  MatGridListModule,
  MatDialogModule,
  MatRadioModule,
  MatListModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatIconModule,
  MatTabsModule,
  MatMenuModule, MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [
    BonanzaStartComponent,
    BonanzaLeaderboardComponent,
    BonanzaCurrentComponent,
    BonanzaHistoryComponent,
    BonanzaGameComponent
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    SharedModule,
    SampleFeatureRoutingModule
  ]
})
export class SampleFeatureModule { }
