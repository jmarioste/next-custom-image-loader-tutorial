import type { NextPage } from "next";
import Image from "next/image";
import MyImage from "../components/MyImage";

const Home: NextPage = () => {
  const src =
    "https://cdn.pixabay.com/photo/2022/12/12/17/05/elephants-7651446_960_720.jpg";
  return (
    <div>
      <main>
        <p>With custom loader</p>
        <div style={{ position: "relative", width: "50%", paddingTop: "100%" }}>
          <MyImage
            src={src}
            fill
            style={{ objectFit: "cover" }}
            alt="elephant image"
          />
        </div>
        <p>Default image</p>
        <div style={{ position: "relative", width: "50%", paddingTop: "100%" }}>
          <Image
            src={src}
            fill
            style={{ objectFit: "cover" }}
            alt="elephant image"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
