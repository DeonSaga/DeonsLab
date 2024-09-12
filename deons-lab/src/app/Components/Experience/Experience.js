import React from "react";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";

const Experience = () => {
  const Skills = [
    {
      title: "NextJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "React",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "ThreeJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Photoshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const Experiences = [
    {
      position: "International Baccalaureate Diploma",
      startDate: "Sep 2017",
      endDate: "July 2019",
      company: "",
    },
    {
      position: "BA Creative Computing",
      startDate: "Sep 2021",
      endDate: "July 2023",
      company: "University Of Leicester",
    },
    {
      position: "Freelance Developer / Designer",
      startDate: "April 2024",
      endDate: "Present",
    },
  ];

  return (
    <section id="experience" className="strip">
      <Grid container spacing={4} columns={{ xs: 1, sm: 8, md: 12 }}>
        <Grid item size={{ xs: 2, sm: 2, md: 6 }}>
          <Stack>
            <h1 className="sectionTitle">Skills & Experience</h1>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <h3>Skills</h3>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
            >
              {Skills.map((e, index) => (
                <Grid key={index} size={{ xs: 1, sm: 4, md: 4 }}>
                  <SkillCard index={index} info={e}></SkillCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
        <Grid item size={{ xs: 2, sm: 2, md: 6 }}>
          <div>
            <h2>Experience</h2>
            <table style={{ width: "100%" }}>
              {Experiences.map((e, index) => (
                <ExperienceEntry info={e} key={index} />
              ))}
            </table>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Experience;

const SkillCard = ({ info }) => {
  return (
    <div className="card">
      <h4>{info.title}</h4>
    </div>
  );
};

const ExperienceEntry = ({ info }) => {
  return (
    <tr style={{ display: "inline-flex", alignItems: "center", width: "100%" }}>
      <h3>
        {info.startDate}-{info.endDate}
      </h3>
      <div style={{ lineHeight: "normal" }}>
        <h3>{info.position}</h3>
        <p style={{ fontSize: "smaller" }}>{info.company}</p>
      </div>
    </tr>
  );
};
