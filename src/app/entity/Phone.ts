import { People } from "./People";

export class Phone {
  constructor(
    public id: number,
    public ddd: string,
    public numero: string,
    public people?: People
  ) {}
}