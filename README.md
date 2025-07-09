# Gemini와 함께하는 코드베이스

이 저장소는 Gemini AI와 협업하여 개발된 코드베이스입니다. Gemini의 지능적인 지원을 통해 효율적이고 체계적인 개발 프로세스를 지향합니다.

## 프로젝트 구조

이 프로젝트는 다음과 같은 디렉토리 구조를 가집니다:

```
. (프로젝트 루트)
├── app/                  # Next.js App Router 관련 파일
│   ├── actions.ts
│   ├── error.tsx
│   ├── favicon.ico
│   ├── global-error.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── [lang]/           # 다국어 지원을 위한 언어별 라우트
│   │   ├── layout.tsx
│   │   ├── example/
│   │   ├── product/
│   │   └── promotions/
│   └── api/              # API 라우트
│       ├── auth/
│       ├── fetch-metadata/
│       └── translate/
├── core/                 # 핵심 로직 및 디자인 시스템
│   ├── design-systems/   # 디자인 시스템 컴포넌트 및 유틸리티
│   ├── shared/           # 공유 컴포넌트, 훅, 서비스
│   ├── spreadsheet/      # 스프레드시트 관련 파일
│   └── utils/            # 공통 유틸리티 함수
├── public/               # 정적 파일 (이미지, 폰트 등)
├── shared/               # 재사용 가능한 컴포넌트 및 설정
│   ├── atom-components/  # 재사용 가능한 아토믹 UI 컴포넌트
│   ├── business-components/ # 비즈니스 로직을 캡슐화한 컴포넌트
│   ├── configs/          # 애플리케이션 설정
│   ├── consts/           # 애플리케이션 전반의 상수
│   ├── providers/        # React 컨텍스트 프로바이더
│   └── stores/           # 글로벌 상태 관리 (Zustand 스토어)
└── utils/                # 유틸리티 및 미들웨어
    ├── locales/          # 지역화 파일
    └── middlewares/      # Next.js 미들웨어 함수
```

## Gemini 개발 가이드라인 요약

이 프로젝트는 `GEMINI.md`에 명시된 엄격한 개발 가이드라인을 따릅니다. 다음은 주요 내용의 요약입니다:

### 필수 사항
*   모든 컴포넌트는 클라이언트 컴포넌트(`use client` 지시어 사용)로 작성되어야 합니다.
*   `page.tsx`의 `params` 속성에는 항상 Promise를 사용해야 합니다.
*   플레이스홀더 이미지에는 유효한 `picsum.photos` 스톡 이미지를 사용합니다.
*   정해진 디렉토리 및 파일 구조를 엄격히 준수해야 합니다.
*   각 파일 내의 코드 구성 및 컨벤션을 세심하게 지켜야 합니다.
*   파일 구조를 따를 수 없거나 모호한 상황에서는 사용자로부터 명시적인 승인을 받아야 합니다.

### 권장 라이브러리
*   `dayjs`: 효율적인 날짜 및 시간 처리
*   `ts-pattern`: 깔끔하고 타입 안전한 분기 로직
*   `Next.js fetch`: Next.js 내장 `fetch` 함수 활용 (캐싱 및 재검증)
*   `zustand`: 경량 글로벌 상태 관리
*   `react-use`: 자주 사용되는 React 훅
*   `es-toolkit`: 견고한 유틸리티 함수
*   `Icons`: `core/design-systems/components/design-icon`의 아이콘 우선 사용. 없을 경우 `lucide-react` 사용.
*   `yup`: 스키마 유효성 검사 및 데이터 무결성
*   `UI Components`: `core/design-systems`의 컴포넌트 우선 사용. 없을 경우 `@mui/material` 사용.
*   `react-hook-form`: 폼 유효성 검사 및 상태 관리

### 핵심 개발 원칙
*   **단순성, 가독성, 유지보수성, 테스트 용이성, 재사용성**을 중요하게 생각합니다.
*   함수형 프로그래밍 패러다임을 지향하며, 불변성(Immutability)을 유지합니다.
*   조기 반환(Early Returns), 조건부 클래스(Conditional Classes), 설명적인 이름 사용을 권장합니다.

### 코드 스타일 가이드라인
*   타입 안전성을 위해 TypeScript를 사용합니다.
*   ESLint 설정에 정의된 코딩 표준을 따릅니다.
*   모든 컴포넌트는 반응형 및 접근성을 고려하여 작성합니다.
*   AI 생성 주석 사용을 최소화하고, 명확한 변수 및 함수 이름을 사용합니다.
*   사용자 입력을 항상 검증하고 오류를 적절하게 처리합니다.

### 성능
*   성급한 최적화를 피하고, 최적화 전에 프로파일링을 수행합니다.

### 주석 및 문서화
*   함수의 목적을 주석으로 설명하고, "무엇을"이 아닌 "왜"를 문서화합니다.

### Next.js
*   `page.tsx`의 `params` 속성에는 Promise를 사용해야 합니다.

### 패키지 매니저
*   `yarn`을 사용합니다.

### 한글 텍스트
*   생성된 코드에 UTF-8 기준으로 깨지는 한글이 없는지 확인하고 수정합니다.

이 가이드라인을 준수하여 고품질의 코드를 유지하고 효율적인 개발을 목표로 합니다.
