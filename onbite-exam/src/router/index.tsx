import { createBrowserRouter, Outlet } from "react-router";
import IndexPage from "../pages/IndexPage";
import Counter from "@/pages/Counter";
import TodoListPage from "@/pages/todo/TodoListPage";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todoList",
    element: <TodoListPage />,
  },
  {
    path: "/signin",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
