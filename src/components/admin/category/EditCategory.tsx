'use client'

import { ICategoryInterface } from "@/interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Label from "../customUI/label/Label";
import Input from "../customUI/input/InputField";
import FileUpload from "../customUI/input/FileUpload";
import Select from "../customUI/input/Select";
import { ChevronDownIcon } from "lucide-react";
import Button from "../customUI/button/Button";

interface EditCategoryModalProps {
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedCategoryData: ICategoryInterface;
}


const EditCategory: React.FC<EditCategoryModalProps> = ({ selectedCategoryData, setIsEditModalOpen }) => {
    console.log('selectedCategoryData >>>>>>>>>', selectedCategoryData);
    const [formData, setFormData] = useState({
        category_name: selectedCategoryData.category_name || '',
        category_serial: selectedCategoryData.category_serial || 0,
        category_status: selectedCategoryData.category_status || '',
    });

    const [categoryLogo, setCategoryLogo] = useState<File | null>(null);
    const [categoryLogoPreview, setCategoryLogoPreview] = useState<string | null>(null);
    const options = [
        { value: "active", label: "Active" },
        { value: "in-active", label: "In active" },
    ];

    useEffect(() => {
        setFormData({
            category_name: selectedCategoryData.category_name || '',
            category_serial: selectedCategoryData.category_serial || 0,
            category_status: selectedCategoryData.category_status || '',
        });

        if (selectedCategoryData.category_logo) {
            setCategoryLogoPreview(selectedCategoryData.category_logo);
        }
    }, [selectedCategoryData]);

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
                    <h1 className="text-xl font-semibold text-gray-800">Edit Category</h1>
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
                        <Label>Category name</Label>
                        <Input
                            type="text"
                            name="category_name"
                            defaultValue={formData.category_name}
                            onChange={handleChange}
                        />

                    </div>

                    <div>
                        <Label>Category serial</Label>
                        <Input
                            type="number"
                            name="category_serial"
                            defaultValue={formData.category_serial}
                            onChange={handleChange}
                        />

                    </div>

                    <div>
                        <Label>Category status</Label>
                        <div className="relative">
                            <Select
                                options={options}
                                placeholder="Select Option"
                                defaultValue={formData.category_status}
                                onChange={(value) => setFormData((prev) => ({ ...prev, category_status: value }))}
                                className="dark:bg-dark-900"
                            />


                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                <ChevronDownIcon />
                            </span>
                        </div>
                    </div>

                    <div>
                        <FileUpload
                            setLogo={setCategoryLogo}
                            setPreview={setCategoryLogoPreview}
                            preview={categoryLogoPreview}
                            label="Category Image"
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

export default EditCategory