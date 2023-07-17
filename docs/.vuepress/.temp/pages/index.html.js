export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/snake.svg\",\"heroText\":\"Hero text\",\"tagline\":\"description here...\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Feature 1 Title\",\"details\":\"Feature 1 Description\"},{\"title\":\"Feature 2 Title\",\"details\":\"Feature 2 Description\"},{\"title\":\"Feature 3 Title\",\"details\":\"Feature 3 Description\"}],\"footer\":\"Here my footer\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"index.md\"}")

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
