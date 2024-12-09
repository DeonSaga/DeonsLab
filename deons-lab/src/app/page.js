"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.scss";
import "./globals.css";
import { Canvas, extend } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

import {
  EffectComposer,
  Vignette,
  Noise,
  DepthOfField,
  DotScreen,
  Scanline,
} from "@react-three/postprocessing";
import React, {
  Suspense,
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  MeshReflectorMaterial,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Backdrop,
  Extend,
  useThree,
  Stage,
  Environment,
  Float,
} from "@react-three/drei";
import { DesktopModel } from "./Components/Desktop";
import { BlendFunction } from "postprocessing";
import Projects from "./Components/Projects/Projects";
import NavBar from "./Components/NavBar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";

const Home = () => {
  //const sunset = new THREE.Color("var(--sunset)").convertSRGBToLinear;

  const [cam, setCam] = useState();
  const [camLoaded, setCamLoaded] = useState(false);
  const [targetPosition, setTargetPosition] = useState([5, 5, 5]);
  const [targetRotation, setTargetRotation] = useState([-0.54, 0.7088, 0.372]);
  const [page, setPage] = useState("Default");

  const homeSec = useRef();
  const aboutSec = useRef();
  const servicesSec = useRef();
  const contactSec = useRef();
  const projSec = useRef(null);

  const changePage = (e) => {
    setPage(e);

    switch (e) {
      case "Projects":
        console.log(projSec.current);
        projSec.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "Services":
        console.log(servicesSec.current);
        servicesSec.current?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "Home":
        homeSec.current.scrollIntoView({ behavior: "smooth", block: "start" });

        break;

      case "About":
        aboutSec.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case "Contact":
        contactSec.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      default:
        break;
    }
  };
  const projects = () => {
    changePage("Projects");
  };

  return (
    <main>
      <NavBar callback={(e) => changePage(e)} />
      <Suspense fallback={<Loading />}>
        <About ref={homeSec} cta={() => changePage("Contact")} />
        {/* <section
          id="about"
          ref={aboutSec}
          className="strip alt"
          style={{ paddingBottom: "0rem" }}
        >
          <h1 className="sectionTitle">About me</h1>
        </section> */}
        {/* <Services ref={servicesSec} /> */}
        <Experience ref={aboutSec} />
        <Projects ref={projSec} />
        <Contact ref={contactSec} />
      </Suspense>
      <section
        id="footer"
        className="strip dark"
        style={{ backgroundColor: "#212121", minHeight: "20vh" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            margin: "auto",
          }}
        >
          <p>Thanks for Viewing</p>
          <h4>By Gideon Coker, 2024</h4>
        </div>
      </section>
    </main>
  );
};

export default Home;

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        display: "flex",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: "auto" }}>Loading...</h1>
    </div>
  );
};
