
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