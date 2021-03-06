const uniqid = require("uniqid");

class ChannelsModel {
  constructor(store, limit = 100) {
    this.store = [
      {
        id: 1,
        name: "General",
        creator: "test",
        msgCount: 2,
        msgs: [
          {
            id: 1,
            timestamp: "2018-20-12T13:37:27+00:00",
            sender: "test",
            channelId: 1,
            msg: "Welcome to Nack!"
          }
        ]
      },
      {
        id: 2,
        name: "help",
        creator: "test",
        msgCount: 2,
        msgs: [
          {
            id: 1,
            timestamp: "2018-20-12T13:37:27+00:00",
            sender: "test",
            channelId: 1,
            msg: "Welcome to Nack!"
          }
        ]
      }
    ];
    this.LIMIT = limit;
  }

  all() {
    return this.store;
  }

  addChannel(name, creator) {
    const channel = {
      id: uniqid(),
      name,
      creator,
      msgs: [],
      msgCount: 0
    };

    const channels = this.all();

    channels.push(channel);
    return channel;
  }

  getChannel(id) {
    return this.all().find(channel => channel.id.toString() === id.toString());
  }

  getChannelByName(name) {
    return this.all().find(channel => channel.name === name);
  }

  hasChannel(id) {
    return this.getChannel(id) !== undefined;
  }

  addMessage(message) {
    const { channelId, sender, msg } = message;
    const channel = this.getChannel(channelId);

    if (!channel) {
      return false;
    }

    message = Object.assign(
      {},
      {
        channelId: uniqid(),
        sender,
        msg,
        timestamp: new Date().toString()
      }
    );

    if (channel.msgs >= this.LIMIT) {
      channel.msgs.shift();
      channel.msgCount -= 1;
    }

    channel.msgs.push(message);
    channel.msgCount += 1;
    return message;
  }
}

module.exports = ChannelsModel;
