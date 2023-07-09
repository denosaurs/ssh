export class Client {
  #connection: Deno.TcpConn | null;
  isConnected: boolean;

  constructor({
    hostname = "127.0.0.1",
    port = 22,
    username = "root",
  }: {
    hostname?: string;
    port?: number;
    username?: string;
    password?: string;
    privateKey?: string;
    passphrase?: string;
  } = {}) {
    this.#connection = null;
    this.isConnected = false;
  }

  async connect() {
    // this.#connection = await Deno.connect();

    // // if successful:
    // this.isConnected = true;
  }

  disconnect() {
  }

  async getDirectory() {
  }

  async getFile() {
  }

  async putDirectory() {
  }

  async putFile() {
  }

  async run(command: string, {
    cwd,
  }: {
    cwd?: string;
  } = {}) {
  }
}
