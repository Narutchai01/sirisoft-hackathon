import React from 'react'
import { Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'
import LocationInput from '../Component/Plan/LocationInput'
import ResultMap from '../Component/Map/ResultMap'

const Box = styled('div') ({
  border: '1px solid #C4C4C4',
  borderRadius: '10px',
  padding: '35px 20px'
})

const Plan = () => {
  return (
    <>
      <Grid container direction="column" style={{ minHeight: '100vh', marginTop: '20px' }}>
        <Grid item container alignItems="center" justifyItems="center" spacing={2}>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={9}>
            <Typography item variant="h5" fontWeight={{ fontWeight: 'bold' }} gutterBottom margin={0}>
              Plan Your Trip     
            </Typography>

            <br /><hr /><br />

            <Box>
              <Typography item variant="h6" fontWeight={{ fontWeight: 'bold' }} margin={0}>
                Enter locations  
              </Typography>
              <br />
              <LocationInput />
              <br />

              <ResultMap />
            </Box>
          </Grid>
          <Grid item xs={1.5}></Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Plan