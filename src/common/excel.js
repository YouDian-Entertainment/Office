import xlsx from 'xlsx';

/**
 * 读取文件内容
 * @param {String} filePath 文件地址
 */
export const paseValue = (filePath) => {
    return xlsx.readFile(filePath);
};
