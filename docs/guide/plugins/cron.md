# 定时任务 / Cron

::: tip @tenbot/plugin-cron

基于 [cron](https://www.npmjs.com/package/cron) 的定时任务插件。

:::

## 安装

```sh
npm i @tenbot/plugin-cron
```

## 使用

```ts
import { pluginCron } from '@tenbot/plugin-cron';

// 引入该插件
bot.plugin(pluginCron);

// 每秒发送一条消息
bot.cron('* * * * * *', () => {
  bot.sendText({ content: 'hello, tenbot cron!' });
});
```

## API

### bot.cron()

接收和 `cron.job()` 相同的参数，创建一个定时任务并自动启动。

> 参考：[cron - API](https://github.com/kelektiv/node-cron#api)

### bot.createCronJob()

即 `cron.job()` ，创建一个定时任务，需要手动控制启动和关闭。

> 参考：[cron - API](https://github.com/kelektiv/node-cron#api)

### bot.createCronTime()

即 `cron.time()` ，创建一个定时时间。

> 参考：[cron - API](https://github.com/kelektiv/node-cron#api)

## 示例

> 更多示例可参考 [cron/examples](https://github.com/kelektiv/node-cron/tree/master/examples)

```ts
// 每天中午 12:00:00 发送消息
bot.cron('00 00 12 * * *', () => {
  bot.sendText({ content: '中午好，吃饭啦！' });
});

// 每天周一至周五早上 09:30:00 发送消息
bot.cron('00 30 09 * * 1-5', () => {
  bot.sendText({ content: '早上好，上班啦！' });
});

// 每周一三五早上 09:25:00 发送消息
bot.cron('00 25 09 * * 1,3,5', () => {
  bot.sendText({ content: '早上好，开晨会啦！' });
});

// 每年 1月1日 00:00:00 发送消息
bot.cron('00 00 00 1 0 *', () => {
  bot.sendText({ content: '新年到，元旦快乐！' });
});
```
