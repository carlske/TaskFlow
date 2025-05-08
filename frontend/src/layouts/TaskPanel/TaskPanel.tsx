import { useState } from 'react';
import TabsHeader from '../../features/tasks/components/TabsHeader/TabsHeader';
import styles from './TaskPanel.module.css'
import TaskList from '../../features/tasks/components/TaskList/TaskList';
import { TaskStatus } from '../../types/Task';


const TaskPanel = () => {

    const [activeTab, setActiveTab] = useState<TaskStatus.PENDING | TaskStatus.PENDING>(TaskStatus.PENDING);


    return <aside className={styles.asideTask}>
      <TabsHeader value={activeTab} onChange={setActiveTab} />
      <TaskList status={activeTab}></TaskList>
    </aside>
}

export default TaskPanel;