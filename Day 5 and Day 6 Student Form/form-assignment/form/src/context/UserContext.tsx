import {
    ChangeEvent,
    createContext,
    FormEvent,
    useContext,
    useEffect,
    useState,
  } from "react";
import { useNavigate } from "react-router-dom";
import { Student,getStudentFromStorage,updateStudentToStorage } from "../service/localStorage";

let initStudent:Student={
    username:"",
    email:"",
    gender:"",
    mobile:"",
    address:"",
    password:"",
    password1:""

}
type Props = {
    children: JSX.Element;
  };
type studentContextType = {
    studentList:Student[];
    newStudent:Student;
    addStudent?(event:FormEvent):void;
    changeInput?(
        event: ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ): void;
    updateStudent?(event:FormEvent):void;
    setEditData?(id: string): void;

    
  };
  let UserContext = createContext<studentContextType>({
    studentList: [],
    newStudent: {...initStudent},
    

  });
  
  // create provider component
  
  export const UserContextProvider = ({children}: Props) => {
    let navigate=useNavigate();
    let [newStudent,setNewStudent]=useState<Student>({...initStudent})
    let [studentList, setStudentList] = useState<Student[]>(getStudentFromStorage());
    
    useEffect(() => {
        updateStudentToStorage(studentList);
    }, [studentList]);
    
    let changeInput = (
        event: ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ): void => {
        let { name, value } = event.target;
        setNewStudent({ ...newStudent, [name]: value });
    };
    let updateStudent = (event: FormEvent) => {
        event.preventDefault();
        let index=studentList.findIndex((value:Student,index:number)=>value.mobile===newStudent.mobile);
        if(index===-1){
            alert("Not Found");
        }else{
            studentList.splice(index,1,{...newStudent});
            setStudentList([...studentList]);
            setNewStudent({...initStudent})
              navigate("/student/list");
        }

      };
  
    let addStudent=(event:FormEvent)=>{
        event.preventDefault();
        // if(newStudent.password!==newStudent.password1){
        //     alert("Password Doesnt Match");
        // }else{
        setStudentList([...studentList,{...newStudent}]);
        setNewStudent({...initStudent});
        alert("Student Added Successfully");
    // }
    }
    let setEditData = (id: string): void => {
        console.log(id);
        let result = studentList.find((student) => id === student.mobile);
        if (result === undefined) {
          //   navigate("/");
          window.location.replace("/");
        console.log(result);
        } else {
          setNewStudent({ ...result });
        }
      };
    let values: studentContextType = {
      studentList,
      addStudent,
      newStudent,
      changeInput,
      updateStudent,
      setEditData
      
    };
    return (
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
  };
  
  // create context Hook
  export const useUserContext = () => {
    return useContext(UserContext);
  };
