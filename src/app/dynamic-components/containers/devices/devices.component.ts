import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, OnDestroy } from "@angular/core";

import { BlueDeviceComponent } from "../../components/blue-device/blue-device.component";
import { RedDeviceComponent } from "../../components/red-device/red-device.component";
import { GreenDeviceComponent } from "../../components/green-device/green-device.component";
import { Type } from "@angular/core";
import { BaseItemComponent } from "../../components/base-item.component";

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

  public ngOnInit() {
    this.createComponent(ItemEnum.Green);
  }

  public createComponent(type: ItemEnum) {
    this.entry.clear();
    const component = COMPONENT_MAP.get(type) as Type<unknown>;
    this.componentRef = this.entry.createComponent(component);
    const createdComponentInstance = this.componentRef.instance as BaseItemComponent;
    createdComponentInstance.data = "test";
    // if (type === "virtual") {
    //   this.componentRef.instance.data = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    // }
  }

  public ngOnDestroy() {
    this.componentRef.destroy();
  }
}
