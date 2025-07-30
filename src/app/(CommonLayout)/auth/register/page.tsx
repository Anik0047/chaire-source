"use client";

import { Label } from "@/components/ui/label";
import { useSignupUserMutation } from "@/redux/api/userAuthApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function isFetchBaseQueryError(
  error: unknown,
): error is import("@reduxjs/toolkit/query").FetchBaseQueryError {
  return typeof error === "object" && error !== null && "status" in error;
}

const RegisterPage = () => {
  // Step 1: State for form data
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_password: "",
  });

  const router = useRouter();

  const [signupUser, { isLoading, isError, error, isSuccess }] =
    useSignupUserMutation();

  // Step 2: Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 3: Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signupUser({
        user_name: formData.user_name,
        user_phone: formData.user_phone,
        user_password: formData.user_password,
      }).unwrap();

      console.log(isSuccess);
      alert(res?.message);
      console.log("Signup Success:", res);
      router.push("/auth/login");
    } catch (err) {
      console.error("Signup Failed:", err);
    }
  };

  console.log(error);

  return (
    <div>
      <div className="h-[100px] border-b sm:h-[150px]"></div>
      <div className="mx-auto my-10 max-w-[1220px] px-4 sm:my-18">
        <div className="mx-auto sm:w-[386px]">
          <div>
            <h1 className="mb-12 text-center text-4xl font-bold">
              Create Account
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-5 space-y-3 sm:mb-10">
                <Label className="font-bold">Full Name</Label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full border px-2.5 py-2"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-5 space-y-3 sm:mb-10">
                <Label className="font-bold">Phone Number</Label>
                <input
                  type="text"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  className="w-full border px-2.5 py-2"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-5 space-y-3 sm:mb-10">
                <Label className="font-bold">Password</Label>
                <input
                  type="password"
                  name="user_password"
                  value={formData.user_password}
                  onChange={handleChange}
                  className="w-full border px-2.5 py-2"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full border bg-black py-2.5 text-center font-bold text-white"
                >
                  {isLoading ? "Creating..." : "Create"}
                </button>
              </div>

              {isError && (
                <p className="mt-4 text-center text-sm text-red-500">
                  {isFetchBaseQueryError(error) &&
                  error.data &&
                  typeof error.data === "object"
                    ? (error.data as any).message
                    : "Signup failed. Try again."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
