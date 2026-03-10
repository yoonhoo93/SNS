import Controller from "@/components/ui/counter/Controller";
import Viewer from "@/components/ui/counter/Viewer";

function Counter() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <Viewer />
      <Controller />
    </div>
  );
}

export default Counter;
