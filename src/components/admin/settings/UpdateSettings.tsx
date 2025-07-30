"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import Image from "next/image";
import { useGetSiteSettingsQuery, useUpdateSiteSettingsMutation } from "@/redux/api/settingsApi";


const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    favicon: z.union([z.instanceof(File), z.string()]).optional(),
    logo: z.union([z.instanceof(File), z.string()]).optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    facebook_link: z.string().optional(),
    instagram_link: z.string().optional(),
    twitter_link: z.string().optional(),
    youtube_link: z.string().optional(),
    whatsapp_link: z.string().optional(),
    welcome_message: z.string().optional(),
    privacy_policy: z.string().optional(),
    terms: z.string().optional(),
    video_url: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

import SettingsComponentCard from "../common/SettingsComponentCard";

const UpdateSettings = () => {
    const { data: settings } = useGetSiteSettingsQuery({});
    const settingsData = settings?.data;

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            phone: "",
            address: "",
            email: "",
            facebook_link: "",
            youtube_link: "",
            instagram_link: "",
            whatsapp_link: "",
            twitter_link: "",
            welcome_message: "",
            privacy_policy: "",
            terms: "",
            video_url: "",
        },
    });

    const [logoFileName, setLogoFileName] = React.useState("");
    const [faviconFileName, setFaviconFileName] = React.useState("");
    const [faviconPreview, setFaviconPreview] = React.useState<string | null>(null);
    const [logoPreview, setLogoPreview] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(false);

    const [mutate, { isLoading }] = useUpdateSiteSettingsMutation();

    React.useEffect(() => {
        if (settingsData) {
            form.reset({
                title: settingsData?.title ?? "",
                phone: settingsData?.phone ?? "",
                address: settingsData?.address ?? "",
                email: settingsData?.email ?? "",
                facebook_link: settingsData?.facebook_link ?? "",
                youtube_link: settingsData?.youtube_link ?? "",
                instagram_link: settingsData?.instagram_link ?? "",
                whatsapp_link: settingsData?.whatsapp_link ?? "",
                twitter_link: settingsData?.twitter_link ?? "",
                welcome_message: settingsData?.welcome_message ?? "",
                privacy_policy: settingsData?.privacy_policy ?? "",
                terms: settingsData?.terms ?? "",
                video_url: settingsData?.video_url ?? "",
            });

            setFaviconPreview(settingsData?.favicon ?? null);
            setLogoPreview(settingsData?.logo ?? null);
            setLogoFileName(settingsData?.logo_key?.split("-")[5] ?? "");
            setFaviconFileName(settingsData?.favicon_key?.split("-")[5] ?? "");
        }
    }, [settingsData, form]);

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("phone", data.phone ?? "");
            formData.append("email", data.email ?? "");
            formData.append("address", data.address ?? "");
            formData.append("facebook_link", data.facebook_link ?? "");
            formData.append("youtube_link", data.youtube_link ?? "");
            formData.append("instagram_link", data.instagram_link ?? "");
            formData.append("twitter_link", data.twitter_link ?? "");
            formData.append("whatsapp_link", data.whatsapp_link ?? "");
            formData.append("welcome_message", data.welcome_message ?? "");
            formData.append("privacy_policy", data.privacy_policy ?? "");
            formData.append("terms", data.terms ?? "");
            formData.append("video_url", data.video_url ?? "");
            if (data.logo) formData.append("logo", data.logo);
            if (data.favicon) formData.append("favicon", data.favicon);

            mutate(formData);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SettingsComponentCard title='Software Information'>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input
                                {...form.register("title")}
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter website title"
                            />
                            {form.formState.errors.title && (
                                <p className="text-sm text-red-500 mt-1">{form.formState.errors.title.message}</p>
                            )}
                        </div>

                        {/* Logo & Favicon */}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Logo Upload */}
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">Logo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setLogoPreview(URL.createObjectURL(file));
                                            setLogoFileName(file.name);
                                            form.setValue("logo", file);
                                        }
                                    }}
                                    className="w-full"
                                />
                                {logoFileName && <p className="text-sm mt-1">{logoFileName}</p>}
                                {logoPreview && (
                                    <Image
                                        src={logoPreview}
                                        width={100}
                                        height={100}
                                        alt="Logo"
                                        className="mt-2 rounded object-contain h-24"
                                    />
                                )}
                            </div>

                            {/* Favicon Upload */}
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">Favicon</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setFaviconPreview(URL.createObjectURL(file));
                                            setFaviconFileName(file.name);
                                            form.setValue("favicon", file);
                                        }
                                    }}
                                    className="w-full"
                                />
                                {faviconFileName && <p className="text-sm mt-1">{faviconFileName}</p>}
                                {faviconPreview && (
                                    <Image
                                        src={faviconPreview}
                                        width={100}
                                        height={100}
                                        alt="Favicon"
                                        className="mt-2 rounded object-contain h-24"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {["phone", "email", "address"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium capitalize mb-1">{field}</label>
                                    <input
                                        {...form.register(field as keyof FormData)}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Video url</label>
                            <input
                                {...form.register("video_url")}
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter website video url"
                            />
                            {form.formState.errors.video_url && (
                                <p className="text-sm text-red-500 mt-1">{form.formState.errors.video_url.message}</p>
                            )}
                        </div>
                    </div>
                </SettingsComponentCard>

                <SettingsComponentCard title='Store Information'>
                    <div className="space-y-6">
                        {/* Social Links */}
                        <div className="grid grid-cols-2 gap-6">
                            {["facebook_link", "instagram_link", "youtube_link", "twitter_link", "whatsapp_link"].map(
                                (field) => (
                                    <div key={field}>
                                        <label className="block text-sm font-medium capitalize mb-1">
                                            {field.replace("_link", "").replace("_", " ")}
                                        </label>
                                        <input
                                            {...form.register(field as keyof FormData)}
                                            className="w-full border rounded px-3 py-2"
                                        />
                                    </div>
                                )
                            )}
                        </div>

                        {/* Welcome Message */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Welcome Message</label>
                            <textarea
                                {...form.register("welcome_message")}
                                className="w-full border rounded px-3 py-2"
                                rows={3}
                            />
                        </div>
                    </div>
                </SettingsComponentCard>

                <SettingsComponentCard title='Other Information'>
                    {/* Rich Text Editors */}

                    {[
                        { name: "privacy_policy", label: "Privacy Policy" },
                        { name: "terms", label: "Terms and Conditions" },
                    ].map(({ name, label }) => (
                        <div key={name}>
                            <label className="block text-sm font-medium mb-1">{label}</label>
                            <Controller
                                name={name as keyof FormData}
                                control={form.control}
                                render={({ field }) => (
                                    <SunEditor
                                        setContents={typeof field.value === "string" ? field.value : ""}
                                        onChange={field.onChange}
                                        height="200px"
                                        setOptions={{
                                            buttonList: [
                                                ["undo", "redo"],
                                                ["formatBlock"],
                                                ["bold", "underline", "italic", "strike"],
                                                ["fontColor", "hiliteColor"],
                                                ["align", "list", "indent"],
                                                ["link"],
                                                ["removeFormat"],
                                                ["preview", "codeView", "fullScreen"],
                                            ],
                                        }}
                                    />
                                )}
                            />
                        </div>
                    ))}
                </SettingsComponentCard>


            </div>
            {/* Submit */}
            <button
                type="submit"
                disabled={isLoading || loading}
                className="bg-brand-600 text-white px-6 py-2 rounded hover:bg-brand-700 w-full"
            >
                {isLoading || loading ? "Saving..." : "Save"}
            </button>
        </form>
    )
}

export default UpdateSettings