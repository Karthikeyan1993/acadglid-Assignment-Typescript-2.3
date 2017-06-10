/**
 * Created by USER on 10/06/2017.
 */
/**
 * Validate class for validation user details
 */
class Validate {
    private _username: string;

    constructor() {
    }

    public get username() {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    isValid(args: string): string {
        if ((args) && (typeof args === 'string') && (args.length >= 5)) {
            return `The username ${args} is valid`
        } else {
            return 'user is not valid,Try Again';
        }
    }
}
//Object creation for Validate class
let Obj = new Validate();
Obj.username = "Karthik";
console.log(Obj.isValid(Obj.username));