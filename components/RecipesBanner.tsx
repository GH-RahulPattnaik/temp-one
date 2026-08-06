import Image from "next/image";

export default function RecipesBanner() {
  return (
    <section className="container-x mt-20">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative aspect-[21/9]">
          <Image
            src="/assets/categories/recipes.png"
            alt="Delicious recipes"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-8 sm:px-14">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Delicious Recipes
          </h2>
          <a href="#" className="btn bg-white text-brand hover:bg-cream">
            Explore All
          </a>
        </div>
      </div>
    </section>
  );
}
