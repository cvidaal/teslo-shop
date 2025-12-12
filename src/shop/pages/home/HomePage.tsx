import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/data/products.data";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";

export const HomePage = () => {
  return (
    <div>
      <CustomJumbotron title="Todos los productos" />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </div>
  );
};
