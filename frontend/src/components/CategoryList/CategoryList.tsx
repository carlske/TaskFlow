import { useEffect, useState } from 'react';
import { CircularProgress, List, ListItemButton, ListItemText, Alert } from '@mui/material';

import { useCategory } from '../../context/CategoryContext';

const CategoryList = () => {

  const { data, refreshCategories } = useCategory();


  useEffect(() => {
    refreshCategories();
  }, []);


  return (
    <List>
      {(data || []).map((category) => (
        <ListItemButton key={category.id}>
          <ListItemText primary={category.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default CategoryList;
