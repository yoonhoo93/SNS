### SNS 프로젝트

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

# ▶️ 프로젝트 실행

```bash
npm install
npm run dev
```
