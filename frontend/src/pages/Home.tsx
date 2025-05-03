import PageHeader from "../layouts/PageHeader/PageHeader";
import styles from './Home.module.css'
import CategoryPanel from "../layouts/CategoryPanel/CategoryPanel";
import TaskPanel from "../layouts/TaskPanel/TaskPanel";

const Home = () => {
    return (
        <div
            className={styles.container}
        >
            <PageHeader title="TaskFlow" />
            <div className={styles.grid}>
                <CategoryPanel ></CategoryPanel>
                <TaskPanel></TaskPanel>
            </div>
        </div>
    )
}

export default Home;