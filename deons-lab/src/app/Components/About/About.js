"use client";

import { Stack } from "@mui/system";
import Grid from "@mui/material/Grid2";
import React, { useState, useEffect, Suspense, forwardRef } from "react";

const About = forwardRef(({}, ref) => {
  return (
    <section
      id="home"
      ref={ref}
      className="strip"
      style={{ paddingBottom: "0rem" }}
    >
      <Grid container lg={12} spacing={4} columns={{ xs: 1, sm: 2, md: 12 }}>
        <Grid item size={6}>
          <Stack>
            <div className="headerTitle">
              <h2>Programmer & Creative</h2>
            </div>

            <h3 style={{ fontWeight: "normal" }}>
              My name is Gideon but I often go by Deon. I'm an ambitious
              graduate looking to create and work on projects that leave a
              lasting and impactful impression.
            </h3>
            <span style={{ height: "1rem" }}></span>
            <button style={{ width: "fit-content" }}>Lets Talk!</button>
          </Stack>
        </Grid>
        <Grid item size={6}>
          <div
            style={{
              width: "100%",
              height: "760px",
              position: "relative",
              display: "block",
            }}
          >
            <img className="headerImage" src="/Artworks/deon.png" />
            <img
              className="headerImage animate-horizontal animate-tilt-shake-alt"
              src="/Artworks/Exp.png"
            />
            <img className="headerImage " src="/Artworks/Eyes.png" />
            <img
              className="headerImage animate-horizontal animate-tilt-shake"
              style={{ translate: "-7.5% 3%", zIndex: 15 }}
              src="/Artworks/lightning.png"
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
});

About.displayName = "AboutComponent";

export default About;
