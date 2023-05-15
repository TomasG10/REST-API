import { getConnection , sql} from '../database';
import { queries } from '../database/querys';
import pool from '../database/connnection';
import { connect } from 'mssql';
import e from 'express';

export const getProducers = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.request().query(queries.getAllProducers);
        res.json(result.recordset);
    }   catch (error) { 
        res.status(500);
        res.send(error.message);
    }

};

export const getProducerById = async (req, res) => {

    const { id } = req.params; 

    try {
        const connection = await getConnection();
        const result = await connection.request()
            .input('id', sql.Int, id)
            .query(queries.getProducerById);
        console.log(result);
    }   catch (error) {     
        res.status(500);
        res.send(error.message);
    }  

    res.send(id);
}

// CON POOL
export const getStoredProcedureConPool = async (req, res) => {

        pool.connect((err, connection) => {
            if (err) {
              console.error('Database Connection Failed! Bad Config: ', err);
              return;
            }
            connection
              .request()
              .query(queries.getStoredProcedure)
              .then((result) => {
                console.log(result);
                res.json(result.recordset);
                connection.release();
              })
              .catch((err) => {
                console.error('Failed to retrieve data: ', err);
                connection.release();
         });
      });

};

// SIN POOL
export const getStoredProcedure = async (req, res) => {
    
        try {
            const connection = await getConnection();
            const result = await connection.request().query(queries.getStoredProcedure);
            res.json(result.recordset);
        }   catch (error) { 
            res.status(500);
            res.send(error.message);
        }
    
    }