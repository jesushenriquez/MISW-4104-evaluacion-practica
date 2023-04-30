import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantasModule } from './plantas/plantas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlantasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
