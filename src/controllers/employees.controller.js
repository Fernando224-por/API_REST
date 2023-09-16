//importamos la conexion a la base de datos
import {pool} from '../db.js';

//OBTENER EMPLEADOS

// creamos una constante que obtenga todos los empleados
// debe ser asincrona y retornara una respuesta
export const getEmployees = async(req ,res) => {
    //intentamos la consulta para devolver la respuesta en un formato json
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows) 
    } 
    //si falla la consulta, se devuelve un mensaje de error con status 500
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
};

//OBTENER EMPLEADO por ID

// creamos una constante que obtenga un empleado especifico
// debe ser asincrona, con request para los parametros y retornan un response
export const getEmployee = async(req,res) => {
        //intentamos la consulta para devolver la respuesta en un formato json
    try {
        //realizamos una consulta preparada donde el ? se reemplaza por el id que proviende el req.params.id
        const [rows] = await pool.query('SELECT * FROM employee where id = ?', [req.params.id])
        if( rows.length <= 0 ){
            return res.status(404).json({
                message:'Data not found'
            })
        }
        res.json(rows[0])
    } 
        //si falla la consulta, se devuelve un mensaje de error con status 500
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
};


// CREAR EMPLEADO

// creamos una constante que obtenga la data del usuario creado
// debe ser asincrona, con request para los parametros y retornan un response
export const createEmployee = async(req,res) => {
    //intentamos hacer la insercion de data
    try {
        //parametrizamos la data a asignar
        const {name,salary} = req.body
        //en una constante almacenamos el valor de la data almacenada y esta se regresa como respuesta
        //se realiza una accion SQL preparada de la data a enviar al INSERT en la BD
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?,?)',[name,salary])
        res.send({ 
            id:rows.insertId,
            name,
            salary
         })
    } 
        //si falla la consulta, se devuelve un mensaje de error con status 500
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }

};

//ELIMINAR EMPLEADO

// creamos una constante que obtenga una respuesta de la eliminacion de un usuario
// debe ser asincrona, con request para los parametros y retornan un response
export const deleteEmploye = async (req,res) => {
    //intentamos eliminar el empleado
    try {
        //en una constante almacenamos el valor de la data almacenada y se regresa un status como respuesta
        //se realiza una accion de la BD preparada el id del user a eliminar
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])
        //si no se elimino (en este caso empleados), se retorna un status 404 con el mensaje 'Data not found' 
        if(result.affectedRows <= 0){
            return res.status(404).json({
                message:'Data not found'
            })
        }
        //de lo contrario se envia un estatus 204
        else{
            res.sendStatus(204)
        }

    } 
    //si falla la consulta, se devuelve un mensaje de error con status 500
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
};

// ACTUALIZAR EMPLEADOS

// creamos una constante que obtenga una respuesta del empleado actualizado
// debe ser asincrona, con request para los parametros y retornan un response

export const updateEmploye = async (req,res) => {
     //tenemos el id con a actualizar como parametro
    const {id} = req.params
    //data de los datos a actualizar como boy del request
    const {name,salary} = req.body
    //intentamos actualizar el empleado
    try {
        //en la constante se almacena el resultado de la actualizacion
        //se prepara el UPDATE del empleado a actualizar
        // se actualiza solo la data que se envia en el req.body
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,name) WHERE id = ?', [name,salary,id])

        //si no se actualizo (en este caso empleados), se retorna un status 404 con el mensaje 'Data not found'         
        if(result.affectedRows == 0){
            return res.status(400).json({
                message:'Data not found'
            })
        }
        //de lo contrario se realiza consulta y se muestra la data del empleado actualizado
        else{
        const [rows] =  await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(rows[0])
        }
    } 
    //si falla la consulta, se devuelve un mensaje de error con status 500
    catch (error) {
        return res.status(500).json({
            message:'Something goes wrong'
        })
    }
};
