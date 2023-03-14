import { OrbitControls, ScrollControls } from "@react-three/drei";
// import { Office } from "./Office";
// import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <OrbitControls  />
    <mesh>
        <boxGeometry />
        <meshNormalMaterial />
    </mesh>
    </>
  );
};
