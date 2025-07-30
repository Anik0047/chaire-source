import config from "@/config"

// GET web settings (for navbar, footer and others) data
export async function getAllWebSettingsData() {
    try {

        const res = await fetch(`${config.baseUrl}/web-settings`, {
            // cache: 'no-store',
            next: { tags: ['SiteSettings'] },
        })

        return await res.json()
    } catch (error) {
        console.error("Error fetching Web Settings Data:", error)
        return { data: [] }
    }
}