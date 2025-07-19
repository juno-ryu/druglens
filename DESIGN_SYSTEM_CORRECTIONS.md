# Design System 사용 시 주요 교정 사항

이 문서는 Gemini CLI 에이전트가 프로젝트의 `core/design-systems`를 사용하면서 발생했던 주요 오류와 그에 대한 교정 사항을 정리한 것입니다. 향후 유사한 실수를 방지하고, 디자인 시스템의 올바른 사용법을 숙지하기 위함입니다.

---

## 1. 컴포넌트 탐색 및 `.gitignore` 문제

**문제:** 초기 `core/design-systems/components` 디렉토리 탐색 시, `.gitignore` 설정으로 인해 내부 컴포넌트들이 보이지 않아 `@mui/material` 사용을 시도했습니다.

**교정:** `list_directory` 또는 `glob` 사용 시 `respect_git_ignore=False` 옵션을 사용하여 `.gitignore`에 의해 무시되는 파일들도 포함하여 탐색해야 합니다. `core/design-systems`에는 다양한 UI 컴포넌트가 존재합니다.

---

## 2. `Typography` 컴포넌트 `variant` 사용법

**문제:** `Typography` 컴포넌트의 `variant` prop을 `h1`과 같이 일반적인 HTML 태그명으로 사용하려고 했습니다.

**교정:** `core/design-systems/components/typography/typography.const.ts` 파일에 정의된 `variant` 토큰(예: `'headline/h1'`, `'title/title1'`, `'body/body3'`)을 정확히 사용해야 합니다.

**예시:**
```typescript
// 잘못된 사용
<Typography variant="h1">제목</Typography>

// 올바른 사용
<Typography variant="headline/h1">제목</Typography>
```

---

## 3. `core/design-systems` 컴포넌트 임포트 경로

**문제:** `core/design-systems` 내부의 개별 컴포넌트(예: `core/design-systems/components/box`)를 직접 임포트하려고 했습니다.

**교정:** `core/design-systems/index.ts` 파일에서 모든 주요 컴포넌트들을 `export default`로 내보내고 있으므로, `core/design-systems`에서 직접 구조 분해 할당하여 임포트하는 것이 올바르고 간결한 방법입니다.

**예시:**
```typescript
// 잘못된 사용
import { Box } from 'core/design-systems/components/box';
import { Button } from 'core/design-systems/components/button';

// 올바른 사용
import { Box, Button, TextField, Typography } from 'core/design-systems';
```

---

## 4. `TextField` 컴포넌트 `helperText` prop 타입

**문제:** `TextField` 컴포넌트의 `helperText` prop에 단순 문자열(`errors.drugName?.message`)을 직접 할당하려고 했습니다.

**교정:** `core/design-systems/components/text-field/text-field.type.ts` 파일에 정의된 바와 같이, `helperText`는 `{ key: string; withIcon: boolean; value: string; }[]` 형태의 배열을 기대합니다.

**예시:**
```typescript
// 잘못된 사용
<TextField helperText={errors.drugName?.message} />

// 올바른 사용
<TextField
  helperText={errors.drugName?.message ? [{ key: 'drugNameError', withIcon: false, value: errors.drugName.message }] : undefined}
/>
```

---

## 5. `react-hook-form`과 `ControlledTextField` 사용

**문제:** `react-hook-form`과 함께 `TextField`를 사용할 때, `register` 함수를 직접 사용하거나 `Controller` 컴포넌트로 래핑하려고 했습니다.

**교정:** 프로젝트에는 `core/shared/components/hook-form/controlled-text-field` 경로에 `ControlledTextField` 컴포넌트가 이미 존재합니다. `react-hook-form`과 연동되는 제어 컴포넌트이므로, 이를 사용하여 폼 필드를 관리해야 합니다.

**예시:**
```typescript
// 잘못된 사용 (register 직접 사용)
<TextField {...register('drugName')} />

// 잘못된 사용 (Controller 래핑)
<Controller
  name="drugName"
  control={control}
  render={({ field }) => <TextField {...field} />}
/>

// 올바른 사용
<ControlledTextField
  name="drugName"
  control={control}
  // ... 기타 TextField props
/>
```

---

## 6. `Button` 컴포넌트 `startIcon` 및 `endIcon` prop

**문제:** `Button` 컴포넌트에 아이콘을 추가할 때, `startIcon` 또는 `endIcon` prop의 존재를 인지하지 못했습니다.

**교정:** `core/design-systems`의 `Button` 컴포넌트는 `@mui/material`의 `ButtonProps`를 상속받으므로, `startIcon`과 `endIcon` prop을 사용하여 버튼 텍스트 앞뒤에 아이콘을 쉽게 추가할 수 있습니다. 이 prop들은 `React.ReactNode` 타입을 받습니다.

**예시:**
```typescript
import { Button, DesignIcon } from 'core/design-systems';

// 검색 버튼에 아이콘 추가
<Button type="submit" variant="contained" startIcon={<DesignIcon variant="Search" />}>
  검색
</Button>

// 삭제 버튼에 아이콘 추가 (IconButton 대신 Button의 endIcon 사용)
<Button variant="outlined" size="small" endIcon={<DesignIcon variant="CloseBold" />}>
  최근 검색어
</Button>
```
