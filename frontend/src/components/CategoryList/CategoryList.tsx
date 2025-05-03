import { List, ListItemButton, ListItemText, Alert } from '@mui/material';

import { useCategory } from '../../context/CategoryContext';

const CategoryList = () => {

  const { categories } = useCategory();

  return (
    <List>
      {(categories || []).map((category) => (
        <ListItemButton key={category.id}>
          <ListItemText primary={category.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default CategoryList;
