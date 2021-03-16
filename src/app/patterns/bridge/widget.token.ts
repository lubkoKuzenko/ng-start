import { InjectionToken } from "@angular/core";
import { iWidget } from "./interfaces/widget-interface";

export const WIDGET_TOKEN = new InjectionToken<iWidget>("Widget");
