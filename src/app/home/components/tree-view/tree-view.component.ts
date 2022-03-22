import { Component } from "@angular/core";

@Component({
  selector: "l9-tree-view",
  templateUrl: "./tree-view.component.html",
  styleUrls: ["./tree-view.component.scss"],
})
export class TreeViewComponent {
  public list = [
    {
      title: "childless",
      children: [],
    },
    {
      title: "great grandparent",
      children: [
        {
          title: "childless grandsibiling",
          children: [],
        },
        {
          title: "grandparent",
          children: [
            {
              title: "childless sibiling",
              children: [],
            },
            {
              title: "another childless sibiling",
              children: [],
            },
            {
              title: "parent",
              children: [
                {
                  title: "child",
                  children: [],
                },
                {
                  title: "another child",
                  children: [],
                },
              ],
            },
            {
              title: "another parent",
              children: [
                {
                  title: "child",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          title: "another grandparent",
          children: [
            {
              title: "parent",
              children: [
                {
                  title: "child",
                  children: [],
                },
                {
                  title: "another child",
                  children: [],
                },
                {
                  title: "a third child",
                  children: [],
                },
                {
                  title: "teen mother",
                  children: [
                    {
                      title: "accident",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
