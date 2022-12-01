import { highest } from '../src/high';

test('Deve retornar o caso base', () => {
    const high = highest([6]);
    expect(high).toBe(6);
})


test('Deve fazer retornar o maior valor de uma lista desordenada recursivamente', () => {
    const high = highest([12,2,6]);
    expect(high).toBe(12);
})

test('Deve fazer retornar o maior valor de uma lista ordenada recursivamente', () => {
    const high = highest([2,6,12]);
    expect(high).toBe(12);
})
