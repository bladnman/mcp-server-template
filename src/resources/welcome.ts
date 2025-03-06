export const welcomeResource = {
  uri: "welcome://info",
  name: "welcome",
  description: "Gets a welcome message for the server",
  load: async () => {
    return {
      text: `# String Reverse MCP Server - TypeScript Edition

This is a TypeScript MCP server that provides a string reversal tool:
- reverse: Takes a string as input and returns it reversed

Example:
- Input: "hello world"
- Output: "dlrow olleh"

Try it out to see how it works!`,
    };
  },
};
