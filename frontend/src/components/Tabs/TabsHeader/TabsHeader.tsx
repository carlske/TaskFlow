import { Tabs, Tab } from '@mui/material';
import styles from './TabsHeader.module.css'
import { TaksHeadersProps, TaskStatus } from '../../../types/Task';


const TabsHeader = ({ value, onChange }: TaksHeadersProps ) => {
  const handleChange = (_: any, newValue: string) => {
    onChange(newValue as TaskStatus);
  };

  return (
    <Tabs className={styles.tabsHeader} value={value} onChange={handleChange}>
      <Tab label="Activas" value="pending" />
      <Tab label="Finalizadas" value="done" />
    </Tabs>
  );
};

export default TabsHeader;
