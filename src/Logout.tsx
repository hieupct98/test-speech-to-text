import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken } from './helper';

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setToken('');
    navigate('/login');
  }, []); //eslint-disable-line

  return <></>;
};
