const age = 19;
const gender = 'муж'; // 'жен'

if (age > 18) {
    console.log("Вам больше 18 лет");
} else {
    console.log("Вам меньше 18 лет");
}

if (gender.toLocaleLowerCase() === 'муж') {
    console.log("поверните налево");
}

if (gender.toLocaleLowerCase() === 'жен') {
    console.log("поверните направо");
}