# tsdown-plugin-vue

[![Open on npmx][npmx-version-src]][npmx-href]
[![npm downloads][npmx-downloads-src]][npmx-href]
[![Unit Test][unit-test-src]][unit-test-href]

Vue tsdown plugin

## Install

```bash
npm i tsdown-plugin-vue
```

## Usage

Add the plugin to your `tsdown.config.ts`:

```ts
import { defineConfig } from 'tsdown'
import { Vue } from 'tsdown-plugin-vue'

export default defineConfig({
  entry: ['src/index.ts'],
  plugins: [Vue()],
})
```

## Options

`Vue()` passes options to `unplugin-vue` and sets `isProduction: true` by default, regardless of `NODE_ENV`. To compile in development mode, override it explicitly:

```ts
Vue({ isProduction: false })
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2026-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npmx-version-src]: https://npmx.dev/api/registry/badge/version/tsdown-plugin-vue
[npmx-downloads-src]: https://npmx.dev/api/registry/badge/downloads-month/tsdown-plugin-vue
[npmx-href]: https://npmx.dev/tsdown-plugin-vue
[unit-test-src]: https://github.com/sxzz/tsdown-plugin-vue/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/sxzz/tsdown-plugin-vue/actions/workflows/unit-test.yml
