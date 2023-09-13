import {pool} from '../db.js';

export const getEmployees = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
};

export const getEmployee = async(req,res) => {
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM employee where id = ?', [req.params.id])
    if( rows.length <= 0 ){
        return res.status(404).json({
            message:'Data not found'
        })
    }
    res.json(rows[0])
};

export const createEmployee = async(req,res) => {
    const {name,salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?,?)',[name,salary])
    res.send({ 
        id:rows.insertId,
        name,
        salary
     })
};

export const deleteEmploye = async (req,res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])
    
    if(result.affectedRows <= 0){
        return res.status(404).json({
            message:'Data not found'
        })
    }
    else{
        res.sendStatus(204)
    }
};

export const updateEmploye = async (req,res) => {
    const {id} = req.params
    const {name,salary} = req.body
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,name) WHERE id = ?', [name,salary,id])

    if(result.affectedRows == 0){
        return res.status(400).json({
            message:'Data not found'
        })
    }
    else{
       const [rows] =  await pool.query('SELECT * FROM employee WHERE id = ?', [id])
       res.json(rows[0])
    }
};
