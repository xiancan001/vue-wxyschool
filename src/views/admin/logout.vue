<template>
    <div class="">
        登出界面！
    </div>
</template>

<script>
import { defineComponent } from "vue"
import { useUserStore } from "../../store/user"
export default defineComponent({
    data() {
        return {}
    },
    created() { },
    mounted() {
        const store = useUserStore();
        store.$reset();
        this.$router.push("/login")
    },
    methods: {},
    components: {}
})
</script>

<style lang="scss" scoped></style>
