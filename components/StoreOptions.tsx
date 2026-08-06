import Image from "next/image";

const options = [
  {
    id: "pickup",
    icon: "/assets/icons/shop.png",
    title: "Picking up?",
    cta: "Select store",
  },
  {
    id: "delivery",
    icon: "/assets/icons/box.png",
    title: "Need delivery?",
    cta: "See estimates",
  },
];

export default function StoreOptions() {
  return (
    <section className="container-x -mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md"
        >
          <Image src={option.icon} alt="" width={40} height={40} className="h-10 w-10" />
          <div>
            <p className="font-medium text-neutral-900">{option.title}</p>
            <p className="text-sm text-brand underline underline-offset-2">{option.cta}</p>
          </div>
        </button>
      ))}
    </section>
  );
}
