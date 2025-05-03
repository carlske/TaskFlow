import { useState } from 'react';
import TabsHeader from '../../components/Tabs/TabsHeader/TabsHeader';
import styles from './TaskPanel.module.css'
import TaskList from '../../components/Tabs/TaskList/TaskList';


const TaskPanel = () => {

    const [activeTab, setActiveTab] = useState<'pending' | 'done'>('pending');


    return <aside className={styles.asideTask}>
      <TabsHeader value={activeTab} onChange={setActiveTab} />
      <TaskList status={activeTab}></TaskList>
    </aside>
}

export default TaskPanel;