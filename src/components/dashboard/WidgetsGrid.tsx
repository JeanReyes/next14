'use client'

import { useAppSelector } from "@/app/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";


export const WidgetsGrid = () => {

  const count = useAppSelector(store => store.counter.count);

  return (
    <div className="flex flex-wrap items-center justify-center">
      <SimpleWidget
        title={count}
        subTitle="Unidades"
        label="Carrito de compras"
        href="/dashboard/counter"
        icon={<IoCartOutline size={50} />}
      />
      {/* <SimpleWidget /> */}
    </div>
  );
}
