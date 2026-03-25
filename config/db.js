import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db  = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});
db.connect((err)=>{
    if (err){
        console.log(`database error${err}`);
    }else{
        console.log(`mysql is connected`);
    }
});

export default db;