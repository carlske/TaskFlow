import { List, ListItemButton, ListItemText } from '@mui/material';

import { useCategory } from '../../../context/CategoryContext';
import styles from './CategoryList.module.css'


const CategoryList = () => {

  const { categories } = useCategory();

  return (
    <List>
      {(categories || []).map((category) => (
        <ListItemButton key={category.id} style={{ display: 'flex', gap: '1em' }}>
          <p
            style={{
              backgroundColor: category.color,
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          <ListItemText primary={category.name} />

        </ListItemButton>
      ))}
    </List>
  );
};

export default CategoryList;
