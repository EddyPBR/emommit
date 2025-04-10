"use client";

import { useHashFromVisibleSection } from "@/hooks/useHashFromVisibleSection";

export function HashUpdater() {
  useHashFromVisibleSection();
  return null;
}