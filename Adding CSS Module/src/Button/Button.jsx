import styles from './Button.module.css'

function Button() {
    return(
        //styles.button generates a unique className by hashing algorithm
        <button className={styles.button}>Click me</button>
    )
}

export default Button;