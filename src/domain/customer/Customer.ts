import { v4 as uuidv4 } from 'uuid';
export class Customer {
    id: any;
    name: string;
    lastname: string;
    birthdate: Date;
    constructor(name: string, lastname: string, birthdate: Date) {
      this.id = uuidv4();
      this.name = name;
      this.lastname = lastname;
      this.birthdate = birthdate;
    }
  }