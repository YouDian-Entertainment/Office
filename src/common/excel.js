import xlsx from 'xlsx';

/**
 * 读取文件内容
 * @param {String} filePath 文件地址
 */
export const paseValue = (filePath) => {
    return xlsx.readFile(filePath);
};

export const createColumns = (startStr='', endStr='') => {
    const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const start_arr = startStr.split('');
    const end_arr = endStr.split('');
    let startIndex = 0;
    start_arr.forEach((item, index) => startIndex += array.indexOf(item) + index * 25);

    let result = [];
    let max_len_arr = [];
    for (let i = 0; i < end_arr.length; i++) {
        max_len_arr.push(array.indexOf(end_arr[i]));
    }
    for (let i = 0; i < max_len_arr.length; i++) {
        const maxIndex = max_len_arr[i];
        let start_index = 0;
        if (i === 0) {
            start_index = startIndex;
        }
        for (let j = start_index; j < maxIndex; j++) {
            const val = '';
            console.log('当前的内容为：', val);
            result.push({
                title: val,
                key: val,
            });
        }
    }
    let endIndex = 0;
    end_arr.forEach((item, index) => endIndex += array.indexOf(item) + index * 25);
    console.log('startIndex', startIndex);
    console.log('endIndex', endIndex);
    for (let i = startIndex; i <= endIndex; i ++) {
        let index = i;
        let multi = -1;
        if (i > 26) {
            index = i % 25;
            multi = parseInt(i / 26);
        }
        console.log('i', i, index, multi);
        const val = multi > 0 ? `${array[multi]}${array[index]}` : array[index];
        console.log('当前的内容为：', val);
        result.push({
            title: val,
            key: val,
        });
    }
    return result;
};

export const dealData = () => {};

[0, 1, 2]; // ABC
