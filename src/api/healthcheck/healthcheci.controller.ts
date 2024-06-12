import { Request, Response } from 'express';

export async function healtCheck(req: Request, res: Response) {
  return res.send("server on run")
}