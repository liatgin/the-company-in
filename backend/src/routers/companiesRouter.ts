import { NextFunction, Request, Response, Router } from 'express';
import CompaniesController from '../controllers/companiesController';

class CompaniesRouter {
  private _router = Router();
  private _controller = CompaniesController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => { 
      this._controller.allCompanies(req, res)
    });

    this._router.post('/newCompany', (req: Request, res: Response, next: NextFunction) => {
     this._controller.addCompany(req, res)
    });
  }
}

export = new CompaniesRouter().router;