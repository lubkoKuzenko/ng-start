import { Component, OnInit } from "@angular/core";
import { Builder } from "./builder";

@Component({
  template: `
    {{ url }}
    <hr />
    {{ url2 }}
    <hr />
    {{ url3 }}
    <hr />
    {{ url4 }}
    <hr />
    {{ url5 }}
    <hr />
    {{ url6 }}
  `,
})
export class BuilderComponent implements OnInit {
  public url: string;
  public url2: string;
  public url3: string;
  public url4: string;
  public url5: string;
  public url6: string;

  ngOnInit(): void {
    this.url = new Builder()
      .addRoot()
      .addFilter({})
      .addPagination(100, 0)
      .addSort(["clientName", "lastBackupTime"])
      .build();

    this.url2 = new Builder()
      //   .addRoot()
      .addFilter({})
      .addPagination(100, 0)
      .addSort(["clientName", "lastBackupTime"])
      .build();

    this.url3 = new Builder()
      .addRoot()
      .addFilter({})
      .addPagination(100, 0)
      //   .addSort(["clientName", "lastBackupTime"])
      .build();

    this.url4 = new Builder()
      .addRoot()
      //   .addFilter({})
      .addPagination(100, 0)
      .addSort(["clientName", "lastBackupTime"])
      .build();

    this.url4 = new Builder()
      .addRoot()
      .addFilter({
        backupTimeMin: new Date("2022-12-14T06:00:00.000Z"),
        backupTimeMax: new Date("2022-12-14T06:00:00.000Z"),
        // clientName: "324",
        // scheduleType: "ARCHIVE",
      })
      .addPagination(100, 0)
      .addSort(["clientName", "lastBackupTime"])
      .build();

    this.url5 = new Builder()
      .addRoot()
      .addFilter({
        backupTimeMin: new Date("2022-12-14T06:00:00.000Z"),
        backupTimeMax: new Date("2022-12-14T06:00:00.000Z"),
        clientName: "324",
        // scheduleType: "ARCHIVE",
      })
      .addPagination(100, 0)
      .addSort(["clientName", "lastBackupTime"])
      .build();

    this.url6 = new Builder()
      .addRoot()
      .addFilter({
        backupTimeMin: new Date("2022-12-14T06:00:00.000Z"),
        backupTimeMax: new Date("2022-12-14T06:00:00.000Z"),
        clientName: "324",
        scheduleType: "ARCHIVE",
      })
      .addPagination(100, 0)
      .addSort(["clientName", "lastBackupTime"])
      .build();
  }
}
