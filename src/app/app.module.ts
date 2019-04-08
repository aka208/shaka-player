import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TrailersComponent } from './components/trailers/trailers.component';
import { MusicComponent } from './components/music/music.component';
import { VideoComponent } from './components/video/video.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LaunchPageComponent,
    LoginPageComponent,
    TrailersComponent,
    MusicComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    OverlayModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ VideoComponent]
})
export class AppModule { }
