import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Sinofuturism Wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "mroberts1.github.io/sinofuturism",
    ignorePatterns: ["private", "templates", ".obsidian", "_meta"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Source Serif 4",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f4",
          lightgray: "#e8e4dc",
          gray: "#b8b0a4",
          darkgray: "#3d3530",
          dark: "#1a1410",
          secondary: "#5c4a3a",
          tertiary: "#8a7560",
          highlight: "rgba(92, 74, 58, 0.08)",
          textHighlight: "#f5e6c888",
        },
        darkMode: {
          light: "#1a1714",
          lightgray: "#2e2a26",
          gray: "#5a5248",
          darkgray: "#c8c0b4",
          dark: "#f0ebe4",
          secondary: "#c8a882",
          tertiary: "#9a8470",
          highlight: "rgba(200, 168, 130, 0.10)",
          textHighlight: "#5c4a3a88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
