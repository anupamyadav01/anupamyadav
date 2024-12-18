"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-5 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
    <Menu setActive={setActive}>
     
    <div className="flex space-x-6 text-lg">
    <Link href="/">
      <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
    </Link>
    <Link href="/projects">
      <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
    </Link>
    <Link href="/about">
      <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
    </Link>
    <Link href="/skills">
      <MenuItem setActive={setActive} active={active} item="Skills"></MenuItem>
    </Link>
    <Link href="/contact">
      <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
    </Link>
    </div>

    </Menu>
    </div>
  )
}

export default Navbar