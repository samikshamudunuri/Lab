import React,{useState} from 'react';
import "./App.css"
import Axios from 'axios';


function App() {
  const [name, setStudentName] = useState("");
  const [rollno, setRollNo] = useState("");
  const [branch, setBranch] =useState("");
  const [tech, setTechnology] = useState("");
  const [status, setStatus] = useState("");

  const submitReview=()=>
    {
    Axios.post('http://localhost:9000/students',
    {name:name,
    rollno:rollno,
    branch:branch,
    tech:tech,
    sub:status}).then(()=>
    {
    alert("success");
    });
    };
    
  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label><b>Student Name</b></label>
        <input
          type="text"
          name="name"
          onChange={(e)=>{
            setStudentName(e.target.value);
          }}
      required/>
      <label><b>Roll Number</b></label>
        <input
          type="number"
          name="rollno"
          onChange={(e)=>{
            setRollNo(e.target.value);
          }}
      required/>
      <label><b>Branch</b></label>
        <input
          type="text"
          name="branch"
          onChange={(e)=>{
            setBranch(e.target.value);
          }}
      required/>
      <label><b>Technology</b></label>
        <input
          type="text"
          name="tech"
          onChange={(e)=>{
            setTechnology(e.target.value);
          }}
      required/>
      <label><b>Subscription Status</b></label>
        <input
          type="boolean"
          name="status"
          onChange={(e)=>{
            setStatus(e.target.value);
          }}
      required/>
      <button onClick={submitReview}><b>Submit</b></button>
      </div>
    </div>
  );
}

export default App
