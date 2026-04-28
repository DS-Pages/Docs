# Compatibility

The features of **BedrockPlayerSupport** are divided into two categories: one requires specific core base plugins to function, while the other consists of independently operating or universally compatible features.

## 1. Core Plugin Dependent Features

The following features require the server to install and run the corresponding mainstream core plugins (choose one out of the five).

| Feature Module                            |  CMI  | EssentialsX | HuskHomes | AdvancedTeleport | SunLight |
| :---------------------------------------- | :---: | :---------: | :-------: | :--------------: | :------: |
| **Accept Teleport Request** (TPA Accept)  |   ✅   |      ✅      |     ✅     |        ✅         |    ✅     |
| **Teleport Request Form** (TPA / TP)      |   ✅   |      ✅      |     ✅     |        ✅         |    ✅     |
| **Personal Home System** (Home)           |   ✅   |      ✅      |     ✅     |        ✅         |    ✅     |
| **Public Home/Landmark** (Public Home)    |   ❌   |      ❌      |     ✅     |        ❌         |    ❌     |
| **Return to Previous/Death Point** (Back) |   ✅   |      ✅      |     ✅     |        ✅         |    ✅     |
| **Server Warp Points** (Warp)             |   ✅   |      ✅      |     ✅     |        ✅         |    ✅     |
| **Kit System** (Kit)                      |   ✅   |      ✅      |     ❌     |        ❌         |    ✅     |

## 2. Independent & Universal Features

The following features do not rely on the aforementioned core plugins, or they possess extremely broad compatibility, allowing them to be used in almost any server environment.

| Feature Module                         | Compatibility Note         | Dependency Requirements                                                                                                                                                                                       |
| :------------------------------------- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Private Messaging System** (Message) | **Completely Independent** | **No core plugins required**. The vanilla server already has private messaging commands, allowing the plugin to directly provide a form-based chat interface for Bedrock players.                             |
| **Auto Register & Login**              | **Universal Support**      | **Theoretically supports all auth plugins** (e.g., AuthMe, FastLogin, etc.). By seamlessly integrating with authentication protocols, it achieves automatic verification immediately upon joining the server. |