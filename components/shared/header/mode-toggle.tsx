"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon, SunMoon, TreesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  //cuando arranca esto se va a ejecutar
  useEffect(() => {
    setMounted(true);
  }, []);
  //si no hay nada, no dibujara nada
  if (!mounted) return null;
  const temas = ["system", "light", "dark", "nature","darknature"];
  const cycleTheme = () => {
    const t = typeof theme === "string" ? theme : "system";
    if (t === "system") {
      setTheme(temas[1]);
    } else if (t === "light") {
      setTheme(temas[2]);
    } else if (t === "dark") {
      setTheme(temas[3]);
    } else if (t === "nature") {
      setTheme(temas[4]);
    } else if (t === "darknature") {
      setTheme(temas[0]);
    }
  };
  return (
    <Button
      variant={"ghost"}
      className="focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={cycleTheme}
      aria-label={`Theme: ${theme}. Click to change`}
      title={`Theme: ${theme}. Click to change`}
    >
      {theme === "system" ? (
        <SunMoon />
      ) : theme === "dark" ? (
        <MoonIcon />
      ) : theme === "light" ? (
        <SunIcon />
      ) : (
        <TreesIcon />
      )}
    </Button>
  );
}
