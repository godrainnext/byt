module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: '请前往周边商城，您将可以看到一堆精美商品',
      createdAt: new Date(Date.UTC(2021, 7, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'R',
        avatar: require('../../../../../res/logo.png'),
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: '请问百越有什么好物推荐吗',
      createdAt: new Date(Date.UTC(2021, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
    },
  ];