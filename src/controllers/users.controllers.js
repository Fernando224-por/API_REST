import { pool } from "../db.js";

export const getUsers = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM Users')
        res.json(rows)
    }
    catch (error){
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
};

export const getUser = async (req,res)=>{
    try {
        const [result] = await pool.query('SELECT * FROM Users WHERE id = ?',[req.params.id])
        if (result.length <= 0) {
            return res.status(404).json({
                message:'Data not found'
            })
        } 
        else {
            res.json(result[0])
        }
    } 
    catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
};

export const createUser = async (req,res) =>{
    try {
        const {doc,email,pass,rol} = req.body    
        const [result] = await pool.query ('INSERT INTO Users (id,email,Pass,rol) values (?,?,?,?)',[doc,email,pass,rol])
        res.send({
            doc,
            email,
            pass,
            rol
        })
    } 
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
};

export const updateUser = async (req,res) => {
    const {id} = req.params
    const {email,pass,rol} = req.body
    try {
        const [result] = await pool.query('UPDATE Users SET email = IFNULL(?,email), Pass = IFNULL(?,Pass), rol = IFNULL(?,rol) WHERE id = ?', [email,pass,rol,id])
        if (result.affectedRows == 0) {
            return res.status(400).json({
                message:'Data not found'
            })
        } else {
            const [rows] =  await pool.query('SELECT * FROM Users WHERE id = ?', [id])
            res.json(rows[0])
        }
    } 
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
};

export const deleteUser = async (req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM Users where id = ?',[req.params.id])
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message:'Data not found'
            })
        } 
        else {
            res.sendStatus(204)
        }
    } 
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
};