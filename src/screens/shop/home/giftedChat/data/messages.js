module.exports = [
  // {
  //   _id: Math.round(Math.random() * 1000000),
  //   text: '是的，很高兴遇见你',
  //   createdAt: new Date(2021, 8, 1, 9, 20, 0),
  //   user: {
  //     _id: 1,
  //     name: 'Developer',
  //   },
  //   sent: true,
  //   received: true,
  //   // location: {
  //   //   latitude: 48.864601,
  //   //   longitude: 2.398704
  //   // },
  // },
  {
    _id: Math.round(Math.random() * 1000000),
    text: '你好，请问有什么可以帮到你的吗',
    createdAt: new Date(2021, 8, 1, 9, 21, 0),
    user: {
      _id: 2,
      name: '百越',
      avatar: require('../../../../../res/logo.png'),
    },
  },
];