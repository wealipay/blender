"use client";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus
} from "lucide-react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all"
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts"
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes"
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories"
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags"
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses"
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets"
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves"
  }
];
const Loading = () => <div>全局加载中...</div>;
const Categories = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  return (
    <Suspense fallback={<Loading />}>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 rounded-lg p-2 mb-4 text-sm">
      {categories.map(category => (
        <div
          className={`flex justify-center items-center gap-2 rounded-md cursor-pointer px-2 py-1 ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={category.name}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
    </Suspense>
  );
};
export default Categories;
