# 命令与权限

这里列出了 **BedrockPlayerSupport** 所有的可用指令及对应的权限节点。

## 👥 玩家指令

::: tip 默认权限
普通玩家**默认已拥有**以下所有表单指令的权限，服主通常无需在权限插件（如 LuckPerms）中进行额外配置
:::

| 功能简述           | 触发指令     | 权限节点                                |                              界面预览                               |
| :----------------- | :----------- | :-------------------------------------- | :-----------------------------------------------------------------: |
| **传送表单**       | `/tpgui`     | `bedrockplayersupport.command.tpgui`    | [🖼️ 预览](https://img.fastmirror.net/s/2026/05/02/69f5a93e01ed8.jpg) |
| **家表单**         | `/homegui`   | `bedrockplayersupport.command.homegui`  | [🖼️ 预览](https://img.fastmirror.net/s/2026/05/02/69f5a8819359d.jpg) |
| **公共家表单**     | `/phomegui`  | `bedrockplayersupport.command.phomegui` | [🖼️ 预览](https://img.fastmirror.net/s/2026/05/02/69f5ab4236e89.jpg) |
| **消息表单**       | `/msggui`    | `bedrockplayersupport.command.msggui`   | [🖼️ 预览](https://img.fastmirror.net/s/2026/05/02/69f5a95f36585.jpg) |
| **传送点表单**     | `/warpgui`   | `bedrockplayersupport.command.warpgui`  | [🖼️ 预览](https://img.fastmirror.net/s/2026/05/02/69f5ac08422ee.jpg) |
| **返回死亡点表单** | *(自动触发)* | `bedrockplayersupport.form.backdeath`   | [🖼️ 预览](https://img.fastmirror.net/s/2026/05/02/69f5a96c31884.jpg) |
| **礼包表单**       | `/kitgui`    | `bedrockplayersupport.command.kitgui`   | [🖼️ 预览](https://img.fastmirror.net/s/2026/05/02/69f5a97c54f0b.jpg) |

## 🛡️ 管理员指令

::: info OP 权限与指令简写
服务器的 OP (管理员) 默认拥有全部管理指令权限。
你可以使用简短的 `/bps` 前缀来替代繁琐的 `/bedrockplayersupport`
:::

| 功能简述         | 指令用法      | 权限节点                     |
| :--------------- | :------------ | :--------------------------- |
| **查看插件状态** | `/bps status` | `bedrockplayersupport.admin` |
| **重载配置文件** | `/bps reload` | `bedrockplayersupport.admin` |