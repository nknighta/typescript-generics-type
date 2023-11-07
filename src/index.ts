interface GTest {
    num1: number;
    num2: number;
}

const gTest = ({num1, num2}:GTest) => {
    return num1 + num2;
}

console.log(gTest({num1: 1, num2: 2}));