import { TitleProps } from "../../types/Ttile";
import styles from './Title.module.css'


const Title: React.FC<TitleProps> = ({ children, className = '' }) => {    
    return <h1 className={`${styles.title} ${className}`}>{children}</h1>
}

export default Title;