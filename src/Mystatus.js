import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import Progress from "./Progress";
import { Avatar, Button} from '@material-ui/core'
import "./Mystatus.css"
import { useStateValue} from "./StateProvider";
import ClearIcon from '@material-ui/icons/Clear';
const drawerWidth = 1;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'right',
    
    width:"10",
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    backgroundColor:"black",
    
    
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'flex',
  },
  drawer: {
    width: "5",
    height: "5",
    flexShrink: 10,
    
  },
  drawerPaper: {
    width: "5",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'right',
    padding: theme.spacing(10, 10),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
    width:"1",
    padding: "50"
  },
  content: {
    
    flexGrow: 20,
    padding: theme.spacing(20),
    alignItems:"right",
    width:"1"
    
    
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: "30",
    
  },
}));

export default function Mystatus() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [{ user }, dispatch] = useStateValue();

  return (
   
    <div className="mystatus__app">
      
      
      <AppBar
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onDoublelick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Avatar src={user?.photoURL}
               />
          </IconButton>
          <Typography variant="h6" >
          
             
            My Status
            <IconButton>
              <Progress/>
            </IconButton>
          </Typography>
          <div  className="progress">
      <ClearIcon/>
    </div>
          
          

          
        </Toolbar>
       
        
        
               
      </AppBar>
      <Button>

</Button>

      
      
      
        
        

     
      
    </div>
    
  );
}
