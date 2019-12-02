<template>
    <div class="v-main">
        <Layout>
            <Header class="main-header">Office</Header>
            <Content>
                <Button type="primary" @click="openExcelFile">打开Excel文件</Button>
                <Button type="primary" @click="openWordFile">打开Word文件</Button>
                <br />
        地址：{{filePath}}
        <br />
        内容: {{fileData}}
        <br />
            </Content>
        </Layout>
    </div>
</template>

<script>
import { Layout, Header, Content, Button } from 'view-design';
import { openFile } from '@common/render';
import { EXCEL_EXT_FILTER, WORD_EXT_FILTER } from '@constants/fileext';
import { paseValue } from '@common/excel';
export default {
    name: 'Main', // 主界面
    components: {
        Layout,
        Header,
        Content,
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
            this.fileData = val.Sheets[val.SheetNames[0]];
            console.log('解析的内容为：', val.SheetNames);
            console.log('解析的内容为：', val.Sheets);
            console.log('解析的内容为：', val.Sheets[val.SheetNames[0]]);
            const object = val.Sheets[val.SheetNames[0]];
            console.log(object['!ref']);
            const strArray = object['!ref'].split(':');
            console.log(strArray);
            let letter = [];
            let numberArray = [];
            strArray.map(item => {
                console.log('字母', item.replace(/[0-9]/g, ''));
                letter.push(item.replace(/[0-9]/g, ''));
                console.log('数字', item.replace(/[A-Za-z]/g, ''));
                numberArray.push(parseInt(item.replace(/[A-Za-z]/g, '')));
            });
            console.log(numberArray);
            console.log(Math.max(...numberArray));
        },
        async openWordFile() {
            const res = await openFile(EXCEL_EXT_FILTER);
            console.log('内容：', res);
        },
    },
};
</script>

<style lang="less">
.v-main {
    .main-header {
        background-color: @white;
        box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .1);
        .flex-row-center();
        -webkit-app-region: drag;
    }
}
</style>
