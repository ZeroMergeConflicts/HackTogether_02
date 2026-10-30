"use client";
import Link from "next/link";
import { Compass, Library, Sparkles } from "lucide-react";
export function AppShell({ children }: { children: React.ReactNode }) {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    return <><header className="shell nav"><Link href="/" className="brand"><span className="mark">L</span>LibraAI</Link><nav className="navlinks">{[["Discover", "/discover"], ["Recommendations", "/recommendations"], ["Learning path", "/learning-path"], ["Catalogue", "/catalogue"], ["Demo", "/demo"]].map(([label, href]) => <Link className={path === href ? "active" : ""} href={href} key={href}>{label}</Link>)}</nav></header><main className="shell">{children}</main><footer className="shell footer">LibraAI · grounded in your catalogue, transparent by design.</footer></>;
}
export function ResourceCard({ r, save }: { r: any; save?: () => void }) { return <article className="card resource"><span className="tag">{r.category}</span><h3>{r.title}</h3><p className="muted">{r.description}</p><div className="resource-footer"><span><span className="dot" />{r.provider}</span><span>{r.minutes} min</span>{save && <button aria-label="Save resource" onClick={save}>♡</button>}</div></article> }
