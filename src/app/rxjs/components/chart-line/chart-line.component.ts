import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { normalizeCommonJSImport } from "../../../../utils/normalizeCommonJSImport";

const importChart = normalizeCommonJSImport(import(/* webpackChunkName: "chart" */ "chart.js"));

@Component({
  selector: "l9-chart-line",
  templateUrl: "./chart-line.component.html",
  styleUrls: ["./chart-line.component.scss"],
})
export class ChartLineComponent implements OnInit {
  @ViewChild("chart", { static: false }) chartElement: ElementRef<HTMLCanvasElement>;

  constructor() {}

  public async ngOnInit() {
    const Chart = await importChart;

    new Chart(this.chartElement.nativeElement, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  }
}
