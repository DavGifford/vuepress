export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"Using a layout\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Using a layout\",\"layout\":\"CustomLayout\"},\"headers\":[{\"level\":2,\"title\":\"Developer Ipsum\",\"slug\":\"developer-ipsum\",\"link\":\"#developer-ipsum\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
