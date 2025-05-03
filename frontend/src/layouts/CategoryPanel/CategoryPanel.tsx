import { Typography } from "@mui/material"
import styles from './CategoryPanel.module.css'
import CategoryList from "../../components/CategoryList/CategoryList"


const CategoryPanel = () => {
    return <aside className={styles.aside}>
        <Typography className={styles.heading} variant="h4">
            Categorias
        </Typography>
        <CategoryList></CategoryList>
    </aside>
}

export default CategoryPanel