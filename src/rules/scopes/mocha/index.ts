import { MochaDisable } from "./disable";
import { MochaEnable } from "./enable";
import { MochaEnablePluginChai } from "./chai";
import { MochaEnablePluginChaiExpect } from "./chai/expect";

export default [
  MochaDisable,
  MochaEnable,
  MochaEnablePluginChai,
  MochaEnablePluginChaiExpect,
];
