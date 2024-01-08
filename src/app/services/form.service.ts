import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pluck } from "rxjs";
import { IForm, IInput } from "../interfaces/form.interface";

@Injectable({
  providedIn: "root"
})
export class FormService {
  constructor(private _http: HttpClient) {}

  getForm(): Observable<IInput[]> {
    return this._http.get<IForm>("assets/data.json").pipe(pluck("data"));
  }
}
