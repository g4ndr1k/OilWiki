import { useState, useRef } from 'react';
import {
  Card,
  CardContent,
  Divider,
  TextField,
  Button,
  CardActions,
} from '@mui/material';

const Login = (props) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    inputRef.current.value = event.target.value;
  };

  const onClickHandler = () => {
    inputRef && console.log('ini dia' + inputRef.current.value);
    props.onLogin(inputRef.current.value);
  };
  return (
    <Card width="100%">
      <CardContent>
        <Divider variant="middle" textAlign="left">
          Password
        </Divider>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          size='small'
          autoComplete="current-password"
          value={value}
          onChange={onChangeHandler}
          ref={inputRef}
        />
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={onClickHandler}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;

//  window.location.pathname = '/';
