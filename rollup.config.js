import builtins from "rollup-plugin-node-builtins"
import resolve from "rollup-plugin-node-resolve"

export default {
    input: "src/index.js",
    output: [
        {
            file: "lib/polyql.es.js",
            format: "es"
        },
        {
            file: "lib/polyql.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [builtins(), resolve()],
    external: []
}
