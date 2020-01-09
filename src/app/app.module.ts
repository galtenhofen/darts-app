import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { BonanzaStartComponent } from './core/components/bonanza/bonanza-start/bonanza-start.component';
import { BonanzaGameComponent } from './core/components/bonanza/bonanza-game/bonanza-game.component';
import { BonanzaLeaderboardComponent } from './core/components/bonanza/bonanza-leaderboard/bonanza-leaderboard.component';
import { BonanzaCurrentComponent } from './core/components/bonanza/bonanza-current/bonanza-current.component';
import { BonanzaHistoryComponent } from "@core/components/bonanza/bonanza-history/bonanza-history.component";
import {BonanzaService} from "@core/services/bonanza.service";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatDialogModule,
  MatRadioModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatIconModule,
  MatTabsModule,
  MatMenuModule, MatNativeDateModule
} from '@angular/material';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    BonanzaStartComponent,
    BonanzaGameComponent,
    BonanzaLeaderboardComponent,
    BonanzaCurrentComponent,
    BonanzaHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [BonanzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
