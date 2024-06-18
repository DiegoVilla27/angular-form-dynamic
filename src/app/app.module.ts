import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorMsgModule } from "./components/error-msg/error-msg.module";
import { CleanAttrDirective } from "./directives/clean-attr.directive";
import { FormComponent } from "./form/form.component";
import { ValidateInputPipe } from "./pipes/validate-input.pipe";
import { ClassByStateInputDirective } from "./directives/class-by-state-input.directive";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CleanAttrDirective,
    ValidateInputPipe,
    ClassByStateInputDirective
  ],
  imports: [
    BrowserModule,
    ErrorMsgModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
