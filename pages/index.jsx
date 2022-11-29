import styles from "../styles/Home.module.css";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hoodie from "../modelsJS/HoodieJS";
import Model from "../modelsJS/HoodieEdit12";
import { Configuration, OpenAIApi } from "openai";

export default function Home() {
  const [imgURL, setImgURL] = useState("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80");

  async function getImage() {
    const configuration = new Configuration({
      organization: "org-xGy6AvrPDx1InG5KIp5oHpLO",
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: "a white siamese cat",
      n: 1,
      size: "512x512",
    });

    let image_url = response.data.data[0].url;

    setImgURL(image_url);
    return image_url;
  }
  const [colorInput, setColorInput] = useState("#ffffff");

  return (
    <main className={styles.container}>
      <section>
        <div className={styles.hoodieShow}>
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 5, rotation: Math.PI }}
            style={{
              backgroundColor: "white",
              width: "30vw",
              height: "60vh",
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={2} />
            <Suspense fallback={null}>
              <Hoodie img={imgURL} hoodieColor={colorInput} position={[0, -0.2, -0.8]} />
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
        <button onClick={getImage} className={styles.buyNowBtn}>
          Buy now
        </button>
<img src={imgURL ? imgURL : ""} alt="" />
        <div className={styles.colorSpanDiv}>
          <input
            value={colorInput}
            onChange={(e) => {
              setColorInput(e.target.value);
            }}
            type="color"
            name=""
            id=""
          />
        </div>
      </section>
    </main>
  );
}
