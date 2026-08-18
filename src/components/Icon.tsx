type IconName = "phone" | "mail" | "pin" | "arrow" | "car" | "key" | "swap" | "finance" | "search" | "chat" | "clock" | "check";

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .4 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="1"/><path d="m2 6 10 7L22 6"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    car: <><path d="m3 14 2-6h14l2 6v5h-2v-2H5v2H3z"/><path d="M5 14h14M7 8l2-3h6l2 3"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/></>,
    key: <><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l2 2M18 5l2 2"/></>,
    swap: <><path d="M4 7h14l-3-3M20 17H6l3 3"/></>,
    finance: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 9h18M7 15h3"/></>,
    search: <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,
    chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 10h8M8 14h5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  };
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
