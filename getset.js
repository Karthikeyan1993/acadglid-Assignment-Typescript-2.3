/**
 * Created by USER on 10/06/2017.
 */
/**
 * Validate class for validation user details
 */
var Validate = (function () {
    function Validate() {
    }
    Object.defineProperty(Validate.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Validate.prototype.isValid = function (args) {
        if ((args) && (typeof args === 'string') && (args.length >= 5)) {
            return "The username " + args + " is valid";
        }
        else {
            return 'user is not valid,Try Again';
        }
    };
    return Validate;
}());
//Object creation for Validate class
var Obj = new Validate();
Obj.username = "Karthik";
console.log(Obj.isValid(Obj.username));
