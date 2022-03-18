import { StrategyGreen } from "./strategy-green";
import { StrategyRed } from "./strategy-red";

export const StrategyMap = new Map<boolean, any>([
  [true, StrategyGreen],
  [false, StrategyRed],
]);

export * from "./abstract-strategy";
