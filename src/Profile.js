import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Typography } from '@material-ui/core';

 import "./Csearch.css";
 import "./Profile.css"
 import CreateIcon from '@material-ui/icons/Create';
 import { useStateValue} from "./StateProvider";
 import { Avatar} from '@material-ui/core';
 import IconButton from '@material-ui/core/IconButton';
const StyledMenu = withStyles({
  paper: {
    border: '#d3d4d5',
    display: "flex",
    
    width: "100ch",
    height:"100ch"
   
  },
})((props) => (
  <Menu
    elevation={15}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    {...props}
  />
  
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
      display:"flex"
    },
  },
}))(MenuItem);


export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="profilehead">
      
      <IconButton
        
       
        color="white"
        onClick={handleClick}
        
      > 
      <div className="profilepic">
        <Avatar src={user?.photoURL}
               />
             

      </div>
        
             
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
            <div className="profile">
                
                
                <StyledMenuItem color='primary' align='inherit'>
            <Typography align=''>
            
        <h1>Profile</h1>
        
            </Typography>
           
             </StyledMenuItem>
           
              </div>
        
                 <div className="profile__search">
            <Typography>
              <Button size="large">
              <Avatar  src={user?.photoURL}
               />
              </Button>
            
              
            </Typography>
        
            </div>
            <div className="profile__searchs">
            <Typography >
            
            
               <h2 >Your name</h2>
               <div>
                 
               <text type='text'>
               <div className="createicon">
               <CreateIcon />
               </div>
               
               </text>
               
              

               </div>
              
               
           
            </Typography>
           
           
           
        
            </div>
            <div className="about">
            <Typography>
              <h2>About</h2>
              <CreateIcon />
            </Typography>
          
            </div>
         
          
        <StyledMenuItem>
          
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
