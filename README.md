# SNS 프로젝트

---

# 프로젝트 초기 세팅

## 1. 프로젝트 생성

```bash
npm create vite@6.5.0 프로젝트명
```

> `vite@6.5.0` : Vite 버전을 **6.5.0으로 지정하여 프로젝트를 생성**

프로젝트 생성 후 이동

```bash
cd 프로젝트명
```

---

# TailwindCSS 설치

## 1. TailwindCSS 및 Vite 플러그인 설치

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 2. Vite 설정

`vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
});
```

---

## 3. TailwindCSS 적용

`src/index.css`

```css
@import "tailwindcss";
```

---

# Prettier + TailwindCSS 정렬 설정

## 1. Prettier 및 Tailwind Plugin 설치

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

---

## 2. `.prettierrc` 설정

프로젝트 루트에 `.prettierrc` 파일 생성

```json
{
	"plugins": ["prettier-plugin-tailwindcss"]
}
```

> TailwindCSS 클래스명이 **자동으로 정렬되어 가독성이 좋아진다.**

---

# shadcn/ui 설치

## shadcn/ui를 사용하는 이유

shadcn/ui는 **완성된 UI 라이브러리라기보다 "컴포넌트 코드 복사형 UI 시스템"**이다.

### 장점

- **커스터마이징이 자유롭다**

다른 UI 라이브러리(MUI, Ant Design 등)는 내부 구조를 수정하기 어렵지만
shadcn/ui는 **컴포넌트 코드가 프로젝트 내부에 생성되기 때문에 자유롭게 수정 가능하다.**

- **TailwindCSS 기반**

TailwindCSS와 완전히 호환되기 때문에
**스타일 커스터마이징이 매우 쉽다.**

- **불필요한 번들 사이즈 감소**

필요한 컴포넌트만 설치하기 때문에
**번들 사이즈가 불필요하게 커지지 않는다.**

- **Radix UI 기반**

접근성(Accessibility)이 잘 설계된 **Radix UI**를 기반으로 만들어져
**키보드 접근성, 포커스 관리 등이 기본적으로 지원된다.**

---

## 1. CLI 실행

```bash
npx shadcn@latest init
```

설치 과정에서 몇 가지 옵션을 선택하게 된다.
보통 기본 설정을 사용하면 된다.

---

## 2. 컴포넌트 설치

필요한 컴포넌트를 선택적으로 추가할 수 있다.

```bash
npx shadcn@latest add button
```

예시

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
```

설치된 컴포넌트는 아래 경로에 생성된다.

```
src/components/ui
```

---

# React Router 설치

React Router는 **페이지 이동(라우팅)을 관리하는 라이브러리**이다.

예

```
홈
로그인
회원가입
프로필
게시글
```

---

## 1. React Router 설치

```bash
npm install react-router
```

> React Router v7부터 `react-router-dom`이 **react-router로 통합되었다.**

---

## 2. Router 설정

`src/main.tsx`

```tsx
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
```

---

# React Query 설치

React Query는 **서버 데이터(API) 상태를 관리하는 라이브러리**이다.

예

```
게시글 목록
댓글
유저 정보
```

---

## 1. React Query 설치

```bash
npm install @tanstack/react-query
```

---

## 2. QueryClient 설정

`src/main.tsx`

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>,
);
```

> React Query는 **Provider로 감싸야 전역에서 사용할 수 있다.**

---

# Zustand 설치

Zustand는 **클라이언트 전역 상태 관리 라이브러리**이다.

React Query와 역할 차이

```
React Query → 서버 상태
Zustand → 클라이언트 상태
```

---

## 1. Zustand 설치

```bash
npm install zustand
```

---

## 2. Store 생성 예시

`src/stores/useAuthStore.ts`

```ts
import { create } from "zustand";

interface AuthState {
	user: string | null;
	login: (user: string) => void;
	logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
	user: null,

	login: (user) => set({ user }),

	logout: () => set({ user: null }),
}));

export default useAuthStore;
```

---

# Axios 설치

Axios는 **HTTP 요청을 보내기 위한 라이브러리**이다.

React Query와 함께 **실무에서 가장 많이 사용하는 API 요청 방식**이다.

---

## 1. Axios 설치

```bash
npm install axios
```

---

## 2. Axios 기본 설정

`src/lib/axios.ts`

```ts
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000",
	withCredentials: true,
});

export default api;
```

---

## 3. React Query와 함께 사용 예시

```tsx
import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

function Posts() {
	const { data } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const res = await api.get("/posts");
			return res.data;
		},
	});

	return (
		<div>
			{data?.map((post) => (
				<div key={post.id}>{post.title}</div>
			))}
		</div>
	);
}
```

---

# ▶️ 프로젝트 실행

```bash
npm install
npm run dev
```

---

# 프로젝트 핵심 스택

```
React
Vite
TailwindCSS
shadcn/ui
React Router
React Query
Zustand
Axios
```

---

```
React → UI
React Router → 페이지 이동
React Query → 서버 데이터 관리
Zustand → 전역 상태 관리
Axios → API 요청
TailwindCSS → 스타일
shadcn/ui → UI 컴포넌트
```

---
