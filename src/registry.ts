type Handler = (args: Record<string, unknown>) => unknown;

const handlers = new Map<string, Handler>();

export function registerTool(name: string, handler: Handler): void {
  handlers.set(name, handler);
}

export function getHandler(name: string): Handler | undefined {
  return handlers.get(name);
}
