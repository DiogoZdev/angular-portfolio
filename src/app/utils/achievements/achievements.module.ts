import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsService } from './achievements.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AchievementsService,
  ]

})
export class AchievementsModule { }
