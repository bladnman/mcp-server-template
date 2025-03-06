# Template for MCP Server

A starting point for an MCP Server.

## DUPLICATE ME

The whole idea here is for you to take this for your own.
Running this to create a new folder with your own copy
of this template (git removed and replaced with a new one).

```bash
# replace mcp-server with name of your choice
npx make-mine https://github.com/bladnman/mcp-server-template.git mcp-server
```

## Features

- Simple string reversal tool
- Support for both stdio and SSE transports
- TypeScript implementation with full build process

## Tools

### reverse

Takes a string input and returns it reversed.

Example:
- Input: "hello world"
- Output: "dlrow olleh"

## Resources

- `greeting://hello`: A welcome greeting
- `welcome://info`: Information about the server and its capabilities

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Running the Server

```bash
# Build and run with stdio transport (default)
bash run-server.sh

# Or, to run with SSE transport
TRANSPORT_TYPE=sse npm run start
```

By default, the SSE server runs on port 4000.

## Development

```bash
# Run in development mode with hot reloading
npm run dev

# Watch for changes and rebuild automatically
npm run watch
```

## Building

```bash
# Build TypeScript to JavaScript
npm run build
```

The built files will be in the `dist` directory.

## License

ISC License 