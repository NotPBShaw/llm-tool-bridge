import { ToolCall } from "./types.js";
import { getHandler } from "./registry.js";

export function invoke(call: ToolCall): unknown {
  const handler = getHandler(call.toolName);
  if (!handler) {
    throw new Error(`unknown tool: ${call.toolName}`);
  }
  return handler(call.args);
}
