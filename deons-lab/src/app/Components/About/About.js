"use client";

import { Stack } from "@mui/system";
import Grid from "@mui/material/Grid2";
import React, { useState, useEffect, Suspense, forwardRef } from "react";

const About = forwardRef(({}, ref) => {
  return (
    <section id="about" ref={ref} className="strip">
      <Grid container lg={12} spacing={4} columns={{ xs: 1, sm: 2, md: 12 }}>
        <Grid item size={6}>
          <Stack>
            <div className="headerTitle">
              <h2>A Full Stack Creative</h2>
            </div>

            <h3 style={{ fontWeight: "normal" }}>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              helping to bring your visions to life
            </h3>
            <button style={{ width: "fit-content" }}>Lets Talk!</button>
          </Stack>
        </Grid>
        <Grid item size={6}>
          <div
            style={{
              backgroundColor: "rgba(180,0,255,0.2)",
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <h3 style={{ margin: "auto" }}>Image Here</h3>
          </div>
        </Grid>
      </Grid>
    </section>
  );
});

About.displayName = "AboutComponent";

export default About;
