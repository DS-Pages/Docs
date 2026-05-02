# 配置

## 配置文件

BedrockPlayerSupport 的配置文件（`config.yml`）中已包含十分详细的注释说明，为避免冗长，本文档不再赘述基础配置，主要为大家详细介绍**如何修改插件语言**以及**参与语言翻译**

## 多语言支持

插件的多语言文件托管在 [Crowdin](https://crowdin.com/project/mcbps) 平台，核心团队主要维护**简体中文**与**英语**，其余语言的翻译均由热心的社区成员贡献，在此对各位表示衷心的感谢！

::: details 各语言翻译进度
| 语言 | 进度 | 语言 | 进度 |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 简体中文 | [![zh-CN](https://img.shields.io/badge/dynamic/json?color=blue&label=zh-CN&style=for-the-badge&logo=crowdin&query=%24.progress.28.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 繁体中文 | [![zh-TW](https://img.shields.io/badge/dynamic/json?color=blue&label=zh-TW&style=for-the-badge&logo=crowdin&query=%24.progress.29.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 英语 | [![en](https://img.shields.io/badge/dynamic/json?color=blue&label=en&style=for-the-badge&logo=crowdin&query=%24.progress.7.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 南非荷兰语 | [![af](https://img.shields.io/badge/dynamic/json?color=blue&label=af&style=for-the-badge&logo=crowdin&query=%24.progress.0.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 阿拉伯语 | [![ar](https://img.shields.io/badge/dynamic/json?color=blue&label=ar&style=for-the-badge&logo=crowdin&query=%24.progress.1.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 加泰罗尼亚语 | [![ca](https://img.shields.io/badge/dynamic/json?color=blue&label=ca&style=for-the-badge&logo=crowdin&query=%24.progress.2.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 捷克语 | [![cs](https://img.shields.io/badge/dynamic/json?color=blue&label=cs&style=for-the-badge&logo=crowdin&query=%24.progress.3.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 丹麦语 | [![da](https://img.shields.io/badge/dynamic/json?color=blue&label=da&style=for-the-badge&logo=crowdin&query=%24.progress.4.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 德语 | [![de](https://img.shields.io/badge/dynamic/json?color=blue&label=de&style=for-the-badge&logo=crowdin&query=%24.progress.5.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 希腊语 | [![el](https://img.shields.io/badge/dynamic/json?color=blue&label=el&style=for-the-badge&logo=crowdin&query=%24.progress.6.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 西班牙语 | [![es-ES](https://img.shields.io/badge/dynamic/json?color=blue&label=es-ES&style=for-the-badge&logo=crowdin&query=%24.progress.8.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 芬兰语 | [![fi](https://img.shields.io/badge/dynamic/json?color=blue&label=fi&style=for-the-badge&logo=crowdin&query=%24.progress.9.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 法语 | [![fr](https://img.shields.io/badge/dynamic/json?color=blue&label=fr&style=for-the-badge&logo=crowdin&query=%24.progress.10.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 希伯来语 | [![he](https://img.shields.io/badge/dynamic/json?color=blue&label=he&style=for-the-badge&logo=crowdin&query=%24.progress.11.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 匈牙利语 | [![hu](https://img.shields.io/badge/dynamic/json?color=blue&label=hu&style=for-the-badge&logo=crowdin&query=%24.progress.12.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 意大利语 | [![it](https://img.shields.io/badge/dynamic/json?color=blue&label=it&style=for-the-badge&logo=crowdin&query=%24.progress.13.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 日语 | [![ja](https://img.shields.io/badge/dynamic/json?color=blue&label=ja&style=for-the-badge&logo=crowdin&query=%24.progress.14.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 韩语 | [![ko](https://img.shields.io/badge/dynamic/json?color=blue&label=ko&style=for-the-badge&logo=crowdin&query=%24.progress.15.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 荷兰语 | [![nl](https://img.shields.io/badge/dynamic/json?color=blue&label=nl&style=for-the-badge&logo=crowdin&query=%24.progress.16.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 挪威语 | [![no](https://img.shields.io/badge/dynamic/json?color=blue&label=no&style=for-the-badge&logo=crowdin&query=%24.progress.17.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 波兰语 | [![pl](https://img.shields.io/badge/dynamic/json?color=blue&label=pl&style=for-the-badge&logo=crowdin&query=%24.progress.18.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 葡萄牙语 (巴西) | [![pt-BR](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-BR&style=for-the-badge&logo=crowdin&query=%24.progress.19.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 葡萄牙语 | [![pt-PT](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-PT&style=for-the-badge&logo=crowdin&query=%24.progress.20.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 罗马尼亚语 | [![ro](https://img.shields.io/badge/dynamic/json?color=blue&label=ro&style=for-the-badge&logo=crowdin&query=%24.progress.21.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 俄语 | [![ru](https://img.shields.io/badge/dynamic/json?color=blue&label=ru&style=for-the-badge&logo=crowdin&query=%24.progress.22.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 塞尔维亚语 | [![sr](https://img.shields.io/badge/dynamic/json?color=blue&label=sr&style=for-the-badge&logo=crowdin&query=%24.progress.23.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 瑞典语 | [![sv-SE](https://img.shields.io/badge/dynamic/json?color=blue&label=sv-SE&style=for-the-badge&logo=crowdin&query=%24.progress.24.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 土耳其语 | [![tr](https://img.shields.io/badge/dynamic/json?color=blue&label=tr&style=for-the-badge&logo=crowdin&query=%24.progress.25.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| 乌克兰语 | [![uk](https://img.shields.io/badge/dynamic/json?color=blue&label=uk&style=for-the-badge&logo=crowdin&query=%24.progress.26.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | 越南语 | [![vi](https://img.shields.io/badge/dynamic/json?color=blue&label=vi&style=for-the-badge&logo=crowdin&query=%24.progress.27.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
:::

### 参与翻译贡献

如果你想为插件贡献翻译，只需在 Crowdin 上提交即可，系统会自动将翻译同步至 GitHub

同步完成后，你可以直接在 [GitHub Actions](https://github.com/DongShaoNB/BedrockPlayerSupport/actions/workflows/gradle.yml) 下载包含最新翻译的开发版，**请注意：** 新增的翻译将在下一个正式版本发布时才会合并到稳定版中

### 切换插件语言

BedrockPlayerSupport 默认内置了所有语言文件，通常情况下，开发版内置的是最新翻译，而正式版则包含该版本发布时的最新状态（具体翻译进度视社区贡献而定），你也可以随时前往 [Crowdin](https://crowdin.com/project/mcbps) 查看最新进度

**操作步骤：**

1. 打开插件的 `config.yml` 文件
2. 找到 `plugin.language` 配置项
3. 将其修改为你需要的语言文件名（可在 [GitHub 源码目录](https://github.com/DongShaoNB/BedrockPlayerSupport/tree/master/src/main/resources/lang) 查看各语言对应的文件名，例如 `zh-CN` 或 `en`）
4. 保存文件后，重启服务器或在控制台执行 `/bps reload` 命令即可使新语言生效

### 手动下载与更新翻译

如果你不想等待新版本发布，或者想要使用社区最新的翻译，可以手动下载并安装语言文件：

1. 前往 [Crowdin 项目主页](https://crowdin.com/project/mcbps) 并选择你需要的语言
2. 找到对应的语言文件并下载
3. 将下载的文件放入服务器的 `plugins/BedrockPlayerSupport/lang` 文件夹中
4. 确保文件名与你想要设置的语言代码一致（例如 `zh-CN.yml`）
5. 按照上方【切换插件语言】的步骤，在 `config.yml` 中修改对应配置并重载插件即可

**常见问题：**

如果切换语言后没有生效，请检查插件 `lang` 文件夹下对应的语言文件：

- **文件是否存在且已翻译：** 如果文件存在但内容依然是简体中文，说明该语言目前尚无人完成翻译，欢迎您前往 [Crowdin](https://crowdin.com/project/mcbps) 提交您的翻译贡献！
