import { registerTool } from "../src/registry.js";
import { invoke } from "../src/bridge.js";

registerTool("ping", () => "pong");
if (invoke({ toolName: "ping", args: {} }) !== "pong") {
  throw new Error("bridge test failed");
}
