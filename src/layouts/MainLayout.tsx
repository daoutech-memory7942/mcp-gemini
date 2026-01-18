import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-bg-neutral-base flex items-center justify-center p-8"
      data-pimitive-token="Mode-1"
      data-semantic-token="light-mode"
      data-component-token="mint"
    >
      {children}
    </div>
  );
}
