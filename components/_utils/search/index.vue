<template>
    <div class="search-block border">
        <ul>
            <li class="search-block--input">
                <div>
                    <button><span class="icon-search"><i class="fal fa-search"></i></span></button>
                    <input type="search" @input='$emit("searchChange", $event.target.value)' :placeholder="placeholder"
                           v-model="searchValue">
                </div>
            </li>
            <li class="search-block--select">
                <div>
                    <span class="icon-filter" @click="_.random(20)"><i class="fal fa-filter"></i></span>
                    <div class="search-block--select__">
                        <select v-model="filterValue" @change="filterChange">
                            <option disabled value="all" v-if="filter.length===0">Don`t have filter.</option>
                            <option :value="el.value" v-for="(el,i) in filter" :key="i">
                                {{el.name}}
                            </option>
                        </select>
                    </div>

                </div>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {type: String, required: true},
            filter: {type: Array, required: true}
        },
        data() {
            return {
                searchValue: '',
                filterValue: 'all',
            }
        },
        methods: {
            searchChange() {
                this.$emit("searchChange", el.value)
            },
            filterChange() {
                this.$emit("filterChange", this.filterValue)
            }
        }
    }
</script>

<style lang='scss' scoped>
</style>
