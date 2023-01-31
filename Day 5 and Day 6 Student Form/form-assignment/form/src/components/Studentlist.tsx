

import { useUserContext } from "../context/UserContext";
import {useNavigate} from  'react-router-dom'
const Studentlist=()=>{
  
    let { studentList} = useUserContext();
    let navigate = useNavigate();
    return (
        
        <section className="col-12 mt-2">
        <table className="table table-bordered ">
          <thead className="bg-primary text-white">
            <tr>
              <th style={{ width: "5%" }}>Sr</th>
              <th style={{ width: "45%" }}>Username</th>
              <th style={{ width: "15%" }}>Email</th>
              <th style={{ width: "20%" }}>Address</th>
              <th style={{ width: "10%" }}>Gender</th>
              <th style={{ width: "15%" }}>Mobile</th>
              <th style={{ width: "10%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentList.length !== 0 ? null : (
              <tr>
                <td colSpan={6} className="text-danger fw-bold text-center">
                  No Product Found
                </td>
              </tr>
            )}
            {studentList.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.username}</td>
                  <td>{product.email}</td>
                  <td>{product.address}</td>
                  <td>{product.gender}</td>
                  <td>{product.mobile}</td>
                    
                  <td> <button
                      className="btn btn-sm btn-primary mx-1"
                      title="edit"
                      onClick={() => navigate("/student/edit/" + product.mobile)}
                    >
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>
                    </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
            </section>
    );
}
export default Studentlist;