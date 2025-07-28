"use client";
import { createContext, useContext, useState } from "react";

type LanguageContextType = {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "id", // nilai default awal
  setLang: () => {}, // fungsi kosong sebagai default
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"id" | "en">("id");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
