import { toast, Toaster } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

function Sample() {
  const isActive = true;
  return (
    <div className="p-5">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-300 text-black">다이얼로그</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>하이</DialogTitle>
          </DialogHeader>
          <div>body1</div>
        </DialogContent>
      </Dialog>

      <Popover>
        <PopoverTrigger asChild>
          {/* 안에 자식으로 컴포넌트를 사용하고싶을땐 aschild를 사용안하면 작동이되긴하지만  button컴포넌트가 한번더 랜더링 된다.*/}
          <Button>OPEN</Button>
        </PopoverTrigger>
        <PopoverContent>content!</PopoverContent>
      </Popover>

      {/* 토스터 기능 */}
      <Toaster />
      <Button
        onClick={() => {
          toast("토스트메세지", {
            position: "top-center",
          });
        }}
      >
        버튼
      </Button>

      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
          <CarouselItem className="basis-1/3">6</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button variant="destructive">버튼</Button>
      <Button variant="ghost">버튼</Button>
      <Button variant="link">버튼</Button>
      <Button variant="outline">버튼</Button>
      <Button variant="secondary">버튼</Button>

      <Input placeholder="입력..." />
      <Textarea placeholder="textArea" />

      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        primary
      </div>
      <div className="text-primary">primary</div>
      <div className="text-muted">primary</div>
      <div className="text-destructive">primary</div>
    </div>
  );
}

export default Sample;
