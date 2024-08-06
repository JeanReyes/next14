import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";

export default function HomeMain () {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="mt-2 text-xl">Información general</span>
      <WidgetsGrid/>
    </div>
  );
}