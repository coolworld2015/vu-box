<template>
    <div v-if="loading">
        <div style="position: relative; top: 100px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
            <img src="../../assets/img/loading.gif">
        </div>
    </div>

    <div v-else>
        <center>
            <img :src="this.pic.replace('100x100bb.jpg', '500x500bb.jpg')"
                 style="width: 500px; height: 500px; border-radius: 20px; margin-bottom: 20px;"
                 v-on:click="updateItem">

            <div style="font-size: 40px; font-weight: bold; font-family: cursive; margin-bottom: 10px;">
                <div>{{ name }}</div>
            </div>
            <div style="font-size: 30px; font-weight: bold; font-family: cursive; margin-bottom: 10px;">
                <div>{{ artistName }}</div>
            </div>
            <div style="font-size: 30px; font-weight: bold; font-family: cursive; margin-bottom: 10px;">
                <div>{{ collectionName }}</div>
            </div>
            <div style="font-size: 20px; font-weight: bold; margin-bottom: 10px; font-family: 'serif';">
                <div>{{ longDescription }}</div>
            </div>
            <div style="font-size: 30px; font-weight: bold; font-family: cursive; margin-bottom: 10px;">
                <div>{{ primaryGenreName }}</div>
            </div>
            <div style="font-size: 30px; font-weight: bold; font-family: cursive; margin-bottom: 10px;">
                <div>{{ releaseDate }}</div>
            </div>
            <div style="font-size: 30px; font-weight: bold; font-family: cursive; margin-bottom: 30px;">
                <div>{{ kind }}</div>
            </div>

            <button class="btn btn-danger" v-on:click="updateItem" style="width: 400px; font-size: 20px;">
                Play
            </button>
        </center>
    </div>
</template>

<script>
    import appConfig from '../../main'

    export default {
        name: 'box-show',
        data() {
            return {
                name: '',
                url: '',
                pic: '',
                kind: '',
                artistName: '',
                collectionName: '',
                primaryGenreName: '',
                releaseDate: '',
                longDescription: '',
                loading: false
            }
        },
        created() {
            if (!appConfig.box) {
                this.$router.push('/box')
            } else {
                this.setData()
            }
        },
        methods: {
            setData() {
                if (appConfig) {
                    if (appConfig.box) {
                        console.log(appConfig.box);
                        this.name = appConfig.box.trackName;
                        this.artistName = appConfig.box.artistName;
                        this.url = appConfig.box.previewUrl;
                        this.pic = appConfig.box.artworkUrl100;
                        this.kind = appConfig.box.kind;
                        this.collectionName = appConfig.box.collectionName;
                        this.primaryGenreName = appConfig.box.primaryGenreName;
                        this.releaseDate = appConfig.box.releaseDate.split('-')[0];
                        this.longDescription = appConfig.box.longDescription
                    }
                }
            },
            updateItem() {
                if (appConfig.box.kind === 'podcast') {
                    this.$router.push('/box');
                    return null;
                }
                window.location = this.url
            }
        }
    }
</script>
