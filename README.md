#  [__📈 RESAS App__](https://resas-app-snowy.vercel.app/)

![Top Image](https://github.com/koutyuke/Yumemi_coding_test/assets/75959529/c7ebaaab-486e-4478-9ec1-e63fcf1643cc)

## __Summary__

株式会社ゆめみのサマーインターンのフロントエンドコーディング試験課題

`都道府県別の総人口推移グラフを表示するSPA(Single Page Application)`

### __試験内容__

[📔 Notion](https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d)

_[内容]_

1. RESAS(地域経済分析システム) APIの「都道府県一覧」APIから取得する
2. APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
4. 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する
    - 「総人口」の他に「年少人口」「生産年齢人口」「老年人口」も切り替えるUIを何らかの形で用意し表示できるようにすること（同時に表示する必要はない）

### __作成物__

1. `ElysiaJS`を用いて中間サーバーの作成:  中間サーバーとしてNext.jsの[__Route Handlers__](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)をそのまま使用するのではなくサーバーフレームワークの[🦊 __ElysiaJS__](https://elysiajs.com/)でマウントするような形で使用
    * [🪴 __Eden__](https://elysiajs.com/eden/overview.html)が使用できるの型安全にfetch処理が書ける
    * [🧪 __Unit Test__](https://elysiajs.com/patterns/unit-test.html)が容易に書くことができる
    * [🔌 __Plugin__](https://elysiajs.com/plugins/overview.html)を使用することができる

2. `React Server Component`の使用: `RSC`を使用することによってサイトにアクセスしてからのレスポンス時間を短縮しUXを向上させせる
    * [__⏳ PageSpeed Insights__](https://pagespeed.web.dev/analysis/https-resas-app-snowy-vercel-app/1562xh481p?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=ja&utm_source=lh-chrome-ext)での結果、携帯電話・デスクトップ両方とも90後半を記録

3. `a11y`にも配慮: `aria`ラベルや`alt`ラベルなどを適切に使用
    * [__⏳ PageSpeed Insights__](https://pagespeed.web.dev/analysis/https-resas-app-snowy-vercel-app/1562xh481p?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=ja&utm_source=lh-chrome-ext)での結果、携帯電話・デスクトップ両方とも90後半を記録

4. `GitHub Actions`の使用: `test`や`build`をデプロイ前に行うように設定
    * [最近のPR](https://github.com/koutyuke/Yumemi_coding_test/actions/runs/9252886344)
    * 適切にCacheを用いることにより高速化を実現

5. `🍞 Bun`の使用: runtime, pmとして__Bun__を使用

6. [🥞 __Feature-Sliced Design__](https://feature-sliced.design/)の使用: フロントエンドのアーキテクチャとして`FSD`を使用しディレクトリ構成もこれに準拠した形で作成
    * 各レイヤーの特徴を押さえそれに沿ってコンポーネントやユーティリティ関数を作成
    * レイヤー間で依存関係を持つ際にはFSDの制約の範囲内で行った

7. `Storybook`の導入: 全てのコンポーネントにsbを作成
    * sbのディレクトリわけをFSDが見やすくなるように工夫


## Tech Stack

```txt
Bun v1.1.9
Typescript v5系

Next.js v14系
ElysiaJS v1系
  └ Eden v1系
Tailwindcss v3系
Storybook v8系
jotai v2系
recharts v2系
react-query v5系
```

## Performance

__PageSpeed Insights__

[_Link_](https://pagespeed.web.dev/analysis/https-resas-app-snowy-vercel-app/1562xh481p?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=ja&utm_source=lh-chrome-ext)

| Mobile | Desktop |
|----| ----| 
| ![image](https://github.com/koutyuke/Yumemi_coding_test/assets/75959529/d6f7ca93-7bd5-48e8-b2a9-e6ccdba7b4a7) | ![image](https://github.com/koutyuke/Yumemi_coding_test/assets/75959529/6bdfde5f-5b12-4504-86df-fdfd2d408e85)|

## Building

__Bun__

BunのRuntimeマネージャーとして[__proto__](https://moonrepo.dev/proto)を使用しています。`proto`を使用していない場合は[`.prototools`](https://github.com/koutyuke/Yumemi_coding_test/blob/main/.prototools)にあるbunのバージョンをご使用ください。

```sh

proto use

```

__Install__

```sh
bun i
```

__Development__

```sh
bun dev
```

__Build__

```sh
bun build
```
```sh
bun start
```

__Lint__

```sh
bun lint

or

bun lint:fix
```

__format__
```sh
bun fmt

or

bun fmt:fix
```
__Storybook__

```sh
bun sb:dev
```

## その他

開発期間 5日