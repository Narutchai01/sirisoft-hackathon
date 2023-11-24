import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Nav = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: "10px"
    }));

    const Icons = styled(Box)(({ theme }) => ({
        backgroundColor: "white"
    }));

  return (
    <>
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6'>
                    MallMap
                </Typography>
                <Search>search</Search>
                <Icons>icons</Icons>
                
            </StyledToolbar>
        </AppBar>
    </>
  )
}

export default Nav