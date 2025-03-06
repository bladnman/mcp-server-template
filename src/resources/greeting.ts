export const greetingResource = {
  uri: "greeting://hello",
  name: "greeting",
  description: "Gets a personalized greeting",
  load: async () => {
    return {
      text: "Hello from the TypeScript Reverse MCP server! This server provides a string reversal tool.",
    };
  },
};
