import { ExtendableComponentComponent } from "./../../components/extendable-component/extendable-component.component";
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
import { TreeViewComponent } from "../../components/tree-view/tree-view.component";

@Component({
  selector: "bb-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
})
export class DevicesComponent implements OnInit, OnDestroy {
  @ViewChild("dynamicLoadDevicesComponent", { read: ViewContainerRef, static: true }) public entry: ViewContainerRef;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngOnInit() {
    this.createComponent("green");
  }

  public createComponent(type: string) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(this.defineComponent(type));
    this.componentRef = this.entry.createComponent(factory);

    if (type === "extComponents") {
      this.componentRef.instance.data = ["1", "2", "3", "4", "5"];
    }
  }

  public defineComponent(type: string) {
    return {
      red: RedDeviceComponent,
      green: GreenDeviceComponent,
      blue: BlueDeviceComponent,
      tree: TreeViewComponent,
      extComponents: ExtendableComponentComponent,
    }[type];
  }

  public ngOnDestroy() {
    this.componentRef.destroy();
  }
}
