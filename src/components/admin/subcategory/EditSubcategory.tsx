'use client'

import { ISubcategoryInterface } from "@/interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Label from "../customUI/label/Label";
import Input from "../customUI/input/InputField";
import FileUpload from "../customUI/input/FileUpload";
import Select from "../customUI/input/Select";
import { ChevronDownIcon } from "lucide-react";
import Button from "../customUI/button/Button";

interface EditSubcategoryModalProps {
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedSubcategoryData: ISubcategoryInterface;
}


const EditSubcategory: React.FC<EditSubcategoryModalProps> = ({ selectedSubcategoryData, setIsEditModalOpen }) => {
    console.log('selectedSubcategoryData >>>>>>>>>', selectedSubcategoryData);
    const [formData, setFormData] = useState({
        subcategory_name: selectedSubcategoryData.subcategory_name || '',
        subcategory_serial: selectedSubcategoryData.subcategory_serial || 0,
        subcategory_status: selectedSubcategoryData.subcategory_status || '',
    });

    const [subcategoryLogo, setSubcategoryLogo] = useState<File | null>(null);
    const [subcategoryLogoPreview, setSubcategoryLogoPreview] = useState<string | null>(null);
    const options = [
        { value: "active", label: "Active" },
        { value: "in-active", label: "In active" },
    ];

    useEffect(() => {
        setFormData({
            subcategory_name: selectedSubcategoryData.subcategory_name || '',
            subcategory_serial: selectedSubcategoryData.subcategory_serial || 0,
            subcategory_status: selectedSubcategoryData.subcategory_status || '',
        });

        if (selectedSubcategoryData.subcategory_logo) {
            setSubcategoryLogoPreview(selectedSubcategoryData.subcategory_logo);
        }
    }, [selectedSubcategoryData]);

    const handleClose = () => {
        // form.reset();
        setIsEditModalOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 px-2 md:px-0">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                <div className="flex items-end justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Edit Subcategory</h1>
                    <button
                        className=" bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center shadow-lg"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <form className="py-4 space-y-4">
                    <div>
                        <Label>Sub Category name</Label>
                        <Input
                            type="text"
                            name="subcategory_name"
                            defaultValue={formData.subcategory_name}
                            onChange={handleChange}
                        />

                    </div>

                    <div>
                        <Label>Sub Category serial</Label>
                        <Input
                            type="number"
                            name="subcategory_serial"
                            defaultValue={formData.subcategory_serial}
                            onChange={handleChange}
                        />

                    </div>

                    <div>
                        <Label>Sub Category status</Label>
                        <div className="relative">
                            <Select
                                options={options}
                                placeholder="Select Option"
                                defaultValue={formData.subcategory_status}
                                onChange={(value) => setFormData((prev) => ({ ...prev, subcategory_status: value }))}
                                className="dark:bg-dark-900"
                            />


                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                <ChevronDownIcon />
                            </span>
                        </div>
                    </div>

                    <div>
                        <FileUpload
                            setLogo={setSubcategoryLogo}
                            setPreview={setSubcategoryLogoPreview}
                            preview={subcategoryLogoPreview}
                            label="Sub Category Image"
                        />
                    </div>

                    <div className='flex justify-end gap-5 mt-10'>
                        <Button size="sm" variant="primary" >Save</Button>
                        <Button size="sm" type='button' className="bg-red-600 hover:bg-red-500" onClick={handleClose}>Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditSubcategory