let fileSizes = {
    testFile1: 65,
    testFile2: 48,
}
  
function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500); // return размер файла ч\з Math.random
}
  
function sumFileSizes(filename1, filename2, cb) {
    return getFileSize(filename1, (filename1) => { 
        const res1 = filename1;
        getFileSize(filename2, (filename2) => {
            const res2 = filename2;
            cb(res1+res2);
        })
    })
    
};

// Напишите функцию, которая принимает имена двух файлов и вызывает функцию, переданную 
// третьим параметром и передает ей первым агрументом сумму их размеров.

// Для получения рамзера файла необходимо использовать функцию getFileSize(filename, cb).
