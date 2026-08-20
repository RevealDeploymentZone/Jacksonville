import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight
                size={14}
                strokeWidth={1.5}
                style={{ color: "#94a3b8" }}
                aria-hidden="true"
              />
            )}
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:underline"
                style={{ color: "#0B5563" }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#475569" }} aria-current={i === items.length - 1 ? "page" : undefined}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
