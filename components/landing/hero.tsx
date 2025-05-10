import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 bg-white dark:bg-zinc-950">
      {/* Soft blurred background accents */}
      <div className="absolute top-24 right-[-80px] w-72 h-72 bg-pixel-purple opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-16 left-[-80px] w-72 h-72 bg-pixel-teal opacity-20 rounded-full blur-2xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
              🎮 <span className="ml-2">Pixel perfect React components</span>
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Build stunning interfaces with {" "}
              <span className="bg-gradient-to-r from-pixel-purple to-pixel-teal bg-clip-text">
                PixelUI
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              A modern component library inspired by retro pixel-art. Fully
              customizable, beautifully crafted, and open source.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link href={'/docs'}>
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
              <Link href={'https://github.com/AyushKatre05/PixelUI.git'}>
              <Button variant="outline" size="lg">
                <Github className="mr-2 w-4 h-4" />
                View on GitHub
              </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: What's Inside Feature Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-md">
            {[
              { title: "15+ Components", emoji: "🧩" },
              { title: "Dark Mode", emoji: "🌙" },
              { title: "Theming Support", emoji: "🎨" },
              { title: "Keyboard Nav", emoji: "⌨️" },
              { title: "Animations", emoji: "🎞️" },
              { title: "Open Source", emoji: "💻" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-2xl">{feature.emoji}</div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {feature.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
