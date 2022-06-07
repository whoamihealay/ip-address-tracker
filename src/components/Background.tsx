import { Image } from "./styles";
import { Map } from ".";
import { ApiLocation } from "../interfaces";
import { Children } from "react";

interface IProps {
  location?: ApiLocation;
  children?: React.ReactNode;
}

const Background = ({ location, children }: IProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: -1000,
      }}
    >
      {children}
    </div>
  );
};

export default Background;
