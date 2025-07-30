'use client'

import { IProductInterface } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

interface ProductDetailsModalProps {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
    productData?: IProductInterface
}

const ProductDetails: React.FC<ProductDetailsModalProps> = ({ open, onOpenChange, productData }) => {

    const handleClose = () => {
        // form.reset();
        onOpenChange(false);
    };

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                <div className="flex items-end justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Product Details</h1>
                    <button
                        className=" bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center shadow-lg"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails