import { getConnection , sql} from '../database';
import { queries } from '../database/querys';

export const getProducers = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducers);
        res.json(result.recordset);
    }   catch (error) { 
        res.status(500);
        res.send(error.message);
    }

};

export const getProducerById = async (req, res) => {

    const { id } = req.params; 

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getProducerById);
        console.log(result);
    }   catch (error) {     
        res.status(500);
        res.send(error.message);
    }  

    res.send(id);
}

export const getStoredProcedure = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getStoredProcedure);
        res.json(result.recordset);
    }   catch (error) { 
        res.status(500);
        res.send(error.message);
    }

};