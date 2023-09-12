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

export const updateEmploye = async (req,res) => {
    const result = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])
    console.log(result)
    res.send('employee deleted')
};

export const deleteEmploye = (req,res) => res.send('Eliminando empleados');