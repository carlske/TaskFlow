import { Typography } from "@mui/material"
import styles from './CategoryPanel.module.css'
import CategoryList from "@/features/categories/components/CategoryList/CategoryList"
import CategoryModal from "@/features/categories/components/CategoryModal/CategoryModal"


const CategoryPanel = () => {
    return <aside className={styles.aside}>
        <Typography className={styles.heading} variant="h4">
            Categorias
        </Typography>
        <CategoryList/>
        <CategoryModal/>
    </aside>
}

export default CategoryPanel