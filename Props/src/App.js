import './App.css';
import Student from './Student/Student';

function App() {
  
  return (
    <>
      <Student 
          className = "student1"
          no = {1}
          name = "Kowsor"
          age = {30}
          isStudent = {true}      
      />
      <Student
          className = "student2" 
          no = {2}
          name = "Dip"
          age = {54}
          isStudent = {false}      
      />
      <Student 
          className = "student3"
          no = {3}
          name = "Rafi"
          age = {73}
          isStudent = {false}      
      />
    </>
  );
}

export default App;
