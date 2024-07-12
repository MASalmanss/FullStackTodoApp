import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth  } from './security/AuthContext';

export function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleSubmit() {
    if (authContext.login(username , password)) {
      
      navigate(`/welcome/${username}`);
    } else {
      setShowError(true);
    }
  }

  return (
    <div className='Login'>
      {showError && <div className='errorMessage'>Authentication Failed</div>}
      <div className='LoginForm'>
        <div>
          <label>User Name</label>
          <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button type='button' name='login' onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}
