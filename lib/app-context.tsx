"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

interface AppState {
  strategyNotes: boolean;
  proposedFeatures: boolean;
  demoMode: boolean;
}

interface AppContextValue extends AppState {
  toggle: (key: keyof AppState) => void;
  leadPrefill: string | null;
  setLeadPrefill: (value: string | null) => void;
}

const DEFAULT_STATE: AppState = {
  strategyNotes: false,
  proposedFeatures: false,
  demoMode: false,
};

const STORAGE_KEY = "vi-demo-controls";

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [leadPrefill, setLeadPrefill] = useState<string | null>(null);

  useEffect(() => {
    // Intentionally reading persisted state after mount rather than via a
    // lazy useState initializer: state must start as DEFAULT_STATE on both
    // server and client to avoid a hydration mismatch, then sync from
    // localStorage (a browser-only API) once mounted.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setState((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // localStorage unavailable — fall back to defaults silently.
    }
  }, []);

  const toggle = useCallback((key: keyof AppState) => {
    setState((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore persistence failures
      }
      return next;
    });
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({ ...state, toggle, leadPrefill, setLeadPrefill }),
    [state, toggle, leadPrefill]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppState must be used within AppProvider");
  return ctx;
}
