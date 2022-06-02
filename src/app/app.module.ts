import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NasaImageComponentComponent } from './components/nasa-image-component/nasa-image-component.component';
import { NasaExplanationComponentComponent } from './components/nasa-explanation-component/nasa-explanation-component.component';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NasaImageComponentComponent,
    NasaExplanationComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
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
