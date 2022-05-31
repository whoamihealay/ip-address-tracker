import { Image } from "./styles";
import { Map } from ".";
import { ApiLocation } from "../interfaces";

interface IProps {
  location: ApiLocation;
  loading: boolean;
}

const Background = ({ location, loading }: IProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: -1000,
      }}
    >
      <Image src="/assets/pattern-bg.png" alt="" />
      {!loading && <Map location={location} />}
    </div>
  );
};

export default Background;
