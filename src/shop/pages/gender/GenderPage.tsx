import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/data/products.data";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useParams } from "react-router";

export const GenderPage = () => {
  const { gender } = useParams();

  const genderLabel =
    gender === "men" ? "Hombre" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  );
};
