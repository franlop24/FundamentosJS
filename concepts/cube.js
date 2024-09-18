function createCube(size) {
    const arrayA = [];
    const frenteA = '/\\';
    const atrasA = '_\\';
    const frenteB = '\\/';
    const atrasB = '_/';
    for(let i = 0; i < size; i++){
        let fila = ' '.repeat(i);
        fila += frenteA.repeat(size - i);
        fila += atrasA.repeat(size);
        let filaB = ' '.repeat(i);
        filaB += frenteB.repeat(size - i);
        filaB += atrasB.repeat(size);
        arrayA.unshift(fila);
        arrayA.push(filaB);
    }
    return arrayA.join('\n');
}

const cube = createCube(10);
console.log(cube);
