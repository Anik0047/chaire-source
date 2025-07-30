'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Label from "../customUI/label/Label";
import Input from "../customUI/input/InputField";
import Button from "../customUI/button/Button";
import Select from "../customUI/input/Select";
import { ChevronDownIcon } from "lucide-react";
import clsx from "clsx";

interface IStaffData {
    admin_name: string;
    admin_phone: string;
    admin_password?: string;
    admin_status: "active" | "in-active";
}

interface EditStaffProps {
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedStaffData: IStaffData;
}

const EditStaff: React.FC<EditStaffProps> = ({ setIsEditModalOpen, selectedStaffData }) => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<IStaffData>({
        defaultValues: {
            admin_status: "active"
        }
    });

    useEffect(() => {
        if (selectedStaffData) {
            reset({
                admin_name: selectedStaffData.admin_name,
                admin_phone: selectedStaffData.admin_phone,
                admin_status: selectedStaffData.admin_status,
            });
        }
    }, [selectedStaffData, reset]);

    const handleClose = () => {
        setIsEditModalOpen(false);
        reset();
    };

    const onSubmit: SubmitHandler<IStaffData> = async (data) => {
        if (!showPassword) {
            delete data.admin_password; // remove password if not changing
        }
        try {
            // Replace this with your actual API call
            await new Promise((res) => setTimeout(res, 1000));
            console.log("Updated Staff Data:", data);
            handleClose();
        } catch (error) {
            console.error("Failed to update", error);
        }
    };

    if (!open) return null;

    const statusOptions = [
        { value: "active", label: "Active" },
        { value: "in-active", label: "In Active" },
    ];

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 px-2 md:px-0">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                <div className="flex items-end justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Edit Staff</h1>
                    <button
                        className=" bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center shadow-lg"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-4">
                    <div>
                        <Label>Staff Name</Label>
                        <input
                            type="text"
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700"
                            placeholder="Enter name"
                            {...register("admin_name", { required: "Name is required" })}
                        />
                        {errors.admin_name && <p className="text-sm text-red-500">{errors.admin_name.message}</p>}
                    </div>

                    <div>
                        <Label>Phone Number</Label>
                        <input
                            type="text"
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700"
                            placeholder="Enter phone number"
                            {...register("admin_phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^\+?\d{10,15}$/,
                                    message: "Invalid phone number"
                                }
                            })}
                        />
                        {errors.admin_phone && <p className="text-sm text-red-500">{errors.admin_phone.message}</p>}
                    </div>

                    {/* <div>
                        <Label>New Password (Optional)</Label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            {...register("admin_password")}
                        />
                    </div> */}
                    {/* Password Toggle & Collapse */}
                    <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-700">Do you want to change the password?</span>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={showPassword}
                                    onChange={(e) => setShowPassword(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 relative transition-all duration-300">
                                    <div
                                        className={clsx(
                                            "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300",
                                            showPassword && "translate-x-full"
                                        )}
                                    />
                                </div>
                            </label>
                        </div>

                        {showPassword && (
                            <div className="mt-4">
                                <Label>New Password</Label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700"
                                    {...register("admin_password")}
                                />
                            </div>
                        )}
                    </div>

                    <div>
                        <Label>Staff Status</Label>
                        <div className="relative">
                            <Select
                                options={statusOptions}
                                defaultValue={selectedStaffData.admin_status}
                                onChange={(value: string) => setValue("admin_status", value as "active" | "in-active")}
                            />
                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2">
                                <ChevronDownIcon />
                            </span>
                        </div>
                        {errors.admin_status && <p className="text-sm text-red-500">{errors.admin_status.message}</p>}
                    </div>

                    <div className="flex justify-end gap-5 mt-10">
                        <Button type="submit" size="sm" variant="primary" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save"}
                        </Button>
                        <Button type="button" size="sm" className="bg-red-600 hover:bg-red-500" onClick={handleClose}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditStaff;
