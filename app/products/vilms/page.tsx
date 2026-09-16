import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/content";

export const metadata: Metadata = {
  title: "VILMS — Education & Institute Management",
  description:
    "VILMS is a digital platform designed to simplify education and institute management — student management, attendance, records, communication and reports.",
};

export default function VilmsPage() {
  const product = getProduct("vilms")!;
  return <ProductDetail product={product} />;
}
