<template>
  <div class="col-12 col-lg-8" style="height: 600px; overflow-y: auto; overflow-x: auto;">
    <MyGrid :rowData="datas" :gridOptions="gridOptions1" :columnDefs="columnDefs1" :gridStyle="gridStyle1"
      @gridReady="onGridReady" @cellClicked="onCellClicked">
      <template #tbar>
        <button class="btn btn-success btn-block col-lg-3 mb-3" @click="logSelectedRows">Log Selected Rows</button>
      </template>
      <template #bbar>
        <button class="btn btn-success btn-block col-lg-3 mb-3" @click="logSelectedRows">Log Selected Rows</button>
      </template>
    </MyGrid>
  </div>
</template>

<script>
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import MyGrid from './components/MyGrid.vue';

export default {
  components: {
    MyGrid
  },
  data() {
    return {
      datas: [
        { PO_NAME: 'name1', PO_COUNT: 5, PO_DESC: 'OOXX' },
        { PO_NAME: 'name2', PO_COUNT: 4, PO_DESC: 'asd' },
        { PO_NAME: 'name3', PO_COUNT: 3, PO_DESC: 'zxc' },
        { PO_NAME: 'name4', PO_COUNT: 1, PO_DESC: 'qwe' },
        { PO_NAME: 'name5', PO_COUNT: 5, PO_DESC: 'asd' },
        { PO_NAME: 'name6', PO_COUNT: 6, PO_DESC: 'OOXzxcX' },
        { PO_NAME: 'name6', PO_COUNT: 68, PO_DESC: 'OOXzasdsadasdsadsasdasdasdadasdasdasdasdasdsadasdasdasdasdasdasdsadasdasdasdasaxcX' }
      ],
      gridOptions1: {
        rowSelection: 'multiple',// 設置多選模式
        pagination: true,
        paginationPageSize: 10,
        enableSorting: true,
        enableFilter: true,
        suppressRowClickSelection: false,
      },
      columnDefs1: [
        { headerName: '', checkboxSelection: true, headerCheckboxSelection: true, flex: 1 },
        {
          headerName: 'Name',
          field: 'PO_NAME',
          flex: 2,
          cellStyle: { textAlign: 'center' },
          headerClass: 'header-center',
          editable: true,
        },
        {
          headerName: 'Count',
          field: 'PO_COUNT',
          flex: 2,
          cellStyle: { textAlign: 'right' },
          headerClass: 'header-center',
          editable: true,
          cellEditor: 'agNumberCellEditor',
          cellEditorParams: {
            min: 0,
            max: 100
          }
        },
        {
          headerName: 'Desc',
          field: 'PO_DESC',
          flex: 5,
          cellStyle: { textAlign: 'left' },
          cellRenderer: this.descCellRenderer,
          editable: true,
          headerClass: 'header-center',
          cellEditor: 'agLargeTextCellEditor',
          cellEditorPopup: true,
          cellEditorParams: {
            maxLength: 100
          }
        }
      ],
      gridStyle1: {
        width: '700px',
        height: '400px'
      }
    };
  },
  methods: {
    onGridReady(params) {
      console.log('App ready:', params);
      this.gridApi = params.api; // 儲存 grid API 以便後續使用
    },
    onCellClicked(cell) {
      console.log('App cell:', cell);
    },
    logSelectedRows() {
      // this.gridApi.deselectAll()
      const selectedRows = this.gridApi.getSelectedRows();// 獲取所有選取的資料
      console.log('Selected Rows:', selectedRows);
    },
    descCellRenderer(params) {
      const value = params.value;
      console.log('descCellRenderer', params)
      if (value && value.length > 10) {
        return `<span title="${value}">${value.substring(0, 10)}...</span>`;
      }
      return value;
    },

  }
};
</script>
<style scoped>
.header-center .ag-header-cell-label {
  justify-content: center;
}
</style>