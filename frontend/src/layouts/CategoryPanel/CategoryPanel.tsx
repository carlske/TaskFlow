import { Typography } from "@mui/material"
import styles from './CategoryPanel.module.css'
import CategoryList from "../../components/CategoryList/CategoryList"
import CategoryModal from "../../components/CategoryModal/CategoryModal"


const CategoryPanel = () => {
    return <aside className={styles.aside}>
        <Typography className={styles.heading} variant="h4">
            Categorias
        </Typography>
        <CategoryList></CategoryList>
        <CategoryModal></CategoryModal>
    </aside>
}

export default CategoryPanel