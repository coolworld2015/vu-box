<template>
    <header class="header d-flex justify-content-center align-items-center">
        <form class="search-form" id="search" style="display: block; position: absolute; top: -55px; width: 400px">
            <input type="text" class="form-control" placeholder="Search any media here..."
                   v-model="searchQuery" v-on:click="searchClear" v-on:keyup.enter="goSearch">
            <svg class="search-form-svg" style="top: 15px;" v-on:click="searchClear">
                <use xlink:href="#maginifierTool"></use>
            </svg>
            <span class="hot-key-hint hot-key-hint--left">/</span>
        </form>

        <div class="search-results-header">
        </div>
    </header>
</template>

<script>
    import appConfig from '../../main';

    export default {
        name: 'users-header',
        data() {
            return {
                searchQuery: ''
            }
        },
        methods: {
            searchClear() {
                this.searchQuery = '';
            },
            goSearch() {
                appConfig.$emit('searchQueryUsers', this.searchQuery);
            }
        }
    }
</script>
