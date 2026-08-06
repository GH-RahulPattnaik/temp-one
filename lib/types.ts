export type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  unit: string;
  rating: number;
  reviewCount: number;
  image: string;
};

export type SimpleCategory = {
  id: string;
  label: string;
  image: string;
};

export type NavGroup = {
  label: string;
  items: string[];
};

export type Article = {
  id: string;
  title: string;
  date: string;
  image: string;
};

export type EventItem = {
  id: string;
  title: string;
  location: string;
  schedule: string;
};

export type DeliveryFeature = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type CartLine = {
  productId: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
};
