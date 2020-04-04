declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV?: 'development' | 'production' | 'test';
    readonly DB_TYPE?: 'mysql';
    readonly DB_PORT?: string;
    readonly DB_HOST?: string;
    readonly DB_USERNAME?: string;
    readonly DB_PASSWORD?: string;
    readonly DB_DATABASE?: string;
    readonly DB_SYNCHRONIZE?: 'true' | 'false';
  }
}
