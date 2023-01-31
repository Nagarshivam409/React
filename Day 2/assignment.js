var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, mobile, designation, office_time, salary) {
        var _this = _super.call(this, name, age, mobile) || this;
        _this.designation = designation;
        _this.office_time = office_time;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.printEmployee = function () {
        console.log("The Employee name is ".concat(this.name, " and the age is ").concat(this.age, " earning ").concat(this.salary, " on designation ").concat(this.designation));
    };
    return Employee;
}(User));
