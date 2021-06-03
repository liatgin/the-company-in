import pool from '../dbconfig/dbconnector';
import { v4 as uuid } from 'uuid';

class CompaniesController {
    // get all companies
    public async allCompanies(req: any, res: any) {
        try {
            const client = await pool.connect();
          
            // TODO: limit number of companies
            const fetchCompaniesSql = `
              SELECT * 
              FROM companies
            `
            const { rows } = await client.query(fetchCompaniesSql);
            const allCompanies = rows;
            client.release();
            res.status(200).json({allCompanies});
        } catch (error) {
          res.status(400).send(error);
        }
    }

    // add a new company
    public async addCompany(req: any, res: any) {
      try {
          const client = await pool.connect();
          const body = JSON.parse(Object.entries(req.body)[0][0])
          const newCompanySql = `
            INSERT INTO companies(id, logo, name, domain, description, industry, money_raised, market_cap, annual_revenue, location, number_ofEmployees)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
          `
          const { rows } = await client.query(newCompanySql, [uuid(), null, null, body.domain, null, null, null, null, null, null]);
          const newCompany = rows;
          client.release();
          res.status(200).json(newCompany);

      } catch (error) {
          res.status(400).send(error);
      }
    }
  }
  
  export = new CompaniesController();