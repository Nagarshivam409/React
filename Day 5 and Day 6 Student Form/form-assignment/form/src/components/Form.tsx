

import { useUserContext } from "../context/UserContext";
// type Student={
//     username:string;
//     email:string;
//     gender:string;
//     mobile:number|string;
//     address:string;
//     password:string;
//     password1:string;
// }

const Form=()=>{


let {changeInput,addStudent,newStudent} =useUserContext();

    console.log(newStudent);
    // let[data,setData]=useState<Student>({
    //     username:"",
    //     email:"",
    //     gender:"",
    //     mobile:"",
    //     address:"",
    //     password:"",
    //     password1:""
    // });
    // let submission = (event: FormEvent) => {
    //     console.log(data);
    //     if(data.password!==data.password1){
    //         alert("Password does Not Match");

    //     }
    //     event.preventDefault();
    // };
    // let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     let { name, value } = event.target;
    //     setData({ ...data, [name]: value });
    //   };
      

    
    return (
        <center>
        <div className='card text-bg-dark col-30 col-lg-4 p-4 mt-3'>
            
        <h1 className=" border border-whit">Student Registration Form</h1>
        <form onSubmit={addStudent ? addStudent: ()=>{}}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label ">User Name</label>
    <input type="text" className="form-control border border-success p-2"  aria-describedby="emailHelp" placeholder="Enter User Name"
              value={newStudent.username}
              name="username"
              onChange={changeInput ? changeInput : () => {}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
    <input type="number" className="form-control border border-success p-2"  aria-describedby="emailHelp" placeholder="Enter Your Mobile Number"
              value={newStudent.mobile}
              name="mobile"
              onChange={changeInput ? changeInput : () => {}} min={1000000000} max={9999999999}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Your Emaill"
              value={newStudent.email}
              name="email"
              onChange={changeInput ? changeInput : () => {}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Your Address"
              value={newStudent.address}
              name="address"
              onChange={changeInput ? changeInput : () => {}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
    <div className="form-check">
 
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="inlineCheckbox1" onChange={(e)=>{newStudent.gender="Male"}} />
  <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="inlineCheckbox2" onChange={(e)=>{newStudent.gender="Female"}} />
  <label className="form-check-label" htmlFor="inlineCheckbox1">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="inlineCheckbox3" onChange={(e)=>{newStudent.gender="Other"}}
               />
  <label className="form-check-label" htmlFor="inlineCheckbox1">Other</label>
</div>
</div>
    
  </div>
  
  <label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Enter Your Password"
              value={newStudent.password}
              name="password"
              onChange={changeInput ? changeInput : () => {}}/>
<div id="passwordHelpBlock" className="form-text " style={{color:"#6c757d"}} >
  Your password must be 8-20 characters long, contain letters and numbers.
</div>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label p-3">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Your Password"
              value={newStudent.password1}
              name="password1"
              onChange={changeInput ? changeInput : () => {}}/>
  </div>
  <div id="passwordHelpBlock" className="form-text " style={{color:"#6c757d"}} >
  Your password must be same Provided Above.
</div>
  <div className="mb-3 form-check">

    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
</center>
    );
}
export default Form