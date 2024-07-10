function wrapInParagraph(str){
    const arr = str.split('\n');
    const wrappedText = arr.map((word) => {
        return (`<p>${word.trim()}</p>`)
    });
    return wrappedText.join('\n');
}

const text = `Some
              simple multiline
              text`;

console.log(wrapInParagraph(text)); // <p>Some</p>
                                    // <p>simple multiline</p>
                                    // <p>text</p>

const text2 = 'some\ntext';

console.log(wrapInParagraph(text2)); // <p>some</p>
                                     // <p>text</p>

// Реализуйте функцию wrapInParagraph, которая принимает на вход текст, 
// разделененный переносами строк и возвращает новый текст, в котором каждая 
// строка обернута в тег