'use client'

import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Label from "../customUI/label/Label";
import Input from "../customUI/input/InputField";
import Button from "../customUI/button/Button";

interface AddStaffProps {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
}

interface StaffFormData {
    admin_name: string;
    admin_phone: string;
    admin_password: string;
    admin_status: "active" | "in-active";
}

const AddStaff: React.FC<AddStaffProps> = ({ open, onOpenChange }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<StaffFormData>({
        defaultValues: {
            admin_status: "active",
        },
    });

    const handleClose = () => {
        reset();
        onOpenChange(false);
    };

    const onSubmit: SubmitHandler<StaffFormData> = async (data) => {
        try {
            // Simulate API call
            await new Promise((res) => setTimeout(res, 1000));
            console.log("Submitted Staff Data:", data);
            // Show toast/message here if needed
            reset();
            handleClose();
        } catch (error) {
            console.error("Failed to submit", error);
            // Show error toast/message here
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black/50 px-2 md:px-0">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]">
                <div className="flex items-end justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">Create Staff</h1>
                    <button
                        className=" bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center shadow-lg"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-4">
                    {/* Staff Name */}
                    <div>
                        <Label>Staff Name</Label>
                        <input
                            type="text"
                            placeholder="Enter user name"
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                            {...register("admin_name", { required: "Name is required" })}
                        />
                        {errors.admin_name && (
                            <p className="text-sm text-red-500 mt-1">{errors.admin_name.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <Label>Phone Number</Label>
                        <input
                            type="text"
                            placeholder="Enter phone number"

                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"                    {...register("admin_phone", {
                                required: "Phone is required",
                                pattern: {
                                    value: /^\+?\d{10,15}$/,
                                    message: "Invalid phone number",
                                },
                            })}
                        />
                        {errors.admin_phone && (
                            <p className="text-sm text-red-500 mt-1">{errors.admin_phone.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <Label>Password</Label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                            {...register("admin_password", { required: "Password is required" })}
                        />
                        {errors.admin_password && (
                            <p className="text-sm text-red-500 mt-1">{errors.admin_password.message}</p>
                        )}
                    </div>

                    {/* Status */}
                    <div>
                        <Label>Status</Label>
                        <select
                            {...register("admin_status", { required: "Status is required" })}
                            className="w-full border border-blue-300 px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
                        >
                            <option value="active">Active</option>
                            <option value="in-active">In Active</option>
                        </select>
                        {errors.admin_status && (
                            <p className="text-sm text-red-500 mt-1">{errors.admin_status.message}</p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-5 mt-10">
                        <Button type="submit" size="sm" variant="primary" disabled={isSubmitting}>
                            {isSubmitting ? "Creating..." : "Create"}
                        </Button>
                        <Button
                            type="button"
                            size="sm"
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

export default AddStaff;
