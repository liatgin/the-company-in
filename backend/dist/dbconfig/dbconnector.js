"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    max: 20,
    //connectionString: 'postgres://root:newPassword@localhost:port/dbname',
    // connectionString:'postgres://postgres:newPassword@postgres:5432/dev-news-db',
    connectionString: 'postgres://postgres:newPassword@localhost:5432/dev-news-db',
    idleTimeoutMillis: 30000
});
exports.default = pool;
