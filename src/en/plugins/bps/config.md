# Configuration

## Configuration File

The BedrockPlayerSupport configuration file (`config.yml`) already contains very detailed comments, so to avoid redundancy, this document will not reiterate the basic settings, but will instead focus on detailing **how to change the plugin language** and **how to contribute to translations**

## Multi-Language Support

The plugin's multi-language files are hosted on the [Crowdin](https://crowdin.com/project/mcbps) platform, the core team primarily maintains **Simplified Chinese** and **English**, while translations for other languages are contributed by enthusiastic community members, we express our sincere gratitude to everyone for their contributions!

::: details Translation Progress for Each Language
| Language | Progress | Language | Progress |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Simplified Chinese | [![zh-CN](https://img.shields.io/badge/dynamic/json?color=blue&label=zh-CN&style=for-the-badge&logo=crowdin&query=%24.progress.28.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Traditional Chinese | [![zh-TW](https://img.shields.io/badge/dynamic/json?color=blue&label=zh-TW&style=for-the-badge&logo=crowdin&query=%24.progress.29.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| English | [![en](https://img.shields.io/badge/dynamic/json?color=blue&label=en&style=for-the-badge&logo=crowdin&query=%24.progress.7.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Afrikaans | [![af](https://img.shields.io/badge/dynamic/json?color=blue&label=af&style=for-the-badge&logo=crowdin&query=%24.progress.0.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Arabic | [![ar](https://img.shields.io/badge/dynamic/json?color=blue&label=ar&style=for-the-badge&logo=crowdin&query=%24.progress.1.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Catalan | [![ca](https://img.shields.io/badge/dynamic/json?color=blue&label=ca&style=for-the-badge&logo=crowdin&query=%24.progress.2.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Czech | [![cs](https://img.shields.io/badge/dynamic/json?color=blue&label=cs&style=for-the-badge&logo=crowdin&query=%24.progress.3.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Danish | [![da](https://img.shields.io/badge/dynamic/json?color=blue&label=da&style=for-the-badge&logo=crowdin&query=%24.progress.4.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| German | [![de](https://img.shields.io/badge/dynamic/json?color=blue&label=de&style=for-the-badge&logo=crowdin&query=%24.progress.5.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Greek | [![el](https://img.shields.io/badge/dynamic/json?color=blue&label=el&style=for-the-badge&logo=crowdin&query=%24.progress.6.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Spanish | [![es-ES](https://img.shields.io/badge/dynamic/json?color=blue&label=es-ES&style=for-the-badge&logo=crowdin&query=%24.progress.8.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Finnish | [![fi](https://img.shields.io/badge/dynamic/json?color=blue&label=fi&style=for-the-badge&logo=crowdin&query=%24.progress.9.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| French | [![fr](https://img.shields.io/badge/dynamic/json?color=blue&label=fr&style=for-the-badge&logo=crowdin&query=%24.progress.10.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Hebrew | [![he](https://img.shields.io/badge/dynamic/json?color=blue&label=he&style=for-the-badge&logo=crowdin&query=%24.progress.11.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Hungarian | [![hu](https://img.shields.io/badge/dynamic/json?color=blue&label=hu&style=for-the-badge&logo=crowdin&query=%24.progress.12.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Italian | [![it](https://img.shields.io/badge/dynamic/json?color=blue&label=it&style=for-the-badge&logo=crowdin&query=%24.progress.13.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Japanese | [![ja](https://img.shields.io/badge/dynamic/json?color=blue&label=ja&style=for-the-badge&logo=crowdin&query=%24.progress.14.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Korean | [![ko](https://img.shields.io/badge/dynamic/json?color=blue&label=ko&style=for-the-badge&logo=crowdin&query=%24.progress.15.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Dutch | [![nl](https://img.shields.io/badge/dynamic/json?color=blue&label=nl&style=for-the-badge&logo=crowdin&query=%24.progress.16.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Norwegian | [![no](https://img.shields.io/badge/dynamic/json?color=blue&label=no&style=for-the-badge&logo=crowdin&query=%24.progress.17.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Polish | [![pl](https://img.shields.io/badge/dynamic/json?color=blue&label=pl&style=for-the-badge&logo=crowdin&query=%24.progress.18.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Portuguese (Brazilian) | [![pt-BR](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-BR&style=for-the-badge&logo=crowdin&query=%24.progress.19.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Portuguese | [![pt-PT](https://img.shields.io/badge/dynamic/json?color=blue&label=pt-PT&style=for-the-badge&logo=crowdin&query=%24.progress.20.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Romanian | [![ro](https://img.shields.io/badge/dynamic/json?color=blue&label=ro&style=for-the-badge&logo=crowdin&query=%24.progress.21.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Russian | [![ru](https://img.shields.io/badge/dynamic/json?color=blue&label=ru&style=for-the-badge&logo=crowdin&query=%24.progress.22.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Serbian | [![sr](https://img.shields.io/badge/dynamic/json?color=blue&label=sr&style=for-the-badge&logo=crowdin&query=%24.progress.23.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Swedish | [![sv-SE](https://img.shields.io/badge/dynamic/json?color=blue&label=sv-SE&style=for-the-badge&logo=crowdin&query=%24.progress.24.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Turkish | [![tr](https://img.shields.io/badge/dynamic/json?color=blue&label=tr&style=for-the-badge&logo=crowdin&query=%24.progress.25.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
| Ukrainian | [![uk](https://img.shields.io/badge/dynamic/json?color=blue&label=uk&style=for-the-badge&logo=crowdin&query=%24.progress.26.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) | Vietnamese | [![vi](https://img.shields.io/badge/dynamic/json?color=blue&label=vi&style=for-the-badge&logo=crowdin&query=%24.progress.27.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-15419534-652648.json)](https://crowdin.com/project/mcbps) |
:::

### Contributing to Translations

If you want to contribute translations to the plugin, simply submit them on Crowdin, and the system will automatically sync the translations to GitHub

Once synchronized, you can directly download the development build containing the latest translations from [GitHub Actions](https://github.com/DongShaoNB/BedrockPlayerSupport/actions/workflows/gradle.yml), **Please note:** newly added translations will only be merged into the stable release when the next official version is published

### Switching Plugin Language

BedrockPlayerSupport has all language files built-in by default, typically, development builds contain the latest translations, while official releases include the latest state at the time of publication (specific translation progress depends on community contributions), you can also visit [Crowdin](https://crowdin.com/project/mcbps) at any time to check the latest progress

**Steps:**

1. Open the plugin's `config.yml` file
2. Find the `plugin.language` configuration option
3. Change it to your desired language file name (you can check the corresponding file names for each language in the [GitHub Source Directory](https://github.com/DongShaoNB/BedrockPlayerSupport/tree/master/src/main/resources/lang), e.g., `zh-CN` or `en`)
4. After saving the file, restart the server or execute the `/bps reload` command in the console to apply the new language

### Manually Downloading and Updating Translations

If you don't want to wait for a new version release, or if you want to use the latest community translations, you can manually download and install the language files:

1. Go to the [Crowdin Project Page](https://crowdin.com/project/mcbps) and select your desired language
2. Find the corresponding language file and download it
3. Place the downloaded file into the `plugins/BedrockPlayerSupport/lang` folder on your server
4. Ensure the file name matches the language code you want to set (e.g., `zh-CN.yml`)
5. Follow the steps in [Switching Plugin Language] above to modify the corresponding configuration in `config.yml` and reload the plugin

**Common Issues:**

If switching the language doesn't take effect, please check the corresponding language file in the plugin's `lang` folder:

- **Whether the file exists and is translated:** If the file exists but the content is still in Simplified Chinese, it means no one has completed the translation for this language yet, you are welcome to go to [Crowdin](https://crowdin.com/project/mcbps) to submit your translation contributions!
