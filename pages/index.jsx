import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hoodie from "../modelsJS/HoodieJS";

export default function Home() {
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
            <directionalLight intensity={2}/>
            <Suspense fallback={null}>
              <Hoodie position={[0, -0.2, -0.8]} />
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
          <div className={styles.colorSpanRed}></div>
          <div className={styles.colorSpanBlue}></div>
          <div className={styles.colorSpanBlack}></div>
          <div className={styles.colorSpanWhite}></div>
        </div>
      </section>
    </main>
  );
}
