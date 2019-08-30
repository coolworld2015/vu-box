<template>
    <div class="wrapper">
        <navbar></navbar>
        <div class="content">
            <main style="padding: 40px 20px 40px;">
                <section class="search-results" style="overflow:auto;">
                    <user-form-edit></user-form-edit>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
    import navbar from '@/components/common/navbar';
    import userFormEdit from '@/components/box/form-edit';

    export default {
        name: 'user-edit',
        components: {
            navbar: navbar,
            userFormEdit: userFormEdit
        }
    }
</script>
