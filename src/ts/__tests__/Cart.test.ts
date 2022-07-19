import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('purchase amount in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1002, 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантстика, боевик, фентези, приключения', '137 мин/02:17', 900));
  expect(cart.amount()).toBe(3800);
});

test('purchase amount with discount in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1002, 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантстика, боевик, фентези, приключения', '137 мин/02:17', 900));
  expect(cart.amountDiscount(20)).toBe(3040);
});

test('deleting position in cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1002, 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантстика, боевик, фентези, приключения', '137 мин/02:17', 900));
  cart.delet(1002)
  expect(cart.items).toEqual([]);
});

test('deleting non - existent position in cart', () => {
  const check = [{
        "country": "США",
        "genre": "фантстика, боевик, фентези, приключения",
        "id": 1002,
        "name": "The Avengers",
        "price": 900,
        "slogan": "Avengers Assemble!",
        "time": "137 мин/02:17",
        "year": 2012,
      }]
  const cart = new Cart();
  cart.add(new Movie(1002, 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантстика, боевик, фентези, приключения', '137 мин/02:17', 900));
  cart.delet(1003)
  expect(cart.items).toEqual(check);
});
