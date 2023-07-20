import { Client } from "../mod.ts";

const client = new Client({
  hostname: Deno.env.get("DENO_SSH_HOST")!,
});

await client.connect();
