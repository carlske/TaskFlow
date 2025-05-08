import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../src/assets/global.css';
import theme from '../theme/theme.ts'
import { CategoryProvider } from './features/categories/context/CategoryContext.tsx';
import { TaskProvider } from './features/tasks/context/TaskContext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <TaskProvider>
    <CategoryProvider>
    <App />
    </CategoryProvider>
    </TaskProvider>
    </ThemeProvider>
  </StrictMode>,
)
