<template>
    <div class="pagination">
    <ul>
        <li>
            <a href="#" @click.prevent="pageChanged(1)" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li v-for="(page, i) in paginationRange" :key="i" >
            <a :class="activePage(page)" href="#" @click.prevent="pageChanged(page)">{{ page }}</a>
        </li>
        <li>
            <a href="#" @click.prevent="pageChanged(lastPage)" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
    </div>
</template>
<style lang='scss' scoped>
    
</style>

<script>
    export default {

        props: {
            currentPage: {},
            totalPages: {},
            // Items per page
            itemsPerPage: Number,
            // Total items
            totalItems: Number,
            // Visible Pages
            visiblePages: {
                type: Number,
                default: 5,
            }
        },

        data() {
            return {}
        },

        computed: {
            lastPage() {
                if (this.totalPages) {
                    return this.totalPages
                }
                else {
                    return this.totalItems % this.itemsPerPage === 0 ?
                        this.totalItems / this.itemsPerPage :
                        Math.floor(this.totalItems / this.itemsPerPage) + 1
                }
            },

            paginationRange() {
                let start = this.currentPage - this.visiblePages / 2 <= 0 ?
                    1 : this.currentPage + this.visiblePages / 2 > this.lastPage ?
                    (this.lastPage - this.visiblePages + 1, 1) :
                    Math.ceil(this.currentPage - this.visiblePages / 2);
                let range = [];
                for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
                    range.push(start + i)
                }
                return range
            }
        },

        methods: {
            pageChanged(pageNum) {
                this.$emit('page-changed', pageNum)
            },

            activePage(pageNum) {
                return this.currentPage === pageNum ? 'active' : ''
            }
        }

    }
</script>
