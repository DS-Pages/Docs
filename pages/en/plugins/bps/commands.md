# Commands and Permissions

Here is a list of all available commands and their corresponding permission nodes for **BedrockPlayerSupport**.

## 👥 Player Commands

::: tip Default Permissions
Regular players **already have** permissions for all the following form commands **by default**. Server owners usually do not need to configure them additionally in permission plugins (like LuckPerms).
:::

| Feature              | Command            | Permission Node                         |                              GUI Preview                               |
| :------------------- | :----------------- | :-------------------------------------- | :--------------------------------------------------------------------: |
| **Teleport Form**    | `/tpgui`           | `bedrockplayersupport.command.tpgui`    | [🖼️ Preview](https://img.fastmirror.net/s/2024/06/11/6668173a6185b.png) |
| **Home Form**        | `/homegui`         | `bedrockplayersupport.command.homegui`  | [🖼️ Preview](https://img.fastmirror.net/s/2024/06/11/6668011935ed8.png) |
| **Public Home Form** | `/phomegui`        | `bedrockplayersupport.command.phomegui` |                                   -                                    |
| **Message Form**     | `/msggui`          | `bedrockplayersupport.command.msggui`   | [🖼️ Preview](https://img.fastmirror.net/s/2024/06/11/6668173b46e99.png) |
| **Warp Form**        | `/warpgui`         | `bedrockplayersupport.command.warpgui`  | [🖼️ Preview](https://img.fastmirror.net/s/2024/07/30/66a8c986bf98f.png) |
| **Back/Death Form**  | *(Auto-triggered)* | `bedrockplayersupport.form.backdeath`   | [🖼️ Preview](https://img.fastmirror.net/s/2024/06/11/6668173a0ef47.png) |
| **Kit Form**         | `/kitgui`          | `bedrockplayersupport.command.kitgui`   |                                   -                                    |

---

## 🛡️ Admin Commands

::: info OP Permissions & Command Aliases
Server OPs (Administrators) have all admin command permissions by default.
You can use the short `/bps` prefix instead of the lengthy `/bedrockplayersupport`.
:::

| Feature                  | Usage         | Permission Node              |
| :----------------------- | :------------ | :--------------------------- |
| **Check Plugin Status**  | `/bps status` | `bedrockplayersupport.admin` |
| **Reload Configuration** | `/bps reload` | `bedrockplayersupport.admin` |