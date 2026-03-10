import { useCountStore } from "@/store/count";

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncrease = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecrease = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
