import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "site_cookie_consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "accepted" || v === "declined") setConsent(v);
    } catch (e) {
      setConsent(null);
    }
  }, []);

  useEffect(() => {
    if (consent === "accepted") {
      if ((window as any).enableAnalytics) (window as any).enableAnalytics();
    }
  }, [consent]);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch (e) {}
    setConsent("accepted");
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: { consent: true } }));
    if ((window as any).enableAnalytics) (window as any).enableAnalytics();
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch (e) {}
    setConsent("declined");
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: { consent: false } }));
  }

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.28 }}
          className="fixed bottom-4 left-4 right-4 z-50 rounded p-4 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-white border border-gray-200 text-gray-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
        >
          <div className="text-sm">
            Usamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao aceitar, permites o uso de cookies de analytics.
          </div>
          <div className="flex gap-2 ml-0 md:ml-4">
            <a href="/politica-de-privacidade" className="text-sm underline text-gray-700 dark:text-slate-200">Política de Privacidade</a>
            <button onClick={decline} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded text-sm">Recusar</button>
            <button onClick={accept} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Aceitar</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
