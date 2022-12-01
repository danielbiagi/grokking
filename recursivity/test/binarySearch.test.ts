

import { recursiveBinarySearch } from '../src/binarySearch';

test('Deve retornar o caso base', () => {
    const searchData = [5];
    const found = recursiveBinarySearch(searchData, 5);
    expect(found).toBe(0);
})
 
test('Deve retornar que o elemento não foi encontrado', () => {
    const searchData = [5];
    const found = recursiveBinarySearch(searchData, 10);
    expect(found).toBe(-2);
})

test('Deve fazer a busca recursivamente', () => {
    const searchData = [5, 10, 15, 20, 25];
    const found = recursiveBinarySearch(searchData, 20);
    expect(found).toBe(3);
})