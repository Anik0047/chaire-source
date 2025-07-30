import { IAttribute } from '@/interfaces';
import React, { Dispatch, SetStateAction } from 'react'

interface ViewAttributeModalProps {
    setIsViewModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedAttributeData: IAttribute;
}

const AttributeValues: React.FC<ViewAttributeModalProps> = ({ selectedAttributeData, setIsViewModalOpen }) => {
    const handleClose = () => {
        // form.reset();
        setIsViewModalOpen(false);
    };
    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50"
        >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                {/* <h1 className="text-base font-medium text-gray-800 dark:text-white/90">View Attribute Values</h1> */}
                <div className="flex items-end justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">View Attribute Values</h1>
                    <button
                        className=" bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center shadow-lg"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between my-5'>
                        <p className='font-bold text-base capitalize'>Attribute Name: <span className='text-base font-medium'>{selectedAttributeData?.attribute_name}</span></p>
                        {/* <p className='font-bold text-base'>Category Name: <span className='font-medium'>{selectedAttributeData?.category_id?.category_name}</span></p> */}
                    </div>
                    <p className='font-bold text-base capitalize'>
                        Attribute Status:  <span className={`font-medium ${selectedAttributeData?.attribute_status === 'active' ? 'text-green-500' : 'text-rose-500'}`}>{selectedAttributeData?.attribute_status}</span>
                    </p>
                    {/* Attribute values TABLE */}
                    <div className="w-full mt-4">
                        <div className="responsive-space">
                            <h1 className='mb-2 mt-5 font-bold text-base'>Attribute Values:</h1>

                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2">Attribute Value Name</th>
                                        {/* <th className="border border-gray-300 px-4 py-2">Attribute Value Status</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(selectedAttributeData?.attribute_values) && selectedAttributeData.attribute_values.length > 0 ? (
                                        selectedAttributeData.attribute_values.map((attr, index) => (
                                            <tr key={index} className="text-center">
                                                <td className="border border-gray-300 px-4 py-2 font-medium">{attr.attribute_value_name}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={2} className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                                No attribute values found
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttributeValues