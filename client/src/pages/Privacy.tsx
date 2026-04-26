import React, { useEffect, useState } from "react";

const STORAGE_KEY = "site_cookie_consent";

export default function Privacy() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      setConsent(v);
    } catch (e) {
      setConsent(null);
    }
  }, []);

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

  function clear() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setConsent(null);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: { consent: null } }));
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Política de Privacidade</h1>
      <p className="mb-4">Explicação sucinta sobre como usamos dados e cookies no site. Inclui informação sobre cookies estritamente necessários, analytics e terceiros.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Preferências de cookies</h2>
      <p className="mb-4">Estado atual: {consent ?? "sem escolha"}.</p>

      <div className="flex gap-2">
        <button onClick={decline} className="px-3 py-1 bg-gray-200 rounded">Recusar Analytics</button>
        <button onClick={accept} className="px-3 py-1 bg-blue-600 text-white rounded">Aceitar Analytics</button>
        <button onClick={clear} className="px-3 py-1 bg-white border rounded">Remover Preferência</button>
      </div>

      <section className="mt-6">
        <h3 className="font-semibold">Dados coletados</h3>
        <p className="text-sm">Descrever os tipos de dados coletados por analytics e terceiros, e links para políticas externas.</p>
      </section>
    </div>
  );
}
