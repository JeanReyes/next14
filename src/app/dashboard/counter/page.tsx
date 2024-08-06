
import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Shoping Cart',
  description: 'pagina con contador'
}

interface CounterResponse {
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("http://localhost:3000/api/counter").then((res) =>
    res.json()
  );

  return data;
};

const Counter = async () => {

  const {count} = await getApiCounter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito {count}</span>
      <CartCounter value={count} />
    </div>
  );
}

export default Counter