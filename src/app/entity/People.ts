import { Phone } from "./Phone";

export class People {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public cpf: string,
    public dataNascimento: Date,
    public phones: Array<Phone>
  ) {}
}