"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModalStore } from "@/hooks/use-store-modal";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage = () =>{
  const onOpen = useStoreModalStore((state) => state.onOpen);
  const isOpen = useStoreModalStore((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return null;
}

export default SetupPage;
