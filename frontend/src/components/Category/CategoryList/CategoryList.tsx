import { List, ListItemButton, ListItemText } from '@mui/material';
import { useCategory } from '../../../context/CategoryContext';
import { useState } from 'react';
import { useTask } from '../../../context/TaskContext';

const CategoryList = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const { categories } = useCategory();

  const { setFilter, filter } = useTask();

  const handleClick = (categoryId: string) => {
    setFilter({ ...filter, categoryId });
    setActiveCategoryId(categoryId)
  };

  return (
    <List>
      {(categories || []).map((category) => (
        <ListItemButton
          key={category.id}
          selected={activeCategoryId === category.id}
          onClick={() => {handleClick(category.id)}}
          style={{ display: 'flex', gap: '1em' }}
        >
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
