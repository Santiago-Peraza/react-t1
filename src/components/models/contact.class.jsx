import { status } from "./status.enum";

export class contact{
    name= '';
    lastname = '';
    email= '';
    online = status.OFFLINE;
    constructor(name, lastname,email,online){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.online = online;

    }
}