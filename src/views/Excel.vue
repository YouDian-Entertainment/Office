<template>
    <div>
        <Button type="primary" @click="openExcelFile">打开Excel文件</Button>
        <Button type="primary" @click="openWordFile">打开Word文件</Button>
        <br />
        地址：{{filePath}}
        <br />
        内容: {{fileData}}
        <br />
    </div>
</template>

<script>
import { Divider, Button } from 'view-design';
import { openFile } from '@common/render';
import { EXCEL_EXT_FILTER, WORD_EXT_FILTER } from '@constants/fileext';
import { paseValue } from '@common/excel';
export default {
    name: 'Excel',
    components: {
        Divider,
        Button,
    },
    data() {
        return {
            filePath: '',
            fileData: '',
        };
    },
    methods: {
        async openExcelFile() {
            const res = await openFile(EXCEL_EXT_FILTER);
            console.log('内容：', res);
            this.filePath = res;
            const val = paseValue(res);
            this.fileData = val;
            console.log('解析的内容为：', val);
        },
        async openWordFile() {
            const res = await openFile(EXCEL_EXT_FILTER);
            console.log('内容：', res);
        },
    },
};
</script>

<style lang="less">

</style>
