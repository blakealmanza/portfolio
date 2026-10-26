"use client";

import { useEffect, useState } from "react";

/** A mailto link does nothing without a mail app, so the address can also be copied. */
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copy = () => {
    navigator.clipboard?.writeText(email).then(
      () => setCopied(true),
      () => {},
    );
  };

  return (
    <button type="button" className={className} onClick={copy} aria-label={copied ? undefined : "Copy email address"}>
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
