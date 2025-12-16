import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currencyFormatter } from "@/lib/currencyformatter";
import { useProduct } from "@/shop/hooks/useProduct";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  const { data, isLoading } = useProduct();
  const products = data?.products || [];

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  return (
    <>
      <div className="flex justify-between">
        <AdminTitle
          title="Productos"
          subtitle="Aquí puedes ver y administrar tus productos"
        />
        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((products) => {
            return (
              <TableRow key={products.id}>
                <TableCell>
                  <img
                    src={products.images[0]}
                    alt={products.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell>
                  <Link
                    to={`/admin/products/${products.id}`}
                    className="hover:underline "
                  >
                    {products.title}
                  </Link>
                </TableCell>
                <TableCell>{currencyFormatter(products.price)}</TableCell>
                <TableCell>{products.gender}</TableCell>
                <TableCell>{products.stock}</TableCell>
                <TableCell>{products.sizes.join(", ")}</TableCell>
                <TableCell className="text-right">
                  <Link to={`/admin/products/${products.id}`}>
                    <Button>
                      <PencilIcon />
                      Editar
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
