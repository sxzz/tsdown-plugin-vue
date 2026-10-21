import UnpluginVue from 'unplugin-vue/rolldown'
import type { TsdownPlugin } from 'tsdown'
import type { Options as UnpluginVueOptions } from 'unplugin-vue/api'

export function Vue(options?: UnpluginVueOptions): TsdownPlugin {
  return {
    name: 'tsdown-plugin-vue',
    tsdownConfig() {
      return {
        plugins: [UnpluginVue(options)],
        dts: { vue: true },
      }
    },
  }
}
