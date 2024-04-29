export function sumar(num1: number, num2: number) {
    return num1 + num2;
}

export function restar(num1: number, num2: number) {
    return num1 - num2;
}

export function dividir(num1: number | null | string | undefined, num2: number) {
    if (num1 === null || num1 === undefined || typeof num1 === 'string') {
        return;
    }
    if (num2 === 0 && num1 === 0) {
        throw new Error('No se puede dividir por 0');
    }
    return num1 / num2;
}

export function multiplicar(num1: number | undefined, num2: number) {
    if (num1 === null || num1 === undefined) {
        return;
    }

    return num1 * num2;
}