
import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Shoping Cart',
  description: 'pagina con contador'
}

const Counter = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}

export default Counter