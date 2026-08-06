import Image from "next/image";
import { articles } from "@/lib/data";

export default function Articles() {
  return (
    <section className="container-x mt-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="section-heading">Latest Articles</h2>
        <a href="#" className="text-sm font-medium text-brand hover:underline">
          Visit the blog
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {articles.map((article) => (
          <a key={article.id} href="#" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-xs text-neutral-500">{article.date}</p>
            <h3 className="mt-1 font-display text-lg text-neutral-900 group-hover:text-brand">
              {article.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
