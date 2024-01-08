import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MessageAlertModule } from "./components/message-alert/message-alert.module";
import { CleanAttrDirective } from "./directives/clean-attr.directive";
import { ValidateInputPipe } from "./pipes/validate-input.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CleanAttrDirective,
    ValidateInputPipe
  ],
  imports: [
    BrowserModule,
    MessageAlertModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
