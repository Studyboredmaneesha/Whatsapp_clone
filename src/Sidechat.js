import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { useStateValue} from "./StateProvider";
import { SearchOutlined } from '@material-ui/icons';
import "./Csearchs.css";


const drawerWidth = 1;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'left',
    
    width:"10",
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    backgroundColor:"green",
    
    
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
    marginRight: "0",
    
  },
}));

export default function Sidechat() {
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
    <div className>
      
      <Typography
        position="fixed"
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
           
          </IconButton>
          <Typography variant="h6" >
          
             
            Search Messages
          </Typography>
          

        </Toolbar>
        
        
               
      </Typography>
      
      
      <Toolbar>
      <SearchOutlined/>
      <h6>Search messages here</h6>
      </Toolbar>

      
     
      <div className="csearch_head">
      

      </div>
     
      
     
     
      
    </div>
  );
}
