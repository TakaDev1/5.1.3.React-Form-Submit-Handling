# 5.1.3.React-Form-Submit-Handling

## 目次

* [概要](#概要)
* [課題](#課題)
* [条件](#条件)
* [学習内容](#学習内容)
* [使用技術](#使用技術)
* [ディレクトリ構成](#ディレクトリ構成)
* [実装内容](#実装内容)
* [動作](#動作)
* [起動方法](#起動方法)

## 概要

Reactの`useState`を使用してチェックボックスの状態を管理し、ユーザーが同意した場合のみメッセージを表示するフォームを実装する練習アプリです。

チェックボックスの状態管理にはカスタムフックを使用し、フォームの表示とロジックを分離しています。

## 課題

### 問題文

チェックボックスを用意し、ユーザーが同意した場合のみTailwind CSSで黄色背景のメッセージ「同意済み」を表示するフォームを作成してください。

### 条件

1. TypeScriptで作成すること
2. `useState`でチェックボックスの状態を管理すること

## 学習内容

* `useState`によるチェックボックスの状態管理
* `boolean`型による状態管理
* `ChangeEvent`によるイベント型指定
* `event.target.checked`によるチェック状態の取得
* `onChange`によるチェックボックスの状態更新
* カスタムフックによるロジックの分離
* 条件付きレンダリング
* Tailwind CSSによるスタイリング

## 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS

## ディレクトリ構成

```text
src/
├── hooks/
│   └── useHandleCheck.ts
├── pages/
│   └── UserPage.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## 実装内容

### 1. チェック状態を管理

`useState`を使用してチェックボックスの状態を管理します。

```tsx
const [isChecked, setIsChecked] = useState<boolean>(false);
```

初期値は`false`に設定します。

### 2. チェック状態を取得

チェックボックスの変更イベントから`checked`の値を取得します。

```tsx
const handleCheck = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setIsChecked(event.target.checked);
};
```

`event.target.checked`には以下の値が入ります。

```text
チェックあり  → true
チェックなし  → false
```

### 3. カスタムフックから値を返す

フォームの状態とイベント処理をカスタムフックから返します。

```tsx
return {
  isChecked,
  handleCheck,
};
```

画面側では以下のように取得します。

```tsx
const { isChecked, handleCheck } = useHandleCheck();
```

### 4. チェック状態に応じて表示

`isChecked`が`true`の場合のみ「同意済み」を表示します。

```tsx
{isChecked && (
  <div className="bg-yellow-400 p-4">
    同意済み
  </div>
)}
```

## 動作

### チェック前

```text
□ 同意する
```

「同意済み」は表示されません。

### チェック後

```text
☑ 同意する

┌─────────────────┐
│ 同意済み        │
└─────────────────┘
```

チェックを外すと「同意済み」の表示も消えます。

## 起動方法

### パッケージのインストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。
