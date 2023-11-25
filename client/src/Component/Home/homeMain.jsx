// import * as React from "react";
import Grid from "@mui/material/Grid";
// import HomeContent from "./HomeContent";
// import MallData from "../Data/MallData.js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeMain() {
    const getMallData = mallDataObj => {
        return (
            <Grid item xs={4}>
                <HomeContent {...mallDataObj}/>
            </Grid>
        );
    }
    return (
        <Grid container direction="column" spacing={3}>  
            {MallData.map(mallDataObjl => getMallData(mallDataObjl))}
        </Grid>
    );
}
