
import { Resource, useAuthenticated} from 'react-admin'
import { Title, useGetList,Login} from 'react-admin';
import './css/Loign.css'
import imgAvatars from "./img/Reg_Back.png"
import * as React from 'react';
import { useState } from 'react';
import {Button,FormControl,Input,OutlinedInput,InputLabel,InputAdornment,IconButton,Box,Grid} from '@mui/material'
import { useLogin, useNotify, Notification  } from 'react-admin';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function AuthPage() {
 
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = e => {
      e.preventDefault();
      login({ email, password }).catch(() =>
          notify('Invalid email or password')
      );
  };
    return (
      <div className='login'>
        <Grid  container spacing={2}>
          <Grid item xs={6}>
        <form> 
          <Box sx={{ display: 'flex',padding:'114px 30% 10% 112px', flexDirection:'column',backgroundColor:'#ffffff'}}>
            <Box>
              <h2 className='login_title'>Login to lorem ipsum</h2>
              <p className='login_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt</p>
            </Box>
            <FormControl>
              <h3 className='login_label_emaill'>Emaill</h3>
              <OutlinedInput
                sx={{height:'48px',width:'384px',borderRadius:'8px'}}
                placeholder="Enter your email"
                value={email}
                type="email"
                source="email"
                required
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <h3 className='login_label_password'>Password</h3>
              <OutlinedInput
                sx={{height:'48px',width:'384px',borderRadius:'8px'}}
                placeholder="Enter your password"
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton  
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl> 
            <FormControl>
              <Button variant="contained" sx={{marginTop:'20%',height:'48px',width:'384px',backgroundColor:'#3626A7',borderRadius:'8px'}}  onClick={handleSubmit}>Login</Button>
            </FormControl>
          </Box>
        </form>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{backgroundColor:'#F5F6F9',padding:"55px 20px 0 70px"}}>
                <img src={imgAvatars} alt='avatars'/>
                <Box sx={{padding:'0px 88px 64px 0'}}>
                  <h2 className='login_under_title'>LOGO</h2>
                  <h2 className='login_under_subtitle'>Lorem ipsum dolor sit amet consectetur adipiscing elit</h2>
                </Box>
            </Box>
          </Grid>        
        </Grid>
      </div>
    );
};

export default AuthPage;
