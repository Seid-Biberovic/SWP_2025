console.log("Welcome to Deno!");

const handler = (request: Request): Response => {
  return new Response("Hello from Deno!");
};

Deno.serve({ port: 8000 }, handler);

console.log("Server running on http://localhost:8000");