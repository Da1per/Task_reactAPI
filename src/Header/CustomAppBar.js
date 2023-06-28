
import * as React from 'react';
import { AppBar ,Count } from 'react-admin';
import { Box } from '@mui/material';
import "../css/appBar.css"


function CustomAppBar(props ) {
    return (
        <AppBar
        sx={{padding:'0 0 0 1.11%',backgroundColor:'#ffffff','& .RaAppBar-menuButton':{display:"none"},boxShadow:'none',color:'#000000'}}
        {...props}>
            <Box sx={{width:'100%',display:'flex'}}>
                <Box  sx={{width:'17.15%',display:'felx',borderRight:'1px solid #E7E8EF'}}>
                    <h2 className='header_logo'>LOGO</h2>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',paddingLeft:'2.02%', width:'82.5%', borderBottom:'1px solid #E7E8EF'}} >
                    <h2>Total <Count resource="contacts" filter={{ is_published: true }}/></h2>
                </Box>
            </Box>
        </AppBar>
    );
};

export default CustomAppBar;
