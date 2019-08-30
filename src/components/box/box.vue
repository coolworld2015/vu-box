<template>
    <div class="wrapper">
        <navbar></navbar>
        <div class="content">
            <main>
                <section class="search-results">
                    <users-header></users-header>
                    <users-items></users-items>
                </section>
                <users-footer></users-footer>
            </main>
        </div>

    </div>
</template>

<script>
    import appConfig from '../../main';
    import navbar from '@/components/common/navbar';
    import usersHeader from '@/components/box/header';
    import usersItems from '@/components/box/items';
    import usersFooter from '@/components/box/footer';

    export default {
        name: 'box',
        data() {
            return {
                route: 'Box'
            }
        },
        created() {
            appConfig.route = this.route;
        },
        components: {
            navbar,
            usersHeader,
            usersItems,
            usersFooter
        }
    }
</script>
