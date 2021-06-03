import { Router } from 'express';
import CompaniesRouter from './companiesRouter';


class MasterRouter {
  private _router = Router();
  private companiesRouter = CompaniesRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/companies', this.companiesRouter)
  }
}

export = new MasterRouter().router;