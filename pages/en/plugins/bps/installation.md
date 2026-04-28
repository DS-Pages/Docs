# Installation Guide

Before installing **BedrockPlayerSupport**, please ensure your server meets the following requirements.

## 🛠️ Requirements & Dependencies

* **Supported Server Software**: `Paper`, `Folia` and their forks (e.g., Purpur)
* **Supported Game Versions**: `1.19` and above
* **Required Dependency**: You must install [Floodgate](https://github.com/GeyserMC/Floodgate) for the plugin to function properly.

## 📥 Getting the Plugin

::: danger ⚠️ Important Download Notice
On the download page, please **make sure to select** the file with the format `BedrockPlayerSupport-xxx-all.jar`!

Do not download the file without the `-all` suffix, otherwise the plugin will fail to start due to missing dependencies.
:::

### 🟢 Stable Release (Recommended)
Fully tested and stable versions, recommended for all production servers.  
👉 **[Download from GitHub Releases](https://github.com/DongShaoNB/BedrockPlayerSupport/releases)**

### 🧪 Beta Release (Dev Builds)
Automated builds containing the latest features but not fully tested.  
👉 **[Download from GitHub Actions](https://github.com/DongShaoNB/BedrockPlayerSupport/actions/workflows/gradle.yml)**

::: warning Risk Warning
Beta releases may contain unknown bugs or functional abnormalities. Unless explicitly suggested by the author, it is **highly discouraged** to use them in a production environment (live servers).
:::

## ⚙️ Installation & Configuration Steps

1. **Download the Plugin**: Download the correct `-all.jar` file from the links above.
2. **Place the File**: Put the downloaded `.jar` file into the `plugins` folder in your server's root directory.
3. **Configure Floodgate (Crucial Dependency)**:
   This plugin relies on Floodgate to identify Bedrock players and send forms. Please make sure to complete the basic setup according to the **[Official Floodgate Setup Guide](https://geysermc.org/wiki/floodgate/setup)**.

   ::: warning 🕸️ Proxy Server (Network) Special Notice
   If your server network uses a proxy (such as Velocity, BungeeCord, or Waterfall), you **must install Floodgate on both the proxy AND all backend sub-servers that require this plugin**, and properly configure the key (`key.pem`) between them. Otherwise, the plugin will not be able to open forms!
   :::

4. **Restart the Server**: Start or completely restart your server (it is recommended NOT to use hot-reload plugins like Plugman to avoid unpredictable errors).
5. **Check Configuration**: Once the server starts, a `BedrockPlayerSupport` folder will be automatically generated inside the `plugins` directory. **The configuration files contain detailed comments**. You can go into this folder to modify the default settings.

## 🚀 Next Steps

Successfully installed? Next, let's take a look at the plugin's commands and permission nodes:

* 📖 **[Check Commands and Permissions](./commands)**