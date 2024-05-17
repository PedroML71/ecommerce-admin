"use client";

// prevent hidration issues
import { FC, useEffect, useState } from "react";
import StoreModal from "@/components/modals/store-modal";

interface modalProviderProps {}

const ModalProvider: FC<modalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};

export default ModalProvider;
