import { sumArray } from '../src/sum';

test('Deve retornar o caso base', () => {
    const sumValue = sumArray([6]);
    expect(sumValue).toBe(6);
})


test('Deve fazer o cálculo recursivamente', () => {
    const sumValue = sumArray([2,4,6]);
    expect(sumValue).toBe(12);
})
