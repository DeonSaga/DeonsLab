"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.scss";
import "./globals.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

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
  Stage,
  Environment,
  Float,
} from "@react-three/drei";
import { DesktopModel } from "./Components/Desktop";

const Home = () => {
  //const sunset = new THREE.Color("var(--sunset)").convertSRGBToLinear;

  const [cam, setCam] = useState();
  const [camLoaded, setCamLoaded] = useState(false);
  const [targetPosition, setTargetPosition] = useState([5, 5, 5]);
  const [targetRotation, setTargetRotation] = useState([-0.54, 0.7088, 0.372]);

  const camAnim = async () => {
    if (camLoaded !== true) {
      setCamLoaded(true);
      console.log("resolved", cam.current);
    }
  };

  const projects = () => {
    console.log("switching to projects");
    setTargetPosition([5, 3, 5]);
    setTargetRotation([-0.1769, 0.2494, 0.0441]);
  };
  useEffect(() => {
    if (cam) {
      let ctx = gsap.context(() => {
        gsap.to(cam.rotation, {
          duration: 2,
          ease: "power4.out",
          x: targetRotation[0],
          y: targetRotation[1],
          z: targetRotation[2],
        });
        gsap.to(cam.position, {
          duration: 2,
          ease: "power4.out",
          x: targetPosition[0],
          y: targetPosition[1],
          z: targetPosition[2],
        });

        console.log(cam);
      });
    }

    // return () => {
    //   ctx.revert();
    // };
  }, [cam, targetPosition]);

  return (
    <div className="main">
      <Suspense fallback={<Loading />}>
        <Canvas
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
        >
          <hemisphereLight
            position={[0, 50, 0]}
            intensity={2}
            color="#cbbeb9"
            groundColor="#624cab"
          />
          <color attach="background" args={["#2b2c28"]} />
          <axesHelper args={[5]} />
          {/* <Environment
            files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
            background
            blur={1}
          /> */}
          {/* <OrbitControls /> */}
          <Suspense>
            <PerspectiveCamera
              makeDefault={true}
              far={200}
              ref={setCam}
              position={[9, 5, 5]}
              rotation={[0, 0, 0]}
            />
          </Suspense>

          <Float>
            <Stars radius={80} depth={20} count={500} factor={2} speed={1} />
          </Float>

          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
          >
            <ambientLight intensity={2} />

            <planeGeometry args={[1000, 1000]} />
            <MeshReflectorMaterial
              roughness={1}
              color="#9fa4c4"
              blur={[100, 100]}
              mixBlur={0.8}
              mixStrength={1}
              resolution={1024}
              metalness={0.1}
            />
          </mesh>
          <DesktopModel goToProjects={projects} />

          <directionalLight intensity={0.56} />

          <fog attach="fog" args={["#2b2c28", 12, 60]} />
          {/* <Stage
            adjustCamera
            intensity={1}
            shadows="contact"
            environment="city"
          >
            {" "}
           
          </Stage> */}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Home;

const Loading = () => {
  return (
    <div
      style={{
        width: "20%",
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
