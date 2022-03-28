export interface MenuItem {
  name: string;
  iconDark: string;
  iconLight: string;
  url: string;
  counter?: number;
  routerLinkActiveOptions?: any;
  children?: { name: string; url: string }[];
}
