import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavSection } from "@/config/navigation";

interface DesktopNavProps {
  sections: NavSection[];
  pathname: string;
}

export function DesktopNav({ sections, pathname }: DesktopNavProps) {
  return (
    <div className="hidden md:block w-full space-y-6">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 shadow-sm">
        {sections.map((section, index) => (
          <div key={section.title} className={cn(index > 0 && "mt-6")}>
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
              {section.title}
            </h2>

            <nav className="space-y-1">
              {section.items.map((item) => {
                const isActive =
                  item.href === "/docs"
                    ? pathname === "/docs" || pathname === "/docs/introduction"
                    : item.href === "/docs/components/block/"
                      ? pathname.startsWith("/docs/components/block")
                      : pathname === item.href;

                return (
                  <Link
                    key={item.id}
                    href={item.isComingSoon ? "#" : item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      item.isComingSoon
                        ? "text-zinc-400 cursor-not-allowed"
                        : isActive
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                          : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {item.title}
                      {item.isNew && !isActive && (
                        <span className="text-[10px] font-semibold text-emerald-500 border border-emerald-500 px-1 py-0.5 rounded">
                          NEW
                        </span>
                      )}
                      {item.isLab && !isActive && (
                        <span className="text-[10px] font-semibold text-purple-500 border border-purple-500 px-1 py-0.5 rounded">
                          LAB
                        </span>
                      )}
                    </span>
                    {item.count && (
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {item.count}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}
