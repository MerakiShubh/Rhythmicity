"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href="#home">
          <MenuItem setActive={setActive} active={active} item="Home">
            Home
          </MenuItem>
        </a>
        <a href="#projects">
          <MenuItem setActive={setActive} active={active} item="Projects">
            Projects
          </MenuItem>
        </a>
        <a href="#skills">
          <MenuItem setActive={setActive} active={active} item="Skills">
            Skills
          </MenuItem>
        </a>
        <a href="#blogs">
          <MenuItem setActive={setActive} active={active} item="Blogs">
            Blogs
          </MenuItem>
        </a>
        <a href="#contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Connect with me"
          >
            Connect with me
          </MenuItem>
        </a>
      </Menu>
    </div>
  );
}

export default Navbar;
