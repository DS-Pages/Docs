import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "pages",
  cleanUrls: true,
  lastUpdated: true,

  title: "DongShaoNB Docs",
  description: "Centralized Documentation",
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "输入",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },
    footer: {
      copyright: "Copyright © 2024-2026 DongShaoNB",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/DS-Pages/Docs" },
      { icon: "discord", link: "https://discord.gg/bnpzsmPz26" },
    ],
  },
  locales: {
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      description: "Documentation for DongShaoNB's projects",
      themeConfig: {
        nav: [{ text: "Home", link: "/en/" }],
        sidebar: {
          "/en/": [
            {
              text: "Navigation",
              items: [
                {
                  text: "Getting Started",
                  link: "/en/getting-started",
                },
              ],
            },
            {
              text: "BedrockPlayerSupport",
              items: [
                {
                  text: "Overview",
                  link: "/en/plugins/bps/",
                },
                {
                  text: "Compatibility",
                  link: "/en/plugins/bps/compatibility",
                },
                {
                  text: "Installation",
                  link: "/en/plugins/bps/installation",
                },
                {
                  text: "Commands & Permissions",
                  link: "/en/plugins/bps/commands",
                },
              ],
            },
          ],
        },
      },
    },

    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      description: "DongShaoNB 项目的中文文档",
      themeConfig: {
        nav: [{ text: "首页", link: "/zh/" }],
        sidebar: {
          "/zh/": [
            {
              text: "导航",
              items: [
                {
                  text: "开始",
                  link: "/zh/getting-started",
                },
              ],
            },
            {
              text: "BedrockPlayerSupport",
              items: [
                {
                  text: "概述",
                  link: "/zh/plugins/bps/",
                },
                {
                  text: "兼容性",
                  link: "/zh/plugins/bps/compatibility",
                },
                {
                  text: "安装",
                  link: "/zh/plugins/bps/installation",
                },
                {
                  text: "命令与权限",
                  link: "/zh/plugins/bps/commands",
                },
              ],
            },
          ],
        },
        outline: { label: "页面大纲" },
        docFooter: { prev: "上一页", next: "下一页" },
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "返回顶部",
      },
    },
  },
});
