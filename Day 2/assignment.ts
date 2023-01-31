class User{
   name:string;
    age:number;
    mobile:number;
    constructor(name:string,age:number,mobile:number){
        this.name=name;
        this.age=age;
        this.mobile=mobile;
    }
}
interface details{
    designation:string;
    office_time:string;
    salary:number;
    printEmployee():void;
}
class Employee extends User implements details {
    designation:string;
    office_time:string;
    salary:number;
    constructor(name:string,age:number,mobile:number,designation:string,office_time:string,salary:number){
        super(name,age,mobile);
        this.designation=designation;
        this.office_time=office_time;
        this.salary=salary;
    }
    
    printEmployee(){
        console.log(`The Employee name is ${this.name} and the age is ${this.age} earning ${this.salary} on designation ${this.designation}`);
    }


}