import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update-product.action";

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  //TODO: mutación controlar.
  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      console.log("Cuando todo sale bien", product);
      // Invalidar caché
      queryClient.invalidateQueries({
        queryKey: ["products"], // Para que se refresque la lista de productos
      });
      queryClient.invalidateQueries({
        queryKey: ["product", { id }], // Para que se refresque la lista de productos
      });

      // Actualizar queryData
      queryClient.setQueryData(["product", { id: product.id }], product);
    },
  });

  // const handleSubmitForm = async (productLike: Partial<Product>) => {
  //   console.log(productLike);
  // };

  return {
    ...query,
    mutation,
  };
};
