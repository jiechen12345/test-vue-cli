<template>
  <div style="height: 500px; overflow-y: auto;">
    <!-- <MyTable ref="testTable" :selectable="true" :data="datas" :paging="true" :searching="false">
      <template #header>
        <button class="btn btn-primary btn-block col-lg-2" @click="logSelectedData">Log Selected Data</button>
      </template>
<template #default>
        <th style="text-align: center; width: 10%;">Name</th>
        <th style="text-align: center; width: 40%;">Count</th>
        <th style="text-align: center; width: 50%;">Desc</th>
      </template>
<template #body="{ row }">
        <td style="text-align: center; width: 10%;">{{ row.PO_NAME }}</td>
        <td style="text-align: right; width: 40%;">{{ row.PO_COUNT }}</td>
        <td style="text-align: left; width: 50%;">{{ row.PO_DESC }}</td>
      </template>
</MyTable> -->
  </div>
</template>

<script>
// import MyTable from './components/MyTable.vue';

export default {
  components: {
    // MyTable
  },
  data() {
    return {
      datas: [
        { PO_NAME: 'name1', PO_COUNT: '5', PO_DESC: 'OOXX' },
        { PO_NAME: 'name2', PO_COUNT: '4', PO_DESC: 'asd' },
        { PO_NAME: 'name3', PO_COUNT: '3', PO_DESC: 'zxc' },
        { PO_NAME: 'name4', PO_COUNT: '1', PO_DESC: 'qwe' },
        { PO_NAME: 'name5', PO_COUNT: '5', PO_DESC: 'asd' },
        { PO_NAME: 'name6', PO_COUNT: '6', PO_DESC: 'OOXzxcX' },
      ]
    }
  },
  methods: {
    logSelectedData() {
      const selectedData = this.$refs.testTable.getSelectedData();
      console.log(selectedData);
    }
  }
}
</script>
