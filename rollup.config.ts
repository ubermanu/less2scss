import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };

const dependencies = Object.keys(pkg.dependencies);
dependencies.push('path', 'os');

export default [
    {
        input: 'src/less2scss.ts',
        output: [
            {
                file: 'dist/less2scss.cjs',
                format: 'cjs',
            },
            {
                file: 'dist/less2scss.mjs',
                format: 'es',
            },
        ],
        external: dependencies,
        plugins: [typescript(), terser()],
    },
    {
        input: 'src/cli.ts',
        output: [
            {
                file: 'dist/cli.cjs',
                format: 'cjs',
            },
        ],
        external: dependencies,
        plugins: [typescript(), json(), terser()],
    },
];
