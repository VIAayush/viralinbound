import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/content";

export const metadata: Metadata = {
  title: "SuperShowroom — Digital Product Showroom",
  description:
    "SuperShowroom is a digital showroom experience that helps businesses present their products in a more structured and engaging way.",
};

export default function SuperShowroomPage() {
  const product = getProduct("supershowroom")!;
  return <ProductDetail product={product} />;
}
