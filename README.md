<p align="center">
  <a href="http://sexy-bochang.now.sh/" target="blank"><img src="https://sexy-bochang.now.sh/images/og.png" width="120" alt="bochang Logo" /></a>
</p>

<p align="center">김보창을 위한 외주 프로젝트</p>

<p align="center">
  <img src="https://img.shields.io/badge/d3.js-000000?style=for-the-badge&logo=d3dotjs&color=orange&logoColor=white" alt="D3.js" />
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=black&color=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

## Introduction

정해진 규격의 json을 입력해 Radial Tidy Tree를 렌더링합니다. 미리 입력된 Example 데이터로 렌더링해볼 수도 있습니다. [d3.js](https://www.npmjs.com/package/d3)를 사용했습니다.

[Live Demo](http://sexy-bochang.now.sh/)

**2021-08-03 추가**<br>
D3Client를 추가해 리팩토링 해봤습니다. 목적은 다음과 같습니다.

1. 리팩터링 2판에서 읽어본 기법들 적용해보기.
2. SOLID 규칙을 적용해보기 (특히 Dependency Inversion)
3. 개발바닥 유튜브에서 향로님이 되도록 Class를 사용해보는게 좋다길래

## Getting Started

```shell
# clone
git clone https://github.com/greatSumini/d3-tree-visualization

cd d3-tree-visualization

npm install
# or
yarn install

npm run dev
# or
yarn dev
```

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FgreatSumini%2Fd3-tree-visualization)

## Ref

https://observablehq.com/@d3/radial-tidy-tree
