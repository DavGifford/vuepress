export const data = JSON.parse("{\"key\":\"v-6d34f632\",\"path\":\"/contact.html\",\"title\":\"Contact title page\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Contact title page\",\"description\":\"Description of the contact page\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"contact.md\"}")

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
