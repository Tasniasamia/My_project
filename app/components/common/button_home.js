import Link from "next/link";
import { Fragment } from "react";
import styles from './button_home.module.css'; // Adjust the path as needed

const ButtonHome = ({ children, href, className, ...props }) => {
    let Wrapper = !!href ? ({ children }) => <Link href={href}>{children}</Link> : Fragment

    return (
        <Wrapper>
            <button {...props} className={`${styles.button} ${className}`}>
                <span className={styles['button-content']}>{children}</span>
            </button>
        </Wrapper>
    )
}

export default ButtonHome;