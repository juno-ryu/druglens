# Core

이 저장소는 Carpen Products의 디자인 시스템을 포함하고 있습니다.
카펜 웹서비스에서 공용으로 사용할 수 있는 재사용 가능한 UI 컴포넌트와 유틸리티들을 제공합니다.

## 프로젝트 구조

디자인 시스템에는 버튼, 아코디언, 타이포그래피, 폼 컨트롤 등 다양한 공통 컴포넌트가 포함되어 있으며, 각각의 디렉토리에 정리되어 있어 유지보수와 사용이 쉽습니다. 현재 디렉토리 구조는 다음과 같습니다:

### 컴포넌트

디자인 시스템의 컴포넌트들은 Material-UI(MUI)를 기반으로 제작되었습니다. 이를 통해 일관된 스타일과 확장성을 유지하며, 다양한 UI 요구 사항을 충족시킬 수 있습니다.

```markdown
components/
├── Accordion/
├── AccordionDetails/
├── AccordionSummary/
├── Box/
├── Breadcrumbs/
├── Breakpoint/
├── Button/
├── Checkbox/
├── DesignIcon/
├── Divider/
├── FormControl/
├── FormControlLabel/
├── FormGroup/
├── FormHelperText/
├── FormLabel/
├── Grid/
├── InputAdornment/
├── InputBase/
├── InputLabel/
├── Link/
├── Menu/
├── MenuItem/
├── MenuList/
├── Pagination/
├── PaginationItem/
├── Palette/
├── Radio/
├── RadioGroup/
├── Select/
├── Skeleton/
├── Stack/
├── Stat/
├── SvgIcon/
├── Tab/
├── TextField/
├── Tooltip/
└── Typography/
```

- **Accordion**: `Accordion`, `AccordionDetails`, `AccordionSummary` 컴포넌트를 포함합니다.
- **Box**: 레이아웃을 위한 간단한 래퍼 컴포넌트입니다.
- **Button**: 다양한 사용 사례에 맞는 버튼 스타일들을 포함합니다.
- **Form Controls**: `FormControl`, `FormLabel`, `Checkbox`, `Radio` 등 효율적으로 폼을 구성할 수 있는 컴포넌트를 제공합니다.
- **Typography**: 애플리케이션의 일관성을 유지하기 위한 재사용 가능한 타이포그래피 스타일입니다.
- **기타**: `Breadcrumbs`, `Menu`, `Skeleton`, `Tooltip` 등 다양한 UI 요구 사항을 충족하는 추가 컴포넌트들입니다.

### 유틸리티 (추가예정)

- **Shared**: 여러 프로젝트에서 재사용 가능한 `components`, `hooks`, `providers` 등의 공유 리소스를 포함합니다.
- **Utils**: 에러 처리, 헬퍼 함수, 타입 등을 포함한 유틸리티 함수 모음으로, 개발 과정을 간소화합니다.

## 설치 방법

Carpen Products는 acon, hub, admin 프로젝트 내부에서
서브모듈 형태로 참조하여 사용 중입니다. 관련 프로젝트의 GitHub 링크는 다음과 같습니다:

- [acon 프로젝트](https://github.com/carpenstreet/acon)
- [hub 프로젝트](https://github.com/carpenstreet/hub)
- [admin 프로젝트](https://github.com/carpenstreet/admin)

해당 프로젝트 내에서 디자인 시스템을 사용하려면 단순히 디자인 시스템 저장소를 클론 받으면 됩니다:

```sh
git clone https://github.com/carpenstreet/core.git
```

## 사용 방법

다음과 같이 컴포넌트를 임포트하여 사용할 수 있습니다:

```tsx
import { Box, Button, Typography } from '@/core/design-systems';

const ExampleComponent = () => (
  <Box>
    <Typography variant="h1">Hello, Carpen!</Typography>
    <Button onClick={() => alert('Clicked!')}>Click Me</Button>
  </Box>
);
```

## 향후 계획

현재 활발히 개발 진행 중이며, Carpen Products의 다양한 프로젝트의 요구를 충족하기 위해 새로운 컴포넌트와 유틸리티가 계속 추가될 예정입니다. UI 컴포넌트 외에도 `stores`, `hooks` 등의 공용 기능도 지속적으로 확장할 예정입니다.
