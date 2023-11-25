import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import MallSearch from './Search/MallSearch';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

const pages = [
    { name: 'HOME', path: '/', id: '0' },
    { name: 'PLAN', path: '/plan', id: '1' },
    { name: 'MINIGAME', path: '/minigame', id: '2' },
    { name: 'PROMOTION', path: '/coupon', id: '3' },
]

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
}));

export default function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchor, setAnchor] = React.useState(null);
    const [mallSearch, setMallSearch] = React.useState('');
    const [isSearchFocused, setIsSearchFocused] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleClickSearch = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
        setIsSearchFocused(true);
    };
    
    const handleSearchBlur = () => {
        setIsSearchFocused(false);
    };
    
    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
    <>
        <AppBar position="sticky">
            <Toolbar>
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
                            <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>
                                    <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {page.name}
                                    </Link>
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    MallMap
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        value={mallSearch}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => setMallSearch(e.target.value)}
                        onClick={handleClickSearch}
                        onFocus={handleClickSearch}
                        onBlur={handleSearchBlur}
                    />
                    
                    {isSearchFocused && (
                        <BasePopup id={id} open={isSearchFocused} anchor={anchor} style={{ zIndex: 9999 }}>
                            <MallSearch mallSearch={mallSearch} />
                        </BasePopup>
                    )}
                </Search>          
                <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            variant="text"
                            key={page.id}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {page.name}
                            </Link>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    </>
    );
}