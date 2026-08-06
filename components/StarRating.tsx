import { Star } from "lucide-react";

export default function StarRating({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  if (!rating) return null;
  return (
    <div className="star-row" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          className={i < rating ? "fill-amber-500 text-amber-500" : "text-neutral-300"}
        />
      ))}
      <span className="ml-1 text-xs text-neutral-500">({reviewCount})</span>
    </div>
  );
}
