import { Typography } from "@mui/material";
import { TitleProps } from "../../types/Ttile";
import styles from './PageHeader.module.css'
import TaskFormModal from "../../components/TaskFormModal/TaskFormModal";


const PageHeader: React.FC<TitleProps> = ({ title }) => {
    return <header className={styles.header}>
        <Typography className={styles.heading} variant="h2">
            {title}
        </Typography>
        <div className={styles.actions}>
            <TaskFormModal />
        </div>
    </header>

}

export default PageHeader;