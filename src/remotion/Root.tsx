import { Composition } from "remotion";
import { NecklaceScroll } from "./compositions/NecklaceScroll";

export const RemotionRoot = () => {
  return (
    <Composition
      id="NecklaceScroll"
      component={NecklaceScroll}
      durationInFrames={360}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
