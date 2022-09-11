import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicationComponent } from './components/publication/publication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { InfoComponent } from './components/info/info.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutComponent } from './views/about/about.component';
import { BlogComponent } from './views/blog/blog.component';
import { AchievementsComponent } from './components/achievements/achievements.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    PublicationComponent,
    InfoComponent,
    ProjectsComponent,
    AboutComponent,
    BlogComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
