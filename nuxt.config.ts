import type { NuxtConfig } from '@nuxt/types'
const GRAPHQL_API_ENDPOINT = process.env.NODE_ENV === 'development'
                            ? '/api/graphql'
                            : 'https://dev-functions-10ms.apedev.com.au/api/graphql'
const config: NuxtConfig = {
  build: {},
  buildModules: [
    '@nuxt/typescript-build'
  ],
  css: [],
  env: {},
  head: {
    title: 'nuxt-community/typescript-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A boilerplate to start a Nuxt+TS project quickly' }
    ],
    link: []
  },
  loading: { color: '#0c64c1' },
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/apollo'
  ],
  plugins: [
    '~/plugins/truncate'
  ],
  proxy: {
    '/api': 'http://localhost:7071/'
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: GRAPHQL_API_ENDPOINT,
      }
    }
  }

}

export default config
