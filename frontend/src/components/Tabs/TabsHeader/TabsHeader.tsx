import { Tabs, Tab } from '@mui/material';
import styles from './TabsHeader.module.css'
import { TaksHeadersProps, TaskStatus } from '../../../types/Task';
import { useTask } from '../../../context/TaskContext';


const TabsHeader = ({ value, onChange }: TaksHeadersProps ) => {

  const { filter, setFilter } = useTask();



  const handleChange = (_event: React.SyntheticEvent, newValue: TaskStatus) => {
    onChange(newValue as TaskStatus);
    setFilter({ ...filter, status: newValue });
  };


  return (
    <Tabs className={styles.tabsHeader} value={value} onChange={handleChange}>
      <Tab label="Activas" value="pending" />
      <Tab label="Finalizadas" value="done" />
    </Tabs>
  );
};

export default TabsHeader;
