function finalGrade(exam, projects) {
    let grade;
    if (exam > 90 || projects > 10) {
        grade = 100;
    } else if (exam > 75 && projects >= 5) {
        grade = 90;
    } else if (exam > 50 && projects >= 2) {
        grade = 75;
    } else {
        grade = 0;
    }
    return grade;
}

console.log(finalGrade(100, 12));  // 100
console.log(finalGrade(99, 0));    // 100
console.log(finalGrade(10, 15));   // 100
console.log(finalGrade(85, 5));    // 90
console.log(finalGrade(55, 3));    // 75
console.log(finalGrade(55, 0));    // 0
console.log(finalGrade(20, 2));    // 0

// Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе 
// двух параметров: оценки за экзамен и количества законченных проектов.

// Функция принимает два аргумента:

// exam — оценка за экзамен, число от 0 до 100; 
// projects — количество проектов, число от 0 и выше. 
// Функция возвращает: число (итоговую оценку).

// Есть четыре возможных итоговых оценки:

// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае