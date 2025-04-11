export default {
  /** -------------------------------------------------以下必须修改----------------------------------------------------- */

  githubName: "Kemeow815", // 必须修改，github账户名

  /** -------------------------------------------------以下可选修改----------------------------------------------------- */

  title: "Ke Miao Blog", // 网站标题
  nickName: "克喵の小站", // 昵称
  domain: "https://nuxt.kemiaosw.top", // rss域名
  SEO_title: " - Kemiao blog", // 搜索引擎显示的标题
  SEO_keywords: "Kemiao,Kemiao's blog,克喵爱吃卤面,克喵的博客", // keywords meta header
  MSClarityId: "qohavwdio1", // Microsoft的Clarity统计，https://clarity.microsoft.com/
  CloudflareAnalyze: "", // cloudflare的统计，https://developers.cloudflare.com/analytics/web-analytics
  CommentRepoId: "R_kgDOOIqpEA", // 评论系统，参考 https://github.com/yunyuyuan/nuxt3-blog/wiki/2.3-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F
  CommentDiscussionCategoryId: "DIC_kwDOOIqpEM4CoDiw", // // 评论系统

  database: { // 参考 https://github.com/yunyuyuan/nuxt3-blog/wiki/2.4-%E6%B5%8F%E8%A7%88%E9%87%8F%E7%BB%9F%E8%AE%A1
    initialVisitors: 1, // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
    visitFromOwner: false // 网站拥有者访问时，是否增加浏览量
  },
  themeColor: "cyan", // 主题色，参考 https://tailwindcss.com/docs/colors
  themeColorDark: "neutral", // 主题色(夜间模式)
  defaultLang: "zh", // default language, "zh" and "en" are supported currently
  about: [
    "每一段旅行都有终点~",
    "总有些事情高于其他！",
    "愿你看清所有真相后，依然热爱你的家人和朋友。",
    "——2025.4.11"
  ],

  /** -------------------------------------------------注意----------------------------------------------------- */

  githubRepo: "nuxt3-blog" // 需要与仓库名一致，如果fork时更改了仓库名，则这里也要改
};
