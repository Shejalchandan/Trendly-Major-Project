import { getUser } from '../../Redux/Auth/Action';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import react,{ useState } from "react";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Import additional icons
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { deepPurple } from '@mui/material/colors';

// Define Search styled component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

// Define SearchIconWrapper styled component
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Define StyledInputBase styled component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AdminNavbar({ handleSideBarViewInMobile }) {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.auth.user);
  const [open, setOpen] = useState(false);
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    // Fetch the user's profile when the component mounts
    dispatch(getUser(localStorage.getItem("jwt"))); // Assuming you have stored the JWT token in localStorage
  }, [dispatch]);
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
      {/* <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem> */}

       <MenuItem onClick={() => setOpen(false)}>Profile Details</MenuItem>
      <MenuItem onClick={() => setOpen(false)}>
        Email: {auth.user?.email}
      </MenuItem>
      <MenuItem onClick={() => setOpen(false)}>
        First Name: {auth.user?.firstName}
      </MenuItem>
      <MenuItem onClick={() => setOpen(false)}>
        Last Name: {auth.user?.lastName}
      </MenuItem>
      {/* Omit password display */}
  
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + isLargeScreen, backgroundColor: 'rgb(0, 0, 22)' }}>
        <Toolbar>
          {!isLargeScreen && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleSideBarViewInMobile}
          >
            <MenuIcon />
          </IconButton>}
          <Avatar src="https://png.pngitem.com/pimgs/s/425-4257507_gnostic-symbols-hd-png-download.png" alt="Trendly" />
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}

<Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                         {`${(auth.user?.firstName[0] || '').toUpperCase()}${(auth.user?.lastName[0] || '').toUpperCase()}`}
                        {/* {auth.user?.firstName[0].toUpperCase()} */}
                      </Avatar>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          {renderMobileMenu}
          {renderMenu}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
