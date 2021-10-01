import { Posting } from "./Posting"


export class Person {

    public idUser: number
    public name: string
    public username: string
    public password: string
    public photo: string
    public userType: string
    public myPosting: Posting []
}