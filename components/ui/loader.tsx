import { FC } from "react";
import { ClipLoader } from "react-spinners";

interface loaderProps {}

const Loader: FC<loaderProps> = ({}) => {
  return <ClipLoader color="#3498db" size={50} />;
};

export default Loader;
