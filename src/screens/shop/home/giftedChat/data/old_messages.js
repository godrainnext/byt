module.exports = [
    {
      _id: Math.round(Math.random() * 1000000),
      text: '我是恁爹',
      createdAt: new Date(Date.UTC(2021, 7, 30, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'R',
      },
    },
    {
      _id: Math.round(Math.random() * 1000000),
      text: '我才是恁爹',
      createdAt: new Date(Date.UTC(2021, 7, 30, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Developer',
      },
    },
  ];