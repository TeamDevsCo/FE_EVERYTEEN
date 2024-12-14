import run from "@everyteen/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
