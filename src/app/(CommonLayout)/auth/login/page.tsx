"use client";

import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [phone, setPhone] = useState(""); // Default phone
  const [password, setPassword] = useState(""); // Default password
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("user-login", {
      redirect: false,
      user_phone: phone,
      user_password: password,
      callbackUrl: "/",
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <div className="h-[100px] border-b sm:h-[150px]"></div>
      <div className="mx-auto my-10 max-w-[1220px] px-4 sm:my-36">
        <div className="mx-auto sm:w-[386px]">
          <div>
            <h1 className="mb-12 text-center text-4xl font-bold">Login</h1>
            {/* Logic Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-5 space-y-3 sm:mb-10">
                <Label className="font-bold">Phone Number</Label>
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border px-2.5 py-2"
                  placeholder="Type here"
                />
              </div>
              <div className="mb-5 space-y-3 sm:mb-10">
                <div className="flex justify-between">
                  <Label className="font-bold">Password</Label>
                  <p>Forgot?</p>
                </div>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border px-2.5 py-2"
                  placeholder="Type here"
                />
              </div>
              <div>
                <button className="w-full border bg-black py-2.5 text-center font-bold text-white">
                  Sign In
                </button>
              </div>
              <p className="mt-4 text-center text-sm text-red-500">{error}</p>
            </form>
            <div className="mt-10 w-32">
              <Link href="/auth/register">
                <p className="font-medium">Create account</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
