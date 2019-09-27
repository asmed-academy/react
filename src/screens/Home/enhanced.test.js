import { sum } from './enhanced';

it('A soma de 2 e 5 é 7', () => {
    const resultado = sum(5, 2);

    expect(resultado).to.be(7);
});