"use client";

export default function AdminFooterLink() {
  return (
    <span
      className="admin-footer-link"
      onClick={() => window.location.href = "/admin"}
      aria-label="Panel de administrador"
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter") window.location.href = "/admin"; }}
    >
      ©
    </span>
  );
}