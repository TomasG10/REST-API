import { getConnection , sql, getConnectionNoPool} from '../database';
import { queries } from '../database/querys';
const { Request } = require('tedious');
const connection = require('./noPoolconnection');

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

export const getStoredProcedure_noPool = async (req, res) => {
    try {
        const pool = await getConnectionNoPool();
        const result = await pool.request().query(queries.getStoredProcedure);
        res.json(result.recordset);
    }   catch (error) { 
        res.status(500);
        res.send(error.message);
    }

};
