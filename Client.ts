// deno-lint-ignore-file no-unused-vars

/**
 * The options for the client.
 */
export interface ClientOptions {
  /**
   * The hostname or IP address of the server.
   */
  hostname?: string;

  /**
   * The port number of the server.
   */
  port?: number;

  /**
   * The username to authenticate as.
   */
  username?: string;

  /**
   * The password to use for authentication.
   */
  password?: string;

  /**
   * The private key to use for authentication.
   */
  privateKey?: string;

  /**
   * The passphrase to use for decrypting the private key.
   */
  passphrase?: string;
}

/**
 * The base SSH client class for connecting to the server.
 * Each instance of this class represents a single connection to the server.
 */
export class Client {
  #connection: Deno.TcpConn | null;
  #port: number;
  #hostname: string;
  #username: string;
  isConnected: boolean;

  constructor({
    hostname = "127.0.0.1",
    port = 22,
    username = "root",
  }: ClientOptions = {}) {
    this.#connection = null;
    this.isConnected = false;
    this.#port = port;
    this.#hostname = hostname;
    this.#username = username;
  }

  /**
   * Connect to the server.
   */
  async connect() {
    this.#connection = await Deno.connect({
      port: this.#port,
      hostname: this.#hostname,
    });
    // // if successful:
    this.isConnected = true;
  }

  /**
   * Disconnect from the server.
   */
  disconnect() {
  }

  /**
   * Get a directory listing. If a path is given, the listing will start from that path.
   */
  async getDirectory(path?: string) {
  }

  /**
   * Get a file. If a path is given, the file will be retrieved from that path.
   */
  async getFile(path?: string) {
  }

  /**
   * Put a directory. If a path is given, the directory will be put to that path.
   */
  async putDirectory(path?: string) {
  }

  /**
   * Put a file. If a path is given, the file will be put to that path.
   */
  async putFile(path?: string) {
  }

  /**
   * Run a command on the server.
   */
  async run(command: string, {
    cwd,
  }: {
    cwd?: string;
  } = {}) {
  }
}
