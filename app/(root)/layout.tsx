import { Header } from "@/components/landing/header";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        template: "PixelUI",
        default: "PixelUI",
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black">
                {children}
            </main>
        </>
    );
}
