import styles from "../styles/Home.module.css";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hoodie from "../modelsJS/HoodieJS";

export default function Home() {
const [colorInput, setColorInput] = useState("#ffffff")


// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [colorInput])

  return (
    <main className={styles.container}>
      <section>
        <div className={styles.hoodieShow}>
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15, rotation: Math.PI }}
            style={{
              backgroundColor: "#6F7378",
              width: "30vw",
              height: "60vh",
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={2} />
            <Suspense fallback={null}>
              <Hoodie hoodieColor = {colorInput} position={[0, -0.2, -0.8]} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </section>

      <section className={styles.controlsSection}>
        <input
          className={styles.promptInput}
          type="text"
          placeholder="Type your prompt here..."
        />
        {/* <div className={styles.promptImgDiv}>
          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>

          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>
          <div className={styles.promptImg}></div>

        </div> */}
        <button className={styles.buyNowBtn}>Buy now</button>

        <div className={styles.colorSpanDiv}>
          <input value={colorInput} onChange={(e)=>{setColorInput(e.target.value)}} type="color" name="" id="" />
        </div>
      </section>
    </main>
  );
}
