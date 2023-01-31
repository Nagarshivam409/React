
export type Student={
    username:string;
    email:string;
    gender:string;
    mobile:number|string;
    address:string;
    password:string;
    password1:string;
}
export const updateStudentToStorage = (p: Student[]) => {
    localStorage.setItem("studentList", JSON.stringify(p));
  };
  
  export const getStudentFromStorage = (): Student[] => {
    let student = localStorage.getItem("studentList");
    return student ? JSON.parse(student) : [];
  };