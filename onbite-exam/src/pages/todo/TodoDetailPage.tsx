import { useTodoById } from "@/hook/querys/useTodoById";
import React from "react";
import { useParams } from "react-router";

function TodoDetailPage() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useTodoById(Number(id));

  if (isLoading) return <>로딩중입니다...</>;
  if (error || !data) return <>데이터가 없습니다....</>;

  return (
    <div>
      TODO 상세페이지{id}/{data.id}/{data.content}
    </div>
  );
}

export default TodoDetailPage;
