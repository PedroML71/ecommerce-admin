"use client";

import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/ui/heading";
import { DataTable } from "@/components/ui/data-table";
import { OrderColumn, columns } from "./columns";

interface clientProps {
  data: OrderColumn[];
}

const OrderClient: FC<clientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
      </div>

      <Separator />

      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
