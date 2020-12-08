import Team from '../src';

test('team constructor 1', () => {
  const team = new Team();
  const hero1 = { name: 'Вася' };
  team.add(hero1);

  expect(team.toArray()).toEqual([hero1]);
});

test('Validator constructor2', () => {
  const team = new Team();
  const hero1 = { name: 'Вася' };
  team.add(hero1);

  expect(() => team.add(hero1)).toThrowError('Такой объект уже есть в команде');
});

test('Validator constructor3', () => {
  const team = new Team();
  const hero1 = { name: 'Кеша' };
  team.add(hero1);

  expect(team.toArray()).toEqual([hero1]);
});

test('team constructor 4', () => {
  const team = new Team();
  const hero1 = 'Василий';
  const hero2 = 'Василий';
  const hero3 = 'Василий';
  const hero4 = 'Петя';
  const hero5 = 'Петя';
  const newHeroes = ['Василий', 'Петя'];

  team.addAll(hero1, hero2, hero3, hero4, hero5);

  expect(team.toArray()).toEqual(newHeroes);
});
