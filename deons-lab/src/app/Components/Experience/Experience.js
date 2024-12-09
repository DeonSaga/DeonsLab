import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";
import StackIcon from "tech-stack-icons";

const Experience = forwardRef(({}, ref) => {
  const Skills = [
    {
      title: "NextJS",
      id: "nextjs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "React",
      id: "reactjs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "ThreeJS",
      id: "threejs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Photoshop",
      id: "ps",
    },

    {
      title: "Tailwind",
      id: "tailwindcss",
    },
    {
      title: "Affinity",
      id: "affinitydesigner",
    },
    {
      title: "MongoDB",
      id: "mongodb",
    },
    {
      title: "Type Script",
      id: "typescript",
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
    <section id="about" className="strip alt" ref={ref}>
      <Grid container spacing={4} columns={{ xs: 1, sm: 8, md: 6 }}>
        <Grid item size={{ xs: 2, sm: 2, md: 3 }}>
          <Stack>
            <h1 className="sectionTitle">About Me</h1>
            <p>
              An ambitious individual with strong technical and creative
              abilities demonstrated through various technical and non-technical
              projects. Quick learner with a good understanding of software
              engineering practices. Well-versed in various and diverse
              software. Always looking for opportunities to apply my creative
              thinking to a project that leaves an impact.
            </p>
          </Stack>
        </Grid>
        <Grid item size={{ xs: 2, sm: 2, md: 3 }}>
          <h1>I have experience with:</h1>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 2, sm: 2, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Skills.map((e, index) => (
              <Grid item key={index} size={{ xs: 1, sm: 1, md: 1 }}>
                {e.id !== null ? (
                  <SkillCard index={index} info={e}></SkillCard>
                ) : (
                  ""
                )}
              </Grid>
            ))}
          </Grid>
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
});

Experience.displayName = "Experience";

export default Experience;

const SkillCard = ({ info }) => {
  return (
    <div className="card" style={{ width: "64px", height: "64px" }}>
      <StackIcon name={info.id} />
      {/* <h4>{info.title}</h4> */}
    </div>
  );
};

const ExperienceEntry = ({ info }) => {
  return (
    <tr
      style={{
        display: "inline-flex",
        width: "100%",
        minHeight: "3rem",
        alignItems: "center",
      }}
    >
      <div>
        <h3>
          {info.startDate}-{info.endDate}
        </h3>
      </div>

      <div style={{ lineHeight: "normal", display: "inline-block" }}>
        <h3>{info.position}</h3>
        <p style={{ fontSize: "smaller" }}>{info.company}</p>
      </div>
    </tr>
  );
};
