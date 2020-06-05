# 开始使用

::: tip Tenbot 环境

- 运行要求 Node.js >= 10
- 建议使用 TypeScript 开发

:::

::: tip 群机器人内测

群机器人被动接收和回复消息的功能还处于内测阶段。

若所属企业还没有开通此功能，可以只使用 `@tenbot/bot` 的主动发送消息功能，不使用 `@tenbot/app` 进行服务监听。

:::

## 使用 tenbot cli 快速开始

> TODO

## 手动创建项目

### 安装

```sh
npm i @tenbot/bot @tenbot/app
```

- `@tenbot/bot`: 用于创建机器人，包含机器人向企业微信发送消息等主要功能。
- `@tenbot/app`: 用于启动服务器，监听从企业微信中发给机器人的消息。一个 app 中可以同时运行多个 bot。

### 创建机器人

创建 `demo-bot.ts` 文件：

```ts
// demo-bot.ts
import { Bot } from '@tenbot/bot';

// 创建 demo-bot 机器人
// 填写在企业微信创建机器人后获取到的对应信息
export const demoBot = new Bot({
  name: 'demo-bot',
  webhook: 'xxx',
  // 企业微信 - 机器人配置 - 接收消息配置 - Token / EncodingAESKey
  // 注意，以下还配置目前处于内测阶段，用于机器人接收来自企业微信用户的消息
  // 所处企业尚未拥有此功能的话，可以不填这两项，只使用 webhook 主动发送消息的功能
  token: 'xxx',
  encodingAesKey: 'xxx',
});

// 默认消息处理器，用于被动接收和回复消息
demoBot.onMessage(async (message, context) => {
  // 打印来自企业微信的消息
  console.log(message);

  // 回复 'hello, tenbot!'
  await context.sendText({ content: 'hello, tenbot!' });
});

// 主动发送消息给所有群聊
demoBot.sendText({ content: 'hello, tenbot!' });
```

### 创建并启动 App

创建 `app.ts` 文件：

```ts
// app.ts
import { App } from '@tenbot/app';
import { demoBot } from './demo-bot';

// 创建 App
// 填写 App 监听的 host 和 port
const app = new App({
  host: '0.0.0.0',
  port: 10080,
});

// 在路径 '/demo-bot' 上注册机器人
// 机器人将会监听在 URL `http://${host}:${port}/demo-bot`
// 这个 URL 填写到 企业微信 - 机器人配置 - 接收消息配置 - URL
app.register(demoBot, '/demo-bot');

// 启动 App
app.run().catch(console.error);
```

```sh
# 开发时可以通过 ts-node 启动应用
ts-node app.ts
```

### 测试你的机器人

在企业微信群中 @demo-bot ，或单独给 demo-bot 发送消息，测试你的企业微信机器人。
