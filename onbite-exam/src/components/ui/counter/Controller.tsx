import { useDecrease, useIncrease } from "@/hook/count";
import { Button } from "../button";

function Controller() {
  const increase = useIncrease();
  const decrease = useDecrease();

  return (
    <div>
      <Button onClick={increase}>증가</Button>
      <Button onClick={decrease}>감소</Button>
    </div>
  );
}

export default Controller;
