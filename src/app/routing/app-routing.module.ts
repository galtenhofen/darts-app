import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '@core/components/home/home.component';
import { NgModule } from '@angular/core';
import {BonanzaStartComponent} from "@core/components/bonanza/bonanza-start/bonanza-start.component";
import {BonanzaGameComponent} from "@core/components/bonanza/bonanza-game/bonanza-game.component";

export const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'bonanza-game',
        component: BonanzaGameComponent
    }
   /* {
        path: 'bonanza-start',
        loadChildren: 'src/app/sample-feature/sample-feature.module#SampleFeatureModule'
    },
    {
        path: 'bonanza-game',
        loadChildren: 'src/app/sample-feature/sample-feature.module#SampleFeatureModule'
    }*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
