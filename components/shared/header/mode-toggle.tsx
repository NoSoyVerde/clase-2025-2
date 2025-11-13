"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cycleTheme = () => {
    switch (theme) {
      case 'system':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      case 'light':
        setTheme('system');
        break;
      default:
        setTheme('system');
        break;
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="h-4 w-4 transition-all" />;
      case 'dark':
        return <MoonIcon className="h-4 w-4 transition-all" />;
      case 'system':
      default:
        return <MonitorIcon className="h-4 w-4 transition-all" />;
    }
  };

  const getThemeTitle = () => {
    switch (theme) {
      case 'system':
        return 'Cambiar a tema oscuro';
      case 'dark':
        return 'Cambiar a tema claro';
      case 'light':
        return 'Cambiar a tema automático';
      default:
        return 'Cambiar tema';
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={cycleTheme}
      title={getThemeTitle()}
    >
      {getThemeIcon()}
      <span className="sr-only">{getThemeTitle()}</span>
    </Button>
  );
}
