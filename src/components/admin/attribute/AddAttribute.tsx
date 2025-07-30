'use client'

import { Dispatch, SetStateAction, useState } from "react";
import Label from "../customUI/label/Label";
import Input from "../customUI/input/InputField";
import Button from "../customUI/button/Button";

interface AddAttributeProps {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const AddAttribute: React.FC<AddAttributeProps> = ({ open, onOpenChange }) => {
    const [attributeName, setAttributeName] = useState('');
    const [attributeStatus, setAttributeStatus] = useState('active');
    const [attributeValues, setAttributeValues] = useState(['']);
    //   const [createAttribute, { isLoading }] = useCreateAttributeMutation();
    //   const { data: categoriesData, isLoading: isCategoryLoading } = useGetAllDashboardCategoriesQuery({});

    const handleClose = () => {
        onOpenChange(false);
        setAttributeName('');
        setAttributeStatus('active');
        setAttributeValues(['']);
    };

    const handleAttributeValueChange = (index: number, value: string) => {
        const updatedValues = [...attributeValues];
        updatedValues[index] = value;
        setAttributeValues(updatedValues);
    };

    const handleAddValue = () => {
        setAttributeValues([...attributeValues, '']);
    };

    const handleRemoveValue = (index: number) => {
        if (attributeValues.length > 1) {
            const updatedValues = attributeValues.filter((_, i) => i !== index);
            setAttributeValues(updatedValues);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formattedValues = {
          attribute_name: attributeName,
          attribute_status: attributeStatus,
          attribute_values: attributeValues.map(value => ({
            attribute_value_name: value
          }))
        };
        console.log('formattedValues >>>>>>>>>', formattedValues);

        // try {
        //   await createAttribute(formattedValues).unwrap();
        //   alert("Attribute created successfully!");
        //   handleClose();
        // } catch (error: any) {
        //   alert(error?.data?.message || "Failed to create attribute.");
        // }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 px-2 md:px-0">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                <div className="flex items-end justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Create Attribute</h1>
                    <button
                        className="bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center shadow-lg"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>

                <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                    {/* Attribute Name */}
                    <div>
                        <Label>Attribute Name</Label>
                        <Input
                            type="text"
                            value={attributeName}
                            onChange={(e) => setAttributeName(e.target.value)}
                        />
                    </div>

                    {/* Attribute Status */}
                    <div>
                        <Label>Attribute Status</Label>
                        <select
                            className="w-full h-10 border border-gray-300 rounded px-3 text-gray-700"
                            value={attributeStatus}
                            onChange={(e) => setAttributeStatus(e.target.value)}
                            required
                        >
                            <option value="active">Active</option>
                            <option value="in-active">Inactive</option>
                        </select>
                    </div>

                    {/* Dynamic Attribute Values */}
                    <div>
                        <Label>Attribute Values</Label>
                        <div className="space-y-2">
                            {attributeValues.map((value, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleAttributeValueChange(index, e.target.value)}
                                    />
                                    {index === attributeValues.length - 1 && (
                                        <button
                                            type="button"
                                            className="text-green-600 text-xl"
                                            onClick={handleAddValue}
                                            title="Add"
                                        >
                                            ＋
                                        </button>
                                    )}
                                    {attributeValues.length > 1 && (
                                        <button
                                            type="button"
                                            className="text-red-600 text-xl"
                                            onClick={() => handleRemoveValue(index)}
                                            title="Remove"
                                        >
                                            🗑
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-end gap-5 mt-10'>
                        <Button size="sm" variant="primary" type="submit">
                            {/* {isLoading ? 'Creating...' : 'Create'} */}
                            Create
                        </Button>
                        <Button
                            size="sm"
                            type="button"
                            className="bg-red-600 hover:bg-red-500"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAttribute;
