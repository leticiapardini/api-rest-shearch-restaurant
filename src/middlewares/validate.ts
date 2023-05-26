import { NextFunction, Request, Response } from "express";

export const validateFildNewRestaurant =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
      });
      return next();
    } catch (err: any) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };

export const validateFildUpdateRestaurant =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
      });
      return next();
    } catch (err: any) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };

export const validateFildDeleteRestaurant =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
      });
      return next();
    } catch (err: any) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };

  export const validateFildNewTimes =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
      });
      return next();
    } catch (err: any) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };

  export const validateFildUpdateTimes =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
      });
      return next();
    } catch (err: any) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };
