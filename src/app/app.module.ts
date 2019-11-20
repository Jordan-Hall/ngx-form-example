import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGenModule } from '@libertyware/ngx-form-gen';
import { NgxMaterialFormModule } from '@libertyware/ngx-form-material-design-widget';

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormGenModule,
    NgxMaterialFormModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
