# 消息接收和发送

## 接收和处理消息

企业微信机器人目前可以接收以下类型的消息：

- 文字消息
- 图片消息（仅限单人聊天）
- 事件消息
- 附件消息

Tenbot 可以对不同类型的消息设定不同的处理方法。

### 接收消息

- 文字消息: `bot.onText(handler)`
- 图片消息: `bot.onImage(handler)`
- 事件消息: `bot.onEvent(handler)`
- 附件消息: `bot.onAttachment(handler)`
- 默认处理器: `bot.onMessage(handler)`

::: tip
如果当前消息没有配置对应类型的处理器，则会进入默认处理器。
:::

### 消息处理器

消息处理器是一个 callback 函数，它接收两个参数：

- `message`: 来自企业微信的消息，不同的消息类型结构不同
- `context`: 消息上下文，使用 `context` 上的方法可以快速生成和回复消息

## 发送消息

企业微信机器人目前可以发送以下类型的消息：

- 文字消息
- Markdown 消息 （可以带附件）
- 图片消息
- 图文消息

Tenbot 提供了 Context 对象，可以快速发送不同类型的消息。

### Context

使用 Context 中的方法，可以向企业微信发送消息。

- 文字消息: `context.sendText(options)`
- Markdown 消息: `context.sendMarkdown(options)`
- 图片消息:
  - `context.sendImage(options)`
  - `context.sendImageFromUrl(url, options)`
- 图文消息: `context.sendNews(options)`

::: tip

机器人 `bot` 对象，以及消息处理器中的 `context` 对象，都是一个 Context ，它们发送消息的接口完全一致，唯一的区别是：

如果不指定 `chatId` ， `bot` 默认向 __所有群聊__ 发送消息， `context` 默认只向当前聊天回复消息。

:::

## 使用示例

### 被动回复消息

```ts
bot.onText(async (message, context) => {
  // 获取文字消息的内容，去掉 @bot-name 部分
  const text = message.text.content.replace(`@${context.bot.name}`, '').trim();

  // 回复一个 Markdown 消息
  if (text === 'markdown') {
    await context.sendMarkdown({
      content: '> 这是一个 Markdown 消息',
    });
  }

  // 回复一个带附件的 Markdown 消息
  if (text === 'attachment') {
    await context.sendMarkdown({
      content: '> 这是一个带附件的 Markdown 消息',
      attachments: [
        context.createAttachment({
          callbackId: 'test',
          actions: [
            context.createAttachmentActionButton({
              name: 'button_1',
              text: '有事',
              type: 'button',
              value: 'yes',
              replaceText: '有事就说',
              borderColor: '2EAB49',
              textColor: '2EAB49',
            }),
            context.createAttachmentActionButton({
              name: 'button_2',
              text: '没事',
              type: 'button',
              value: 'no',
              replaceText: '没事走开',
              borderColor: '2EAB49',
              textColor: '2EAB49',
            }),
          ],
        }),
      ],
    });
    return;
  }

  // 回复一个图片
  if (text === '图片') {
    await context.sendImageFromUrl(
      'https://wwcdn.weixin.qq.com/node/wwnl/wwnl/style/images/officialImages$e8e6cbe6.png'
    );
    return;
  }

  // 回复一条图文
  if (text === '图文') {
    await context.sendNews({
      articles: [
        context.createArticle({
          title: '企业微信',
          description: '欢迎使用企业微信',
          url: 'https://work.weixin.qq.com/',
          picurl:
            'https://wwcdn.weixin.qq.com/node/wwnl/wwnl/style/images/officialImages$e8e6cbe6.png',
        }),
      ],
    });
    return;
  }

  // 默认回复当前群聊 chatId
  await context.sendText({ content: message.chatId });
});
```

### 主动发送消息

```ts
// 向所有群聊主动发送消息
bot.sendText({ content: '这是一条主动发送的文字消息' });

// 向某个群聊主动发送消息
bot.sendText({
  // 目标群聊的 chatId
  chatId: 'xxx',
  content: '这是一条主动发送的文字消息',
});
```
