import global from "./global";

export default {
  "*": global,
  json: [
    "**/.clasprc.json",
    "**/package-lock.json",
  ],
  jsoncc: ["**/.vscode/c_cpp_properties.json"],
};
