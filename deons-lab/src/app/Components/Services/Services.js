import { Stack } from "@mui/material";
import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid2";

const Services = forwardRef(({}, ref) => {
  const list = [
    {
      title: "Websites / Web Apps",
      description:
        "Need I website for your business or a place to show off your services, I've got you covered. With my experience in different front-end and back-end services, I'll be able to deliver a site that meets your needs ",
    },
    {
      title: "Unique Visual Themes",
      description:
        "If I have one talent, its my flare for artistic style and aesthetics, which I incorporate into all my projects from Logo's to websites. A good visual style can leave a long lasting impression and thats what I strive for",
    },
    {
      title: "Graphic Design",
      description:
        "Years of experience creating graphic as both a freelancer and for personal projects. Logos, Mock-Ups, Apparal, Thumbnails, Flyers and Magazines. I've done them all",
    },
    {
      title: "Custom Illustrations",
      description:
        "I'm more than just good with a pencil, with years of experience with digital art, If you're project requires illustration of any kind from anime characters to corporate drawings then you've come to the right place",
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
