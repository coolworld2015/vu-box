<template>
    <div v-if="status === 'loading'">
        <div style="position: relative; top: 100px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
            <img src="../../assets/img/loading.gif">
        </div>
    </div>

    <div v-else-if="status === 'show'" class="search-results-content" style="padding-top: 0px;">
        <div class="payment" v-for="item in items" v-on:click="showDetails(item)">
            <div class="search-results-item search-results-choose" style="width: 15%;">
                <img :src="item.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg')"
                     style="width: 140px; height: 150px; border-radius: 20px">
            </div>
            <div class="search-results-item search-results-sender"
                 style="width: 40%; font-size: 25px; font-family: cursive;">
                {{ item.trackName }}
            </div>
            <div class="search-results-item search-results-sender"
                 style="width: 20%; font-size: 25px; font-family: cursive;">
                {{ item.primaryGenreName }}
            </div>
            <div class="search-results-item search-results-transfer"
                 style="width: 10%; font-size: 25px; font-family: cursive;">{{ item.releaseDate.split('-')[0] }}
            </div>
            <div class="search-results-item search-results-sender"
                 style="width: 20%; font-size: 25px; font-family: cursive;">
                {{ item.kind }}
            </div>

        </div>
    </div>

    <div v-else-if="status === 'error'">
        <div
                style="position: relative; top: 200px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; color: red; font-weight: bold; font-size:24px">
            Something went wrong
        </div>
    </div>
</template>

<script>
    import appConfig from '../../main'

    export default {
        name: 'box-items',
        data() {
            return {
                items: [],
                filteredItems: [],
                recordsCount: 20,
                positionY: 0,
                status: 'loading',
                clicked: false
            }
        },
        created() {
            this.fetchData();
            this.notification = {
                title: 'Something went wrong',
                message: 'Server responded with status code error',
                important: true
            };
            appConfig.$on('searchQueryUsers', searchQuery => {
                this.fetchData(searchQuery);
            })
        },
        methods: {
            fetchData(searchQuery) {
                this.status = 'loading';

                if (!searchQuery) {
                    if (!appConfig.searchText) {
                        appConfig.getSearchText();
                    }
                    searchQuery = appConfig.searchText;
                }

                this.$http.jsonp('https://itunes.apple.com/search?media=all&term=' + searchQuery)
                    .then((response) => response.json())
                    .then(result => {
                        this.items = result.results;
                        this.filteredItems = result.results;
                        this.status = 'show';
                        appConfig.setSearchText(searchQuery);
                        appConfig.$emit('itemsCount', result.results.length);
                        setTimeout(() => {
                            document.querySelector('.search-results-content').addEventListener('scroll', this.handleScroll)
                        }, 100)
                    }).catch((error) => {
                    appConfig.notifications.items.push(this.notification);
                    this.status = 'show';
                })
            },
            handleScroll() {
                let position = document.querySelector('.search-results-content').scrollTop;
                let items, positionY, recordsCount;
                recordsCount = this.recordsCount;
                positionY = this.positionY;
                items = this.filteredItems.slice(0, recordsCount);

                if (position > positionY) {
                    this.items = items;
                    this.recordsCount = recordsCount + 10;
                    this.positionY = positionY + 400
                }
            },
            showDetails(item) {
                appConfig.box = item;
                this.$router.push('box-show');
            }
        }
    }
</script>
