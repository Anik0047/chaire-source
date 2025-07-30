'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IAttribute, ICategoryInterface } from '@/interfaces';
import Label from '../customUI/label/Label';
import Input from '../customUI/input/InputField';
import Select from '../customUI/input/Select';
import Button from '../customUI/button/Button';
import { ChevronDownIcon, PlusCircle, Trash2 } from 'lucide-react';


interface EditAttributeProps {
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedAttributeData: IAttribute;
}

const EditAttribute: React.FC<EditAttributeProps> = ({ setIsEditModalOpen, selectedAttributeData }) => {
    //   const [updateAttribute, { isLoading }] = useEditAttributeMutation();
    //   const { data: categoriesData, isLoading: isCategoryLoading } = useGetAllDashboardCategoriesQuery({});

    const [formData, setFormData] = useState({
        attribute_name: '',
        attribute_status: '',
        // category_id: '',
    });

    const [attributeValues, setAttributeValues] = useState<{ attribute_value_name: string }[]>([]);
    const [newAttributeValues, setNewAttributeValues] = useState<string[]>(['']);

    useEffect(() => {
        if (selectedAttributeData) {
            setFormData({
                attribute_name: selectedAttributeData?.attribute_name || '',
                attribute_status: selectedAttributeData?.attribute_status || '',
                // category_id: selectedAttributeData?.category_id?._id || '',
            });
            setAttributeValues(selectedAttributeData?.attribute_values || []);
        }
    }, [selectedAttributeData]);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddAttributeValue = () => {
        setNewAttributeValues(prev => [...prev, '']);
    };

    const handleRemoveAttributeValue = (index: number) => {
        setNewAttributeValues(prev => prev.filter((_, i) => i !== index));
    };

    const handleNewAttrChange = (index: number, value: string) => {
        const updated = [...newAttributeValues];
        updated[index] = value;
        setNewAttributeValues(updated);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const cleanNewValues = newAttributeValues
            .filter(val => val.trim() !== '')
            .map(val => ({ attribute_value_name: val }));

        const payload = {
            ...formData,
            _id: selectedAttributeData?._id,
            attribute_values: [...attributeValues, ...cleanNewValues],
        };

        // try {
        //   await updateAttribute(payload).unwrap();
        //   alert('Attribute updated successfully!');
        //   handleCancel();
        // } catch (error: any) {
        //   alert(error?.data?.message || 'Failed to update attribute.');
        // }
    };

    const statusOptions = [
        { label: 'Active', value: 'active' },
        { label: 'In active', value: 'in-active' },
    ];

    //   const categories = categoriesData?.data || [];

    const handleClose = () => {
        // form.reset();
        setIsEditModalOpen(false);
    };

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 px-2 md:px-0">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Edit Attribute</h1>
                    <button
                        className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center text-white"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="py-6 space-y-6">
                    {/* Attribute Name */}
                    <div>
                        <Label>Attribute Name</Label>
                        <Input
                            type="text"
                            name="attribute_name"
                            defaultValue={formData.attribute_name}
                            value={formData.attribute_name}
                            onChange={handleFormChange}
                            placeholder="Enter Attribute Name"
                        />
                    </div>

                    {/* Status Select */}
                    <div>
                        <Label>Attribute Status</Label>
                        <div className="relative">
                            <Select
                                options={statusOptions}
                                placeholder="Select Status"
                                defaultValue={formData.attribute_status}
                                onChange={(value) => handleSelectChange('attribute_status', value)}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                <ChevronDownIcon />
                            </span>
                        </div>
                    </div>

                    {/* Attribute Values Table */}
                    <div>
                        <Label>Existing Attribute Values</Label>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2 text-left">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attributeValues.length > 0 ? (
                                    attributeValues.map((attr, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{attr.attribute_value_name}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="text-center text-gray-500 border px-4 py-2" colSpan={1}>No attribute values found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Dynamic Inputs */}
                    <div>
                        <Label>Add More Attribute Values</Label>
                        <div className="space-y-4">
                            {newAttributeValues.map((value, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleNewAttrChange(index, e.target.value)}
                                        placeholder="Enter attribute value"
                                    />
                                    {index === newAttributeValues.length - 1 && (
                                        <button type="button" onClick={handleAddAttributeValue}>
                                            <PlusCircle className="text-green-600" />
                                        </button>
                                    )}
                                    {newAttributeValues.length > 1 && (
                                        <button type="button" onClick={() => handleRemoveAttributeValue(index)}>
                                            <Trash2 className="text-red-500" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-4 mt-10">
                        <Button size="sm" type="submit" variant="primary">
                            {/* {isLoading ? 'Updating...' : 'Update'} */}
                            Update
                        </Button>
                        <Button size="sm" type="button" className="bg-red-600 hover:bg-red-500" onClick={handleClose}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAttribute;
