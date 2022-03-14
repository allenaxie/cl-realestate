import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import classes from './Navbar.module.scss';
import { useRouter } from 'next/router';



const pages = [
  {
    label:'About',
    key:'about-me'
  }, 
  {
    label: 'Properties', 
    key: 'properties',
  },
  {
    label: 'Reviews', 
    key: 'reviews',
  },
  {
    label: 'Contact',
    key: 'contact-me',
  }
];

const Navbar = () => {

  const router= useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (evt) => {
    evt.preventDefault();
    let key = evt.target.innerText.toLowerCase()
    const location = document.getElementById(`${key}`)?.offsetTop;

    window.scrollTo({
      left:0,
      top: location - 70,
    })
    setAnchorElNav(null);
  };

  return (
    <AppBar 
    className={classes.appbar}
    position="static">
      <Container 
      className={classes.container}
      maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="#home" className={classes.logo}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              className={classes.logo}
            >
              LOGO
            </Typography>
          </Link>

          {/* burger menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                key={page.key} 
                onClick={handleCloseNavMenu}
                >
                    <Typography 
                    textAlign="center"
                
                    >{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        <Link href="#home">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
              LOGO
            
          </Typography>
        </Link>

                {/* normal nav bar */}
          <Box 
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          className={classes.menuItemContainer}
          >
            {pages.map((page) => (
                <Button
                  key={page.key}
                  onClick= {(evt) => handleCloseNavMenu(evt)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  className={classes.menuItem}
                >
                  {page.label}
                </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
