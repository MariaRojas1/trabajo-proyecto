const { createPool, Pool } = require('mysql');
const { promisify } = require('util');

const pool = createPool({
    host: 'z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'h773vp0jyggaq4oj',
    password: 'hblgep7gif5mja97',
    database: 'kktjnedrya7tpui9'
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log(error);
    } else {
        pool.releaseConnection(connection);
        console.log("DB IS CONNECTED")
    }
});

pool.query = promisify(pool.query);

module.exports = pool;