import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Login } from './Login';
import { Logout } from './Logout';

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};
