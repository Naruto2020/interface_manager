import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './widgets/card/card.component';
import { AreaComponent } from './widgets/area/area.component';
import { Card1Component } from './widgets/card1/card1.component';
import { Card2Component } from './widgets/card2/card2.component';
import { Card3Component } from './widgets/card3/card3.component';
import { StarterComponent } from './widgets/starter/starter.component';
import { StatsComponent } from './widgets/stats/stats.component';
import { Stats1Component } from './widgets/stats1/stats1.component';
import { Stats2Component } from './widgets/stats2/stats2.component';
import { Stats3Component } from './widgets/stats3/stats3.component';
import { Stats4Component } from './widgets/stats4/stats4.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    AreaComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    StarterComponent,
    StatsComponent,
    Stats1Component,
    Stats2Component,
    Stats3Component,
    Stats4Component,


  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    AreaComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    StarterComponent,
    StatsComponent,
    Stats1Component,
    Stats2Component,
    Stats3Component,
    Stats4Component,
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
