import { MenuItem } from "./menu.interface";

export const menuTop: MenuItem[] = [
  {
    name: "Dashboard",
    iconDark: "home",
    iconLight: "home",
    url: "/",
    routerLinkActiveOptions: { exact: true },
  },
  {
    name: "Forms",
    iconDark: "checklist",
    iconLight: "checklist",
    url: "/forms/basic",
  },
  {
    name: "Dynamic Components",
    iconDark: "source",
    iconLight: "source",
    url: "/dc",
  },
  {
    name: "Users",
    iconDark: "people_outline",
    iconLight: "people_outline",
    url: "/users",
  },
  {
    name: "Cards",
    iconDark: "sd_card",
    iconLight: "sd_card",
    url: "/cards",
  },
  {
    name: "RxJS",
    iconDark: "egg",
    iconLight: "egg",
    url: "/rx",
  },
  {
    name: "Angular Patterns",
    iconDark: "texture",
    iconLight: "texture",
    url: "/patterns/bridge",
    counter: 4,
    children: [
      { name: "Bridge", url: "/patterns/bridge" },
      { name: "Strategy", url: "/patterns/strategy" },
      { name: "Model-Adapter", url: "/patterns/adapter" },
      { name: "ngTemplateOutlet", url: "/patterns/ngtemplateoutlet" },
      { name: "Builder", url: "/patterns/builder" },
      { name: "Data Agnostic", url: "/patterns/data-agnostic" },
    ],
  },
  {
    name: "Angular Unit Tests",
    iconDark: "ac_unit",
    iconLight: "ac_unit",
    url: "/unit-tests",
  },
];

export const menuBottom = [
  {
    name: "Logout",
    iconDark: "ac_unit",
    iconLight: "ac_unit",
  },
  {
    name: "mode",
    iconDark: "dark_mode",
    iconLight: "light_mode",
  },
];
