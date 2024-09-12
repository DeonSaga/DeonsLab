import { Stack } from "@mui/material";
import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid2";

const Services = forwardRef(({}, ref) => {
  const list = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "SEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Content Writing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Custom Illustrations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section id="services" ref={ref} className="strip alt">
      <h1 className="sectionTitle">Services I Offer</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {list.map((e, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <ServiceCard index={index} info={e}></ServiceCard>
          </Grid>
        ))}
      </Grid>
    </section>
  );
});

Services.displayName = "Services";

export default Services;

const ServiceCard = ({ info, index }) => {
  return (
    <div className="serviceCard">
      <Stack>
        <h1>{index + 1}</h1>
        <h2>{info.title}</h2>
        <p>{info.description}</p>
        <div>{info.icon}</div>
      </Stack>
    </div>
  );
};
