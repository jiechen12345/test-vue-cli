<template>
    <div class="table-responsive">
        <slot name="header"></slot>
        <table ref="table" class="table table-striped table-hover" style="table-layout: fixed;">
            <thead>
                <tr>
                    <th v-if="selectable" :style="{ width: '40px' }">
                        <input type="checkbox" @change="selectAll" :checked="isAllSelected" />
                    </th>
                    <slot></slot>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data" :key="index" :data-row-index="index">
                    <td v-if="selectable" style="width: 40px;">
                        <input type="checkbox" :value="index" v-model="selectedIndexes" />
                    </td>
                    <slot name="body" :row="row"></slot>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-select-bs5';

export default {
    name: 'MyTable',
    props: {
        data: {
            type: Array,
            required: true
        },
        paging: {
            type: Boolean,
            default: false
        },
        searching: {
            type: Boolean,
            default: false
        },
        ordering: {
            type: Boolean,
            default: true
        },
        info: {
            type: Boolean,
            default: true
        },
        lengthMenu: {
            type: Array,
            default: () => [[3, 10, 20, -1], [3, 10, 20, "All"]]
        },
        selectable: {
            type: Boolean,
            default: false
        },
        multiSelect: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selectedIndexes: []
        };
    },
    computed: {
        isAllSelected() {
            const currentPageData = $(this.$refs.table).DataTable().rows({ page: 'current' }).data();
            return Array.from(currentPageData).every((_, index) => this.selectedIndexes.includes(index));
        }
    },
    mounted() {
        this.initDataTable();
        console.log(this.data);
    },
    beforeDestroy() {
        if ($.fn.dataTable.isDataTable(this.$refs.table)) {
            $(this.$refs.table).DataTable().destroy();
        }
    },
    methods: {
        initDataTable() {
            $(this.$refs.table).DataTable({
                select: this.selectable ? {
                    style: this.multiSelect ? 'multi' : 'single'
                } : false,
                paging: this.paging,
                searching: this.searching,
                lengthMenu: this.lengthMenu,
                ordering: this.ordering,
                processing: true,
                info: this.info,
                columnDefs: [
                    { targets: 0, orderable: false }
                ],
                order: []
            });
        },
        selectAll(event) {
            const currentPageData = $(this.$refs.table).DataTable().rows({ page: 'current' }).data();
            if (event.target.checked) {
                Array.from(currentPageData).forEach((_, index) => {
                    this.selectedIndexes.push(index);
                });
            } else {
                Array.from(currentPageData).forEach((_, index) => {
                    const selectedIndex = this.selectedIndexes.indexOf(index);
                    if (selectedIndex !== -1) {
                        this.selectedIndexes.splice(selectedIndex, 1);
                    }
                });
            }
        },
        getSelectedData() {
            return this.selectedIndexes.map(index => this.data[index]);
        }
    }
}
</script>

<style scoped>
.table th,
.table td {
    padding: 5px !important;
    text-align: center;
}

.table td input[type="checkbox"] {
    width: 20px;
    height: 20px;
}

.table th input[type="checkbox"] {
    width: 20px;
    height: 20px;
}

.table-responsive {
    overflow-x: auto;
    overflow-y: auto;
    max-height: 500px;
    padding: 15px;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background-color: #fff;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-spacing: 0;
    border-collapse: collapse;
}

.table th {
    top: 0;
    z-index: 10;
    text-align: center;
    background-color: #eaeaea;
    color: rgb(27, 26, 26);
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
}

.table tbody tr.selected {
    background-color: #30df11 !important;
    color: white;
}

.table-hover tbody tr:hover {
    color: #495057;
    background-color: rgba(0, 0, 0, 0.075);
}

.table td,
.table th {
    border: 1px solid #dee2e6;
}
</style>