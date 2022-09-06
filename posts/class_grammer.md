---
title: TypeScript クラス宣言 と クラス式の違い
publish_date: 2022-09-01
---

## 1. 初めに
プロを目指す人のためのTypeScript入門のクラス宣言の章にて興味深いことが述べられていたので簡単にまとめる。

## 2. クラス宣言とクラス式の違い
結論から言うとクラス宣言とクラス式の違いは型として扱えるかどうか。

## 3. クラス宣言とクラス式の書き方は？
そもそもどう書くのかあまり理解してなかったので簡単に記述してみる。
### クラス宣言
```typescript
class User {
    name: string = '';
    age: number = 0;

    isAdult() {
        return this.age >= 20;
    }
}
```
### クラス式
```typescript
const User = class {
    name: string = '';
    age: number = 0;

    isAdult() {
        return this.age >= 20;
    }
}
```
試しに書いてもらうとわかるがどちらも宣言可能である。

## 4.クラス式は型として宣言できない
もう記載してしまっているが、クラス宣言は型として使用することができない。
試してみた。

```typescript
const User = class {
    name: string = '';
    age: number = 0;

    isAdult() {
        return this.age >= 20;
    }
}

const firstUser = new User();

const secondUser: User = {
    name: 'secondUserName',
    age: 22,
    isAdult: () => true
```
おそらく以下のようなコンパイルエラーが発生する
```
'User' refers to a value, but is being used as a type here. Did you mean 'typeof User'?ts(2749)
```
不便なので、特に事情がなければクラス宣言でクラスを作るべきとのこと。。。