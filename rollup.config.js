const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/vs.js'
  },
  plugins: []
};

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
    },
    plugins: [
      ...config.plugins
    ]
  }
]