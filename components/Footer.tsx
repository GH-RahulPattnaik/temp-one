import { footerCategories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-0 border-t border-neutral-200 bg-white py-16">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-lg text-neutral-900">Local</h3>
          <p className="mt-3 text-sm text-neutral-500">
            Fresh products from local producers, delivered directly to your front door,
            daily.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Popular categories
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-500">
            {footerCategories.map((cat) => (
              <li key={cat}>
                <a href="#" className="hover:text-brand">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Main Store
          </h4>
          <p className="mt-3 text-sm text-neutral-500">Bhubaneswar, Odisha</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Quick links
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-500">
            {["Search", "About Us", "Delivery", "Our stores"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 border-t border-neutral-100 pt-6 text-xs text-neutral-400">
        © {new Date().getFullYear()} Local. All rights reserved.
      </div>
    </footer>
  );
}
