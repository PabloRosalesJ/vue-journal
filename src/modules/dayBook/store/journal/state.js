export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Sit consectetur exercitation deserunt magna ipsum anim.',
      picture: null
    },
    {
      id: new Date().getTime() + 100,
      date: new Date().toDateString(),
      text: 'Veniam ipsum nisi id pariatur incididunt duis sunt voluptate veniam minim ea.',
      picture: null
    },
    {
      id: new Date().getTime() + 200,
      date: new Date().toDateString(),
      text: 'Est enim enim amet sunt.',
      picture: null
    },
  ]
})