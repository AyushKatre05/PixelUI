import { ThemeToggle } from "@/lib/theme-toggle";
import { Bird } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Bird className="w-5 h-5 text-purple-500" />
            <span className="font-semibold hidden sm:inline">PixelUI</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
