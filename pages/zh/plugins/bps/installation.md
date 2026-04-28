# 安装指南

在开始安装 **BedrockPlayerSupport** 之前，请确保你的服务器满足以下运行要求

## 🛠️ 运行环境与前置

* **适用服务端**：`Paper`、`Folia` 及其衍生分支 (如 Purpur)
* **适用游戏版本**：`1.19` 及以上版本
* **必需前置插件**：必须安装 [Floodgate](https://github.com/GeyserMC/Floodgate) 才能正常运行

## 📥 获取插件

::: danger ⚠️ 下载必看限制
在下载页面，请**务必选择**文件名格式为 `BedrockPlayerSupport-xxx-all.jar` 的文件！

请勿下载没有 `-all` 后缀的文件，否则插件将因缺少依赖而无法启动
:::

### 🟢 正式版 (推荐)
经过测试的稳定版本，推荐所有正式服主使用  
👉 **[前往 GitHub Releases 下载](https://github.com/DongShaoNB/BedrockPlayerSupport/releases)**

### 🧪 测试版 (开发构建)
包含最新功能但未经完整测试的自动构建版本  
👉 **[前往 GitHub Actions 下载](https://github.com/DongShaoNB/BedrockPlayerSupport/actions/workflows/gradle.yml)**

::: warning 风险提示
测试版可能存在未知的 Bug 或功能异常除非作者明确建议，否则**极不推荐**在正式生产环境（玩家服）中使用
:::

## ⚙️ 安装与配置步骤

1. **下载插件**：从上方链接下载正确的 `-all.jar` 文件
2. **放置文件**：将下载好的 `.jar` 文件放入服务器根目录下的 `plugins` 文件夹中
3. **配置 Floodgate (关键前置)**：
   本插件依赖 Floodgate 来识别基岩版玩家并发送表单，请务必按照 **[Floodgate 官方配置文档](https://geysermc.org/wiki/floodgate/setup)** 完成基础设置

   ::: warning 🕸️ 群组服（代理）特别注意
   如果你的服务器使用了代理端（如 Velocity, BungeeCord, Waterfall），你**必须在代理端以及所有需要用到本插件的子服务器（后端服）上都安装 Floodgate**，并在它们之间正确配置密钥（key.pem），否则插件将无法打开表单！
   :::

4. **重启服务器**：启动或完全重启你的服务器（建议不要使用 Plugman 等热重载插件，以免引发不可预知的异常）
5. **检查配置**：服务器启动完成后，`plugins` 文件夹下会自动生成 `BedrockPlayerSupport` 文件夹，**配置文件中包含详细注解**，你可以进入该文件夹修改默认配置

## 🚀 下一步

安装成功了吗？接下来让我们看看插件的命令和权限节点：

* 📖 **[查阅命令和权限节点](./commands)**