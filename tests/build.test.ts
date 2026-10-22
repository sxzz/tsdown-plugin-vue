import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { build } from 'tsdown'
import { expect, onTestFinished, test } from 'vitest'
import { Vue } from '../src/index.ts'

test('builds a Vue SFC with JavaScript, CSS and declarations', async () => {
  const outDir = await mkdtemp(join(tmpdir(), 'tsdown-plugin-vue-'))
  onTestFinished(() => rm(outDir, { recursive: true, force: true }))

  await build({
    config: false,
    tsconfig: false,
    entry: resolve(import.meta.dirname, 'fixtures/basic/index.ts'),
    outDir,
    deps: {
      neverBundle: ['vue'],
    },
    plugins: [Vue({ isProduction: false })],
    logLevel: 'silent',
  })

  const files = await readdir(outDir)
  const js = await readFile(join(outDir, 'index.mjs'), 'utf8')
  const cssFile = files.find((file) => file.endsWith('.css'))
  const declarationFile = files.find((file) => file.endsWith('.d.mts'))

  expect(js).toContain('counter')
  expect(js).toContain('message')
  expect(cssFile).toBeDefined()
  expect(declarationFile).toBeDefined()

  const css = await readFile(join(outDir, cssFile!), 'utf8')
  const declaration = await readFile(join(outDir, declarationFile!), 'utf8')

  expect(css).toContain('color: red')
  expect(declaration).toContain('Counter')
  const fixturePath = resolve(import.meta.dirname, 'fixtures/basic/Counter.vue')
  expect({
    'index.mjs': js.replaceAll(fixturePath, '<Counter.vue>'),
    [cssFile!]: css,
    [declarationFile!]: declaration,
  }).toMatchSnapshot()
}, 20_000)
