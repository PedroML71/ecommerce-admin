"use client";

import { FC } from "react";
import Loader from "@/components/ui/loader";

interface loadingProps {}

const Loading: FC<loadingProps> = ({}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
