
以下のエラーを知る。
```tsx
// Assign object to a variable before exporting as module default
// export defaultと変数宣言は同時に行わないこと

export default {
 ...
}
```

型のexportはできるみたい。

```tsx
export default {
 ...
} as ComponentMeta<typeof Button>
```

https://typescriptbook.jp/reference/values-types-variables/type-assertion-as


storybookのpropsが機能していないが、まだ分かっていない。
packageを同じにしても失敗する。componentsのファイルを揃えても失敗する

storybookでも登場する「bind」をあまり理解していない。
まずTemplateという特定のpropsを持つjsxを返す関数を作成する。
そして、それを複製する用途でbindを使用している感じなのかな。
https://storybook.js.org/docs/react/writing-stories/args
https://stackoverflow.com/questions/64105670/is-it-necessary-to-have-inside-template-bind-while-making-stories-in-stor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

```
bindはthisと関係していること、bindを利用することである関数から新しい関数を作成することができること
```

https://reffect.co.jp/html/javascript-bind

bindを使用すると、引数で指定した値の範囲（object）に対して、thisの参照をもつ関数を作成できる
ただし、アロー関数を利用すると、bindでthisの参照範囲を指定しても、thisの参照は変更できない
fetchの中でthisを使用するとglobalを参照する。なので、bindを使用すると参照元を制御できる
アロー関数とasync/awaitを利用しても制御できる

```js
// 関数
const myButton = {
  content: 'OK',
  click() {
    console.log(this)
    console.log(this.content + ' clicked');
  }
};

const boundClick = myButton.click.bind(myButton);
boundClick();

// fetchを用いた関数
const ourUsers = {
  users: [],
  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        this.users = users;
       }.bind(this)) //ここでbindを行う
  }
}

ourUsers.getUsers()
```

call,applyも挙動としては同じだが、新しい関数を作成するのではなく、実行だけする


useContext・useReducerの使用方法を解っていない
useSWRも解っていない

useSWRについて
- データ取得関連操作のReactHooksライブラリ
- vercelが提供（Next.jsの開発元
APIリクエストとエラーハンドリング、それに伴うuseStateの処理周りがシンプルに記述できる
APIリクエストする高階関数を定義して抽象化するデザインパターンを利用していることがあったが、
useSWRを使用すればもっとシンプルにできそう
Reduxと併用する場合も、わりとイメージはできる
https://swr.vercel.app/ja
https://zenn.dev/mast1ff/articles/5b48a87242f9f0