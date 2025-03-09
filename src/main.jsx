import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

//從 react-router-dom 這個庫中引入 RouterProvider 元件。會將路由配置 router 給應用，並管理應用中的路由導航。
import { RouterProvider } from 'react-router-dom';
import router from './router';

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)