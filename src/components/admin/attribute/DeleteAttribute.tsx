import { Info } from "lucide-react"
import Button from "../customUI/button/Button"
import { Dispatch, SetStateAction } from "react";
import { IAttribute } from "@/interfaces";

interface DeleteAttributeModalProps {
    setIsDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedAttributeData: IAttribute;
}

const DeleteAttribute: React.FC<DeleteAttributeModalProps> = ({ selectedAttributeData, setIsDeleteModalOpen }) => {

    // const handleDeleteOk = () => {
    //     setIsDeleteModalOpen(false);
    // };

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    };
    const handleCategoryDelete = async () => {


    }

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 px-2 md:px-0"
        >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                <div className='flex flex-col items-center justify-center pb-7'>
                    <Info size={100} className='text-orange-300' />

                    <h1 className='text-4xl mt-7'>Are you sure?</h1>
                    <h3 className='text-xl font-normal mt-3 text-center'>You won't be able to revert this {selectedAttributeData.attribute_name}!</h3>

                    <div className='flex gap-5 mt-10'>
                        <Button size="sm" variant="primary" onClick={handleCategoryDelete}>Yes, I'm ok!</Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-500" onClick={handleDeleteCancel}>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAttribute