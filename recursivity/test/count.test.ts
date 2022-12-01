import { countItems } from '../src/count';

test('Deve retornar o caso base', () => {
    const countData = [
        'first'
    ]
    const count = countItems(countData);
    expect(count).toBe(1);
})


test('Deve fazer a contagem recursivamente', () => {
    const countData = [
        'first',
        'second'
    ]
    const count = countItems(countData);
    expect(count).toBe(2);
})
