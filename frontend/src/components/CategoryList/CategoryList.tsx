import { List, ListItemButton, ListItemText } from '@mui/material';

import { useCategory } from '../../context/CategoryContext';

const CategoryList = () => {

  const { categories } = useCategory();

  return (
    <List>
      {(categories || []).map((category) => (
        <ListItemButton key={category.id}>
          <ListItemText primary={category.name} />
          <p style={{ backgroundColor: category.color, padding: '4px 8px', borderRadius: '4px' }}>
            {category.color}
          </p>
        </ListItemButton>
      ))}
    </List>
  );
};

export default CategoryList;
