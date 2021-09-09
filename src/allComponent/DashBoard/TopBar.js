import React, { useContext } from 'react';
import topAvatar from '../Images/yoga.jpg';
import img from "../Images/yoga.jpg";
import { ButtonToolbar, Dropdown } from 'rsuite';

import { userContext } from '../../App';
import Login from '../Manager/Login';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const TopBar = () => {

  const [loogedInUser, setLoggedInUser] = useContext(userContext);
   const isSignedIn = loogedInUser.isSignedIn;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
    return (
        <div className="shadow-shadow1 fixed w-full bg-gray z-40">
           <div class="w-full flex py-1 px-3 md:py-3 md:px-14 justify-between ">
               <div class="text-lg md:pt-1 md:pl-14 font-bold text-darkColor ">    
                <Link to="/Explore"> <h3>WellnessCenter</h3>  </Link>               
               </div>
              
               {isSignedIn?
               <div>
               <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    class="bg-mainColorLight p-1 rounded-md px-2 "
                    >
                   {loogedInUser.name} <i class='bx bx-chevron-down font-semibold'></i>
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                

               </div> : <Link to='/login'><Button class="bg-mainColorLight px-4 py-2 font-semibold rounded-md shadow-md">Login</Button></Link>
               }
           </div>           
        </div>
    );
};

export default TopBar;