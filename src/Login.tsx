import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, setToken } from './helper';

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token === 'test') {
      navigate('/');
    }
  }, []); //eslint-disable-line

  const handleLogin = () => {
    setToken('test');
    return navigate('/');
  };

  return (
    <>
      <div
        style={{
          maxWidth: '600px',
          margin: '100px auto',
          textAlign: 'center'
        }}
      >
        <h1>Login form</h1>
        <br />
        <form>
          <div>
            <div>
              <label htmlFor="username" className="label">
                Username
              </label>
            </div>
            <input type="text" id="username" />
          </div>
          <div>
            <div>
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
            <input type="password" id="password" />
          </div>
          <br />
          <input
            type="submit"
            value="Submit"
            style={{ padding: '5px 20px' }}
            onClick={() => handleLogin()}
          />
        </form>
      </div>
    </>
  );
};
