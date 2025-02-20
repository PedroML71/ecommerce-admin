import { FC } from "react";
import { format } from "date-fns";
import ColorsClient from "./components/client";
import prismadb from "@/lib/prismadb";
import { ColorsColumn } from "./components/columns";

interface pageProps {
  params: { storeId: string };
}

const ColorsPage: FC<pageProps> = async ({ params }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedColors: ColorsColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formatedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
