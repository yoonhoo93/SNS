import { Outlet, Route, Routes } from "react-router";
import IndexPage from "./pages/IndexPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Counter from "./pages/Counter";
import TodoListPage from "./pages/todo/todoListPage";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}></Route>
      <Route path="/counter" element={<Counter />}></Route>
      <Route path="/todolist" element={<TodoListPage />}></Route>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
