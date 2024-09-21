"use client";

import { useEffect, useState } from "react";
import { Button } from "./button"; // Assuming this is the Shadcn Button component
import { ImagePlus, Trash } from "lucide-react"; // Icons from Lucide
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary"; // Cloudinary Widget

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = (result: any) => {
        if (result && result.info && result.info.secure_url) {
            onChange(result.info.secure_url); // Handle Cloudinary secure URL
        } else {
            console.error("Image upload failed or no URL received");
        }
    };

    if (!isMounted) {
        return null; // Avoid rendering on server-side
    }

    return (
        <div>
            <div className="mb-4 flex items-center gap-4 flex-wrap">
                {value.length === 0 && (
                    <p className="text-gray-500">No images uploaded yet.</p> // Message when no images
                )}

                {value.map((url) => (
                    <div
                        key={url}
                        className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
                    >
                        {/* Remove Button */}
                        <div className="absolute top-2 right-2 z-10">
                            <Button
                                type="button"
                                onClick={() => onRemove(url)}
                                variant="destructive"
                                size="icon"
                                disabled={disabled}
                            >
                                <Trash className="h-4 w-4" />
                            </Button>
                        </div>
                        {/* Display Image */}
                        <Image
                            src={url}
                            alt="Uploaded image"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
            {/* Upload Button */}
            <CldUploadWidget onSuccess={onUpload} uploadPreset="qz3xlka3">
                {({ open }) => {
                    const onClick = () => {
                        open(); // Open Cloudinary widget
                    };

                    return (
                        <Button
                            type="button"
                            disabled={disabled}
                            variant="secondary"
                            onClick={onClick}
                            className="flex items-center"
                        >
                            <ImagePlus className="h-4 w-4 mr-2" />
                            Upload an Image
                        </Button>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUpload;
