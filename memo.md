
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