import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gifting Solutions — Corporate Gifting Workflow",
  description:
    "Gifting Solutions connects catalogue, client management, quotations, orders and order tracking into one corporate gifting workflow.",
};

export default function GiftingSolutionsPage() {
  const product = getProduct("gifting-solutions")!;
  return <ProductDetail product={product} />;
}
