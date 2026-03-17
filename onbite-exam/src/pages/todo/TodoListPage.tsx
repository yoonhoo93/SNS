import TodoEditor from "@/components/todo-list/TodoEditor";
import TodoItem from "@/components/todo-list/TodoItem";
import { useTodosQuery } from "@/hook/querys/querys";

function TodoListPage() {
  /* 기존 리액트에서 불러오는법
  const [data, setData] = useState<Todo[]>([]);
  const [loding, setIsLoding] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoding(true);
    try {
      const data = await fetchTodos();
      setData(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoding(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); */

  /* 리액트 쿼리 사용법 커스텀 훅 */
  const { data, isLoading, error } = useTodosQuery();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">todoListPage</h1>
      <TodoEditor />

      {data!.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default TodoListPage;
