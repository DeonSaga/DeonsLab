"use client";

import React, { useState, useEffect, Suspense } from "react";
import ResponsiveGallery from "react-responsive-gallery";
import Gallery from "../Gallery";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelected] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(
      "https://eu-west-2.aws.data.mongodb-api.com/app/data-svhrr/endpoint/getActiveProjects",
      { headers: { "Content-Type": "application/json" }, method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  };

  const changeProject = (e) => {
    console.log(e);
    setSelected(e);
  };

  return (
    <div className="overlay">
      <Suspense fallback={<Loading />}>
        {selectedProject === null ? (
          <>
            {projects.map((e, index) => (
              <ProjectEntry
                info={e}
                key={index}
                callback={() => changeProject(index)}
              />
            ))}
          </>
        ) : (
          <>
            <ProjectDisplay info={projects[selectedProject]} />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default Projects;

const Loading = () => {
  return <div>Loading</div>;
};
const ProjectEntry = ({ info, callback }) => {
  return (
    <div className="projectEntry" onClick={callback}>
      <h1 className="projectTitle">{info.title}</h1>
      <h3>{info.category}</h3>
      <h3>{info.tools}</h3>
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
    <div className="projectEntry" style={{ lineHeight: "0.3rem" }}>
      <h1 className="projectTitle">{info.title}</h1>
      <h4>{info.description}</h4>
      <h3>{info.category}</h3>
      <h3>{info.tools}</h3>
      <Gallery media={images} />
    </div>
  );
};
