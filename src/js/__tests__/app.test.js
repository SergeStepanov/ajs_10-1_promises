import GameSavingLoader from '../GameSavingLoader';

test('test GameSavingLoader', (done) => {
  const result = {
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  };

  GameSavingLoader.load().then((resolve) => {
    expect(resolve).toEqual(result);
    done();
  });
});
