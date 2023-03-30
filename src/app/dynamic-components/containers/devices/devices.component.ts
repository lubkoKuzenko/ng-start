import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
} from "@angular/core";

import { BlueDeviceComponent } from "../../components/blue-device/blue-device.component";
import { RedDeviceComponent } from "../../components/red-device/red-device.component";
import { GreenDeviceComponent } from "../../components/green-device/green-device.component";
import { Type } from "@angular/core";

export enum ItemEnum {
  Red,
  Green,
  Blue,
}

export const COMPONENT_MAP = new Map<ItemEnum, Type<unknown>>([
  [ItemEnum.Red, RedDeviceComponent],
  [ItemEnum.Green, GreenDeviceComponent],
  [ItemEnum.Blue, BlueDeviceComponent],
]);

@Component({
  selector: "bb-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
})
export class DevicesComponent implements OnInit, OnDestroy {
  @ViewChild("dynamicLoadDevicesComponent", { read: ViewContainerRef, static: true }) public entry: ViewContainerRef;
  componentRef: ComponentRef<any>;

  public itemEnum = ItemEnum;
  constructor(private resolver: ComponentFactoryResolver) {}

  public ngOnInit() {
    this.createComponent(ItemEnum.Green);
  }

  public createComponent(type: ItemEnum) {
    this.entry.clear();
    const component = COMPONENT_MAP.get(type) as Type<unknown>;
    const factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.entry.createComponent(factory);

    // if (type === "virtual") {
    //   this.componentRef.instance.data = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    // }
  }

  public defineComponent(type: string) {
    return {
      red: RedDeviceComponent,
      green: GreenDeviceComponent,
      blue: BlueDeviceComponent,
    }[type];
  }

  public ngOnDestroy() {
    this.componentRef.destroy();
  }
}
