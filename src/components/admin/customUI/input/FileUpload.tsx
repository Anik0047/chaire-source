'use client'

import { ImageUp, X } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react'
import Label from '../label/Label';

interface FiloUploadProps {
    setLogo: Dispatch<SetStateAction<File | null>>;
    setPreview: Dispatch<SetStateAction<string | null>>;
    preview: string | null;

    label: string
}

const FileUpload: React.FC<FiloUploadProps> = ({ preview, setPreview, setLogo, label = '', }) => {

    const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setPreview(URL.createObjectURL(files[0])); // To show a preview
            setLogo(files[0]); // Store the file
        }
    };

    const removeThumbnail = () => {
        setPreview(null);
        setLogo(null);
    };
    return (
        <div className="">
            <Label>
                {label}
            </Label>
            <div className=" border my-2 bg-white border-slate-300 rounded-lg  text-center">
                {preview ? (
                    <div className="relative inline-block my-2 ">
                        <img
                            src={preview}
                            alt="Thumbnail Preview"
                            className="w-48 h-48 object-cover rounded-md"
                        />
                        <button
                            type="button"
                            className="absolute -top-1 -right-1 bg-red-400 p-1 text-white rounded-full "
                            onClick={removeThumbnail}
                        >
                            <X size={20} />
                        </button>
                    </div>
                ) : (
                    <label className="flex flex-col items-center justify-center cursor-pointer p-6">
                        <ImageUp className="text-7xl text-slate-400" />

                        <span className="text-slate-500">Upload Thumbnail</span>
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            style={{ display: "none" }}
                            onChange={handleThumbnailChange}
                        />
                        <p className="text-gray-400 text-sm">
                            Upload Product Thumbnil Image (JPG, PNG, WEBP)
                        </p>
                    </label>
                )}
            </div>

        </div>
    )
}

export default FileUpload