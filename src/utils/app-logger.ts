import type { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();

  const { method = null, url = null, ip = null } = req;
  console.log(`${timestamp} ${method} ${url} ${ip}`);
  next()
}