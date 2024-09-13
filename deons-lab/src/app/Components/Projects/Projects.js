"use client";

import React, { useState, useEffect, Suspense } from "react";
import { forwardRef } from "react";
import Gallery from "../Gallery";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReactMarkdown from "react-markdown";
import { getApiLink } from "@/app/Hooks/useApi";
import { Markup } from "interweave";
import ReactImageGallery from "react-image-gallery";

const Projects = forwardRef(({}, ref) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelected] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      let results = [];
      results.push({
        original: selectedProject.Cover.data.attributes.url,
        thumbnail: selectedProject.Cover.data.attributes.formats.thumbnail.url,
      });
      if (selectedProject.Media.data) {
        selectedProject.Media.data.map((e, index) => {
          results.push({
            original: e.attributes.formats.medium.url,
            thumbnail: e.attributes.formats.thumbnail.url,
          });
        });
      }

      setImages(results);
    }
  }, [selectedProject]);

  const fetchData = async () => {
    fetch(getApiLink() + "/api/portfolio-projects?populate=deep", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.data);
        console.log(data.data);
      });
  };

  const changeProject = (e) => {
    console.log(e);
    setSelected(e.attributes);
  };

  const closeProjects = (e) => {
    e.preventDefault();
    e.stopPropogation();
    setSelected(null);
  };
  return (
    <section id="projects" ref={ref} className="strip alt">
      <h1 className="sectionTitle">Latest Projects</h1>
      <div className="overlay">
        <Suspense fallback={<Loading />}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {projects.map((e, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <ProjectEntry
                  info={e.attributes}
                  callback={() => changeProject(e)}
                />
              </Grid>
            ))}
          </Grid>
        </Suspense>
      </div>
      {selectedProject ? (
        <div className="projectView">
          <div className="projectViewContainer">
            <div className="projectViewMedia">
              {/* <img
                src={
                  selectedProject.Cover.data
                    ? selectedProject.Cover.data.attributes.url
                    : "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg"
                }
              /> */}
              {images ? <ReactImageGallery items={images} /> : ""}
            </div>
            <div className="projectViewInfo">
              <button onClick={() => setSelected(null)}>
                <h2>Back</h2>
              </button>

              <div className="cardBorder">
                <h2>Project Name:</h2>
                <h1 className="sectionTitle">{selectedProject.Title}</h1>
              </div>
              <div className="cardBorder">
                <h1>Description:</h1>
                <Markup content={selectedProject.Description}> </Markup>
              </div>

              <div
                className="cardBorder"
                style={{
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <h1>Tools Used:</h1>

                <div
                  style={{
                    display: "inline-flex",
                    gap: "0.5rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {selectedProject.tools.data.map((e, index) => (
                    <div className="card">
                      <h4 key={index}>{e.attributes.Name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;

const Loading = () => {
  return <div>Loading</div>;
};
const ProjectEntry = ({ info, callback }) => {
  const [categories, setCategories] = useState("Coding,Web");

  useEffect(() => {
    let results = "";
    info.Categories.data.map((e, index) => {
      index > 0
        ? (results += "/" + e.attributes.name)
        : (results += e.attributes.name);
    });
    setCategories(results);
  }, []);

  return (
    <div className="card projectCard" onClick={callback}>
      <div className="projectImg">
        <img
          src={
            info.Cover.data
              ? info.Cover.data.attributes.url
              : "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg"
          }
        />
      </div>
      <div className="projectInfo">
        <h2>{info.Title}</h2>
        <span>{categories}</span>
        <a href={info.Link} target="_blank">
          <ArrowForwardIcon />
        </a>
      </div>
    </div>
  );
};

const ProjectDisplay = ({ info, index }) => {
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg",
    },
  ];

  return (
    <div className="card">
      <div
        style={{ display: "inline-flex", alignItems: "center", gap: "1rem" }}
      >
        <h1 className="projectTitle">{info.title}</h1>
        <h3>{info.category}</h3>
      </div>

      <h4>{info.description}</h4>

      <h3>{info.tools}</h3>
      {/* <Gallery media={images} /> */}
    </div>
  );
};
