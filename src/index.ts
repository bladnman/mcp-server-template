import {FastMCP} from "fastmcp";
import {HTTP_PORT, SERVER_NAME, SERVER_VERSION, SSE_ENDPOINT} from "./CONST.js";
import {greetingResource} from "./resources/greeting.js";
import {welcomeResource} from "./resources/welcome.js";
import {reverseTool} from "./tools/reverse.js";

// Define server
const server = new FastMCP({
  name: SERVER_NAME,
  version: SERVER_VERSION,
});

// Tool: Reverse
server.addTool(reverseTool);

// Resource: Greeting
server.addResource(greetingResource);

// Resource: Welcome
server.addResource(welcomeResource);

// CHECK FOR FILE EXECUTION
// This is used to determine if the file is being executed directly
// versus being imported from another file.
const wasExecuted = import.meta.url === `file://${process.argv[1]}`;
if (wasExecuted) {
  // Support both stdio transport and SSE
  const transportType = process.env.TRANSPORT_TYPE || "stdio";

  //
  // SSE
  // Start HTTP server with SSE transport
  if (transportType === "sse") {
    server.start({
      transportType: "sse",
      sse: {
        endpoint: SSE_ENDPOINT,
        port: HTTP_PORT,
      },
    });
    console.log(
      `MCP server started on HTTP port ${HTTP_PORT} with SSE transport at ${SSE_ENDPOINT} endpoint`
    );
  }

  //
  // STDIO
  // Start with stdio transport (default)
  else {
    server.start({
      transportType: "stdio",
    });
  }
} // END CHECK FOR FILE EXECUTION

export default server;
