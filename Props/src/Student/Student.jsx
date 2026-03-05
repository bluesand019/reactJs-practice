//proptypes = a mechanism that ensures that the passed value is of the correct datatype


import styles from './Student.module.css'

function Student(props) {
    return (
        <div className={`${styles.student} ${styles[props.className]}`}>
            <h1>Student No: {props.no}</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}


export default Student;