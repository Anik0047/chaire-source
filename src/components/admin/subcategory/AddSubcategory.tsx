'use client'

import { Dispatch, SetStateAction, useState } from "react";
import Label from "../customUI/label/Label";
import Input from "../customUI/input/InputField";
import FileUpload from "../customUI/input/FileUpload";
import Button from "../customUI/button/Button";

interface AddSubcategoryModalProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddSubcategory: React.FC<AddSubcategoryModalProps> = ({ open, onOpenChange }) => {
  const [subcategoryLogo, setSubcategoryLogo] = useState<File | null>(null);
  const [subcategoryLogoPreview, setSubcategoryLogoPreview] = useState<string | null>(null);

  const handleClose = () => {
    // form.reset();
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 px-2 md:px-0">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
        <div className="flex items-end justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Add Sub category</h1>
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
            <Label>Sub category name</Label>
            <Input type="text" />
          </div>

          <div>
            <FileUpload
              setLogo={setSubcategoryLogo}
              setPreview={setSubcategoryLogoPreview}
              preview={subcategoryLogoPreview}
              label="Sub category Image"
            />
          </div>

          <div className='flex justify-end gap-5 mt-10'>
            <Button size="sm" variant="primary" >Add</Button>
            <Button size="sm" type='button' className="bg-red-600 hover:bg-red-500" onClick={handleClose}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSubcategory