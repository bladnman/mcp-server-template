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

// Run the server using stdio when executed as main
if (import.meta.url === `file://${process.argv[1]}`) {
  // Support both stdio transport and SSE
  const transportType = process.env.TRANSPORT_TYPE || "stdio";

  if (transportType === "sse") {
    // Start HTTP server with SSE transport
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
  } else {
    // Start with stdio transport (default)
    server.start({
      transportType: "stdio",
    });
  }
}

export default server;
