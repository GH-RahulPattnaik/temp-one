import type {
  Article,
  DeliveryFeature,
  EventItem,
  NavGroup,
  Product,
  SimpleCategory,
} from "./types";

// All paths below map 1:1 to the /public asset structure that was provided:
// public/assets/{about-delivery,articles-contents,categories,hero,icons,kitchen-items,logos}
// public/banners, public/food-icons, public/products
// Swap the extension below if your source files aren't .png.

export const nav: NavGroup[] = [
  {
    label: "Produce",
    items: ["All", "Vegetables", "Meat", "Herbs & Aromatics"],
  },
  {
    label: "Dairy & Eggs",
    items: ["All", "Milk & Cream", "Eggs & Butter", "Cheese", "Yogurt & Cultured Dairy", "Plant-Based"],
  },
  {
    label: "Bakery",
    items: ["All", "Breads", "Buns & Rolls", "Bagels & Breakfast", "Gluten-Free"],
  },
  {
    label: "Drinks",
    items: ["All", "Coffee", "Tea & Elixirs", "Juices"],
  },
];

export const bestSellers: Product[] = [
  { id: "apple", name: "Apples", price: 110, unit: "per KG", rating: 5, reviewCount: 4, image: "/assets/categories/Apple.png" },
  { id: "banana", name: "Banana", price: 50, unit: "per Dozen", rating: 5, reviewCount: 4, image: "/assets/categories/Banana.png" },
  { id: "watermelon", name: "Watermelon", price: 70, unit: "per piece", rating: 5, reviewCount: 4, image: "/assets/categories/Watermelon.png" },
  { id: "maggi", name: "Maggi", price: 100, unit: "per Packet", rating: 5, reviewCount: 4, image: "/assets/categories/maggi.png" },
];

export const freshFood: Product[] = [
  { id: "fruit-salad", name: "Fruits Salad", price: 80, unit: "", rating: 4, reviewCount: 5, image: "/assets/categories/fruit-salad.png" },
  { id: "veg-salad", name: "Veg Salads", price: 100, unit: "", rating: 4, reviewCount: 4, image: "/assets/categories/veg-salads.png" },
];

export const hotDealCollections = [
  { id: "breads", title: "Finest Bread", eyebrow: "Fresh Everyday", image: "/assets/categories/organic-breads.png" },
  { id: "masalas", title: "Masalas", eyebrow: "Newly arrived!", image: "/assets/categories/organic-powders.png" },
  { id: "milks", title: "Pure Organic", eyebrow: "Collection", image: "/assets/categories/milks.png" },
];

export const shopByCategory: SimpleCategory[] = [
  { id: "fruits", label: "Fruits", image: "/assets/categories/mix-fruits.png" },
  { id: "vegetables", label: "Vegetables", image: "/assets/categories/vegetables.png" },
];

export const lifestyle = [
  { id: "vegan", label: "Vegan", tagline: "Plant based goodness", icon: "/assets/icons/vegan-icon.png" },
  { id: "gluten-free", label: "Gluten free", tagline: "Only whole foods that dont contain gluten", icon: "/assets/icons/Gluten-free.png" },
];

export const featureBanners = [
  { id: "bakery", eyebrow: "Whole Grain", title: "Bakery", tag: "Limited Availability", image: "/banners/image1.png" },
  { id: "produce", eyebrow: "Hand-Picked", title: "Fruit & Vegetables", tag: "Limited Availability", image: "/banners/image2.png" },
];

export const hotDealsProducts: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `cutting-board-${i + 1}`,
  name: "Cutting Board",
  price: 110,
  compareAtPrice: 200,
  unit: "",
  rating: 0,
  reviewCount: 0,
  image: "/assets/kitchen-items/cuttingboard.png",
}));

export const deliveryFeatures: DeliveryFeature[] = [
  { id: "pickup", title: "Local Pickup", description: "Get orders faster while avoiding shipping fees", image: "/assets/about-delivery/local-pickup.png" },
  { id: "delivery", title: "Local Delivery", description: "100% curbside recyclable boxes", image: "/assets/about-delivery/local-deliveries.png" },
  { id: "eater", title: "For Conscious Eaters", description: "We are supporting small farmers and producers", image: "/assets/about-delivery/eater.png" },
  { id: "food", title: "Delicious & New Food", description: "Feel great about what you eat", image: "/assets/about-delivery/new-food.png" },
];

export const articles: Article[] = [
  { id: "grilling", title: "11 Top Chef Grilling Recipes to Make This Summer", date: "July 10, 2023", image: "/assets/articles-contents/blog1.png" },
  { id: "fiber", title: "10 Ideas for a Healthy High Fiber Diet", date: "October 02, 2023", image: "/assets/articles-contents/blog2.png" },
  { id: "sweets", title: "Healthy Sweets?", date: "December 02, 2023", image: "/assets/articles-contents/blog3.png" },
];

export const events: EventItem[] = [
  { id: "cooking-contest", title: "Cooking Contest", location: "Kolkata, West Bengal", schedule: "Thursday, 3pm - 5pm" },
  { id: "cooking-class", title: "Cooking Class", location: "Hyderabad, Telangana", schedule: "Friday, 5pm - 7pm" },
  { id: "contest", title: "Contest", location: "Chennai, Tamil Nadu", schedule: "Saturday, 7pm - 9pm" },
];

export const testimonial = {
  name: "R Sharma",
  role: "Customer",
  quote:
    "Great products. Always fresh, eco stuff that I can't find anywhere else in the city. I would not imagine my daily life without them!",
};

export const maggiProduct = {
  id: "maggi-noodles",
  name: "Maggi",
  price: 10,
  compareAtPrice: 12,
  image: "/products/maggi.png",
  description:
    "Maggi is made by a process similar to soy sauce, except with fermented wheat protein, so it has a deep, rich, and salty savoriness that cannot come from regular old salt and pepper. The best way to describe its actual flavor is \u201croasty.\u201d",
  variants: [
    { id: "regular", label: "Regular Pack", price: 10, compareAtPrice: 12 },
    { id: "family", label: "Family Pack", price: 38, compareAtPrice: 45 },
  ],
};

export const footerCategories = ["Breads & Bakery", "Fruits", "Vegetables", "Noodles", "Masalas", "Powder"];
