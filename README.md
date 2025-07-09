<p align="center">
    <a href="https://nextjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" height="200"></a>
</p>

<h1 align="center">ACON</h1>

<p align="center">
    <a href="https://nextjs.org/">Next.js</a> based frontend client for <a href="https://www.acon3d.com">ACON</a>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Node.js-v20.16.0-green?logo=nodedotjs">
    <img src="https://img.shields.io/badge/yarn-v1.22.22-288fbc?logo=yarn">
    <img src="https://img.shields.io/badge/Next.js-14.2.6-black?logo=nextdotjs">
    <img src="https://img.shields.io/badge/React-18.3.0-017fa6?logo=react">
    <a href="https://github.com/carpenstreet/np-client-playground"><img src="https://img.shields.io/badge/GitHub-%23121011?logo=github&logoColor=white"></a>
</p>

## Installation

```bash
# install dependency
$ yarn install

# install production-dependency only
$ yarn install --production
```

## Running the app

```bash
# run development mode
$ yarn dev

# run build
$ yarn build

# run production server
$ SET NODE_ENV=production yarn start
```

## Getting Started

```bash
APP
├── README.md
├── app
│   ├── error.tsx
│   ├── favicon.ico
│   ├── global-error.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── ping
│       ├── _components
│       │   ├── _client
│       │   │   ├── ErrorBoundaryPing.tsx
│       │   │   ├── ErrorFallbackPing.tsx
│       │   │   ├── LoadingPing.tsx
│       │   │   └── SuccessPing.tsx
│       │   ├── _server
│       │   │   └── FetcherPing.tsx
│       │   ├── components.type.ts
│       │   └── index.ts
│       └── page.tsx
├── next-env.d.ts
├── next.config.js
├── package.json
├── public
│   ├── next.svg
│   └── vercel.svg
├── shared
│   ├── components
│   │   └── general
│   │       └── Jam
│   │           ├── Jam.type.ts
│   │           ├── Main
│   │           │   └── Main.tsx
│   │           └── index.ts
│   ├── consts
│   │   └── common
│   │       ├── index.ts
│   │       └── language.ts
│   ├── hooks
│   │   └── effect
│   │       └── useLocalStorage
│   │           ├── index.ts
│   │           ├── useLocalStorage.ts
│   │           └── useLocalStorage.type.ts
│   ├── instance
│   │   ├── axios
│   │   │   ├── axios.ts
│   │   │   ├── axios.type.ts
│   │   │   └── index.ts
│   │   └── query
│   │       ├── index.ts
│   │       └── query.ts
│   ├── providers
│   │   ├── RootLayout
│   │   │   ├── Content
│   │   │   │   ├── Content.style.ts
│   │   │   │   └── Content.tsx
│   │   │   ├── Footer
│   │   │   │   ├── Footer.style.ts
│   │   │   │   └── Footer.tsx
│   │   │   ├── Header
│   │   │   │   ├── Header.style.ts
│   │   │   │   └── Header.tsx
│   │   │   ├── Main
│   │   │   │   ├── Main.style.ts
│   │   │   │   └── Main.tsx
│   │   │   ├── RootLayout.type.ts
│   │   │   └── index.ts
│   │   ├── RootQuery
│   │   │   ├── Devtools
│   │   │   │   └── Devtools.tsx
│   │   │   ├── Main
│   │   │   │   └── Main.tsx
│   │   │   ├── RootQuery.const.ts
│   │   │   ├── RootQuery.hook.ts
│   │   │   ├── RootQuery.type.ts
│   │   │   └── index.ts
│   │   └── RootStyle
│   │       ├── Cache
│   │       │   └── Cache.tsx
│   │       ├── Main
│   │       │   └── Main.tsx
│   │       ├── RootStyle.const.ts
│   │       ├── RootStyle.type.ts
│   │       ├── Theme
│   │       │   └── Theme.tsx
│   │       └── index.ts
│   ├── queries
│   │   └── development
│   │       ├── development.key.ts
│   │       ├── development.type.ts
│   │       ├── index.ts
│   │       └── usePing
│   │           ├── index.ts
│   │           ├── usePing.ts
│   │           ├── usePing.type.ts
│   │           └── usePing.util.ts
│   └── styles
│       ├── acon
│       │   ├── breakpoint.ts
│       │   ├── font.ts
│       │   ├── global.ts
│       │   ├── index.ts
│       │   └── theme.ts
│       ├── error.css
│       └── reset.css
├── tsconfig.json
├── utils
│   ├── errors
│   │   ├── custom-network-error.ts
│   │   └── index.ts
│   ├── helpers
│   │   ├── query.ts
│   │   └── store.ts
│   ├── mocks
│   │   ├── browser.ts
│   │   ├── controllers.ts
│   │   ├── development
│   │   │   ├── index.ts
│   │   │   └── ping.ts
│   │   ├── handlers.ts
│   │   ├── http.ts
│   │   ├── index.ts
│   │   ├── server.ts
│   │   └── setup.ts
│   └── types
│       ├── dx.d.ts
│       ├── selector
│       │   └── key.ts
│       ├── store.d.ts
│       └── theme.d.ts
└── yarn.lock

```
