"use client";

import { Modal } from "../ui/modal";
import { useStoreModalStore } from "@/hooks/use-store-modal";

export const StroeModal = () => {
    const storeModal = useStoreModalStore();

    return(
        <Modal 
        title="Create Store" 
        description="Add a new store to manage products and categories"
        isOpen = {storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            Future Create Store Form
        </Modal>
    );
};