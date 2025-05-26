"use client";

import { ChevronsLeftIcon, MenuIcon } from "lucide-react";
import React from "react";
import { useSidebar } from "./ui/sidebar";
import Image from "next/image";

export default function Header() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <header className="w-full px-4 py-3 shadow-sm border-b flex items-center justify-between bg-white">
      {/* Left side: Sidebar toggle + Logo */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button (Responsive + Styled) */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md border hover:bg-gray-100 transition-colors"
          aria-label="Toggle Sidebar"
        >
          {open ? (
            <ChevronsLeftIcon className="w-5 h-5 text-gray-700" />
          ) : (
            <MenuIcon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Logo Area */}
        <div className="flex items-center gap-2">
          {/* Desktop Logo */}
          <Image
            src="/logoipsum.png"
            alt="Logo"
            width={150}
            height={40}
            className="hidden md:block"
          />
          {/* Mobile Logo */}
          <Image
            src="/logoipsum-366.png"
            alt="Logo"
            width={32}
            height={32}
            className="block md:hidden"
          />
          <span className="text-xl font-semibold text-gray-800">start it</span>
        </div>
      </div>

      {/* Right side: Example user message or button */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome 👋</span>
      </div>
    </header>
  );
}
