import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NasaImageComponentComponent } from './components/nasa-image-component/nasa-image-component.component';
import { NasaExplanationComponentComponent } from './components/nasa-explanation-component/nasa-explanation-component.component';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppState } from "./redux/state/AppState";

@NgModule({
  declarations: [
    AppComponent,
    NasaImageComponentComponent,
    NasaExplanationComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue : '/' }],
  entryComponents: [AppComponent]
})
export class AppModule {
  
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('nasa-picture-of-the-day-component', el);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
