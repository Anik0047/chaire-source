'use client';

import { Dispatch, SetStateAction } from "react";

interface AddBannerModalProps {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddBanner: React.FC<AddBannerModalProps> = ({ open, onOpenChange }) => {
    return (
        <div>
            
        </div>
    )
}

export default AddBanner