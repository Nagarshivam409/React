import { useUserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Editform = () => {
  let { changeInput, updateStudent, newStudent, setEditData } =
    useUserContext();
  let { id } = useParams();

  useEffect(() => {
    if (setEditData) setEditData(id?id:'');
  }, []);

  return (
    <>
      <section className="card col-6 col-lg-4 p-4 mt-3">
        <h1>Edit Student </h1>
        {/* <form action="#" onSubmit={updateStudent ? updateStudent : () => {}}>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              name="title"
              value={newStudent.username}
              onChange={changeInput ? changeInput : () => {}}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Price"
              name="price"
              value={newStudent.price}
              onChange={changeInput ? changeInput : () => {}}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              placeholder="Product description"
              name="description"
              value={newStudent.description}
              onChange={changeInput ? changeInput : () => {}}
            ></textarea>
          </div>

          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Category
            </label>
            <select
              className="form-select capitalize"
              name="category"
              onChange={changeInput ? changeInput : () => {}}
              value={newStudent.category}
            >
              <option value="">---select category</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>

          <button className="mt-2 btn btn-outline-primary">
            <span className="fa fa-floppy-o me-2 "></span>
            Update
          </button>
        </form> */}
        <form onSubmit={updateStudent ? updateStudent: ()=>{}}>
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
  


  
  <button type="submit" className="btn btn-primary">Update</button>
</form>
      </section>
    </>
  );
};

export default Editform;
