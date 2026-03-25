import db from '../config/db.js';


//create user (POST)
export const createUser = (req,res)=>{
    const {name , email}= req.body;
    const sql = "INSERT INTO users (name ,email) VALUES (?,?)";
    db.query(sql,[name,email],(err,result)=>{
        if(err) return res.status(500).json(err);

        res.status(201).json({
            message:"user created",
            id:result.inserted
        });
    });
};

//get all user
export const getUsers =(req,res)=>{
    db.query("SELECT * FROM users",(err,result)=>{
        if(err) return res.status(500).json(err);
        res.json(result);
    });
};

//get single user with id
export const getUserById = (req,res)=>{
    const {id}= req.params;

    db.query("SELECT * FROM users WHERE id = ?",[id],(err,result)=>{
        if(err) return res.status(500).json(err);

        if(result.length === 0){
            return res.status(404).json({message:"user not found"});
         }
         res.json(result[0]);
    });
};

//update all
export const updateUser = (req,res)=>{
    const {id}= req.params;
    const {name ,email}= req.body;

    const sql = "UPDATE users SET name =?, email=? WHERE id=?";

    db.query(sql,[name,email,id],(er,result)=>{
        if(err) return res.status(500).json(err);

        res.json({
            message:"user update success.."
        });
    });
};


//update special fields
export const patchUser = (req,res)=>{
    const {id}= req.params;

    const {name, email}=req.body;

    let fields =[];
    let values = [];

    if(name){
        fields.push("name =?");
        values.push(name);
    }

    if(email){
        fields.push("email =?");
        values.push(email);
    }

    if(fields.length === 0){
        return res.status(400).json({
            message:"no data to update"
        });
    }

    const sql = `UPDATE users SET ${fields.join(",")} WHERE id = ?`;
    values.push(id);

    db.query(sql,values,(err,result)=>{
        if(err)  return res.status(500).json(err);
        res.json({
            message:"user update success...."
        });
    });
};

//delete user
export const deleteUser = (req,res)=>{
    const {id}= req.params;

    db.query("DELETE FROM users WHERE id =? ",[id],(err,result)=>{
        if(err) return res.status(500).json(err);
        res.json({
            message:"user deleted..."
        });
    });
};