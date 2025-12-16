import { tesloApi } from "@/api/tesloApi";
import type { Product } from "@/interfaces/product.interface";

export const getProductByIdAction = async (id: string): Promise<Product> => {
  if (!id) throw new Error("Id is required");

  if (id === "new") {
    return {
      id: "new",
      title: "",
      description: "",
      price: 0,
      images: [],
      stock: 0,
      sizes: [],
      slug: "",
      gender: "men",
      tags: [],
    } as unknown as Product;
  }

  // Petición HTTP.
  const { data } = await tesloApi.get<Product>(`/products/${id}`);
  const images = data.images.map((image) => {
    if (image.includes("http")) return image;
    return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
  });

  return {
    ...data,
    images,
  };
};
