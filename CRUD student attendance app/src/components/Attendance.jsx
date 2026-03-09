import React, { useState } from "react";
import "./Attendance.css";

const Attendance = () => {
    const [studentName, setStudentName] = useState("");
    const [studentList, setStudentList] = useState([]);
    const [presentList, setPresentList] = useState([]);
    const [absentList, setAbsentList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);

    const handleStudentName = (e) => {
        setStudentName(s => e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //if not prevented, the page will refresh resetting all the states
        if(studentName.trim()==="") {
            return alert("Please enter a valid name");
        }
        editMode? handleUpdateStudent() : handleAddStudent();
    }

    const handleAddStudent = () => {
        const newStudent = {
            id: Date.now(),
            name: studentName,
            isPresent: undefined
        }
        setStudentList([newStudent, ...studentList]);
        setStudentName("");
    }

    const handleEditStudent = (element) => {
        setEditMode(true);
        setEditableStudent(element);
        setStudentName(element.name);
    }

    const handleUpdateStudent = () => {
        const updatedStudentList = studentList.map(element => {
            if(element.id === editableStudent.id) {
                return {...element, name:studentName};
            }
            return element;
        })
        setStudentList(updatedStudentList);
        setEditMode(false);
        setStudentName("");
    }

    const handleRemove = (studentId) => {
        const updatedStudentList = studentList.filter(element => {
            return element.id !== studentId;
        })
        setStudentList(updatedStudentList);
    } 

    const handlePresentStudent = (presentStudent) => {
        const student = {...presentStudent, isPresent:true}
        setPresentList([student, ...presentList]);
        const updatedStudentList = studentList.map(element => {
            if(element.id === presentStudent.id) {
                return {...element, isPresent:true};
            }
            return element;
        })
        setStudentList(updatedStudentList);
    }

    const handleAbsentStudent = (absentStudent) => {
        const student = {...absentStudent, isPresent:false}
        setAbsentList([student, ...absentList]);
        const updatedStudentList = studentList.map(element => {
            if(element.id === absentStudent.id) {
                return {...element, isPresent:false};
            }
            return element;
        })
        setStudentList(updatedStudentList);
    }

    const sendToAbsentList = (student) => {
        setPresentList(presentList.filter(element => {
           return student.id!==element.id;
        }))
        setAbsentList([student, ...absentList]);
    }
    const sendToPresentList = (student) => {
        setAbsentList(absentList.filter(element => {
           return student.id!==element.id;
        }))
        setPresentList([student, ...presentList]);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter student name" value={studentName} onChange={(e) => handleStudentName(e)} />
        <button type="submit">
          {editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
      <div className="student-container">
        <div className="student-list">
            <h2>Student List</h2>
            <ul>
                {
                    studentList.map(element => {
                        return (
                            <div className="student">
                               <span><li key={element.id}>
                                <span>{element.name}</span>
                                <button onClick={() => handleEditStudent(element)}>Edit</button>
                                <button onClick={() => handleRemove(element.id)}>Remove</button>
                                <button 
                                disabled={element.isPresent!==undefined}
                                onClick={() => handlePresentStudent(element)}>
                                    Make Present
                                    </button>
                                <button 
                                disabled={element.isPresent!==undefined}
                                onClick={() => handleAbsentStudent(element)}>
                                    Make Absent
                                    </button>
                                </li></span> 
                                <br />
                            </div>
                        ) 
                    })
                }
            </ul>
        </div>
        <div className="present-list">
            <h2>Present list</h2>
            <ul>
                {
                    presentList.map(element => {
                       return <li key={element.id}>
                        <span>{element.name}</span>
                        <button
                        onClick={() => sendToAbsentList(element)}>
                        Send to Absent list
                        </button>
                        </li>
                    })
                }
            </ul>
        </div>
        <div className="absent-list">
            <h2>Absent list</h2>
            <ul>
                {
                    absentList.map(element => {
                       return <li key={element.id}>
                        <span>{element.name}</span>
                        <button
                        onClick={() => sendToPresentList(element)}
                        >Send to Present list</button>
                        </li>
                    })
                }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
