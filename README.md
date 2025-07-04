
# Sovereign SDK WASM Error Reproduction

This project demonstrates how to reproduce WASM-related errors when using the `@sovereign-sdk/web3` package in a TanStack Router application.

## Purpose

This minimal reproduction case shows issues that occur when trying to import and use the Sovereign SDK's WASM modules in a server-side environment.

## Setup

1. Install dependencies:
```sh
npm install
# or
pnpm install
# or
bun install
```

2. Start the development server:
```sh
npm run dev
# or
pnpm dev
# or
bun dev
```

3. Open your browser and navigate to `http://localhost:3000`

## How to Trigger the Error

1. Once the application loads, you'll see a simple homepage with a button labeled "wasmIssuesServerFunc"

2. Click the button to trigger the server function that attempts to:
   - Import the `@sovereign-sdk/web3` package
   - Create a standard rollup instance with default configuration

3. The error will be displayed in an alert dialog showing the specific WASM-related issues

## Expected Behavior

When you click the button, you should see an error related to WASM module loading or initialization. This demonstrates the compatibility issues between the Sovereign SDK and the current server-side environment.

