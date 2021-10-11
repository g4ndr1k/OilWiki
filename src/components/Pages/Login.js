import { useState, useRef } from 'react';
import {
  Card,
  CardContent,
  Divider,
  OutlinedInput,
  Button,
  CardActions,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = (props) => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const inputRef = useRef(null);

  const onChangeHandler = (event) => {
    setValues(event.target.value);
    inputRef.current.value = event.target.value;
  };

  const onClickShowPasswordHandler = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const onMouseDownPasswordHandler = (event) => {
    event.preventDefault();
  };

  const onClickHandler = () => {
    inputRef && props.onLogin(inputRef.current.value);
  };
  return (
    <Card width="100%">
      <CardContent>
        <Divider variant="middle" textAlign="left">
          Password
        </Divider>
        <OutlinedInput
          id="outlined-password-input"
          label="Password"
          type={values.showPassword ? 'text' : 'password'}
          size="small"
          autoComplete="current-password"
          value={values.password}
          onChange={onChangeHandler}
          ref={inputRef}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onClickShowPasswordHandler}
                onMouseDown={onMouseDownPasswordHandler}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
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
