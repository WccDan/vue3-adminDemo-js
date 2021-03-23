<template>
  
    <div class="header-menu">
        <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
            Hover me
            <!-- <DownOutlined /> -->
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>

<script>

export default {
    name: "Header",
    components: {
    // DownOutlined,
  },
   
}
</script>

<style long="scss" scoped>

</style>