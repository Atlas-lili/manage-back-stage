<template>
    <div class="sys-list">
        <el-menu :default-active="onRouter"
                class="el-menu-vertical-demo"
                background-color="#324157"
                text-color="#bfcbd9"
                active-text-color="#20A0FF"
                unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs===undefined">
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
                <template v-else>
                    <el-submenu :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="child in item.subs" :index="child.index">{{child.title}}</el-menu-item>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
  export default {
    name: "SysList",
    data () {
      return {
        items: [
          {
            icon: 'el-icon-setting',
            index: 'readme',
            title: '首页'
          },
          {
            icon: 'el-icon-menu',
            index: '2',
            title: '商品',
            subs: [
              {
                index: 'basetable',
                title: '基础表格'
              },
              {
                index: 'vuetable',
                title: 'Vue表格组件'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: '3',
            title: '订单',
            subs: [
              {
                index: 'baseform',
                title: '基本表单'
              },
              {
                index: 'vueeditor',
                title: '编辑器'
              },
              {
                index: 'markdown',
                title: 'markdown'
              },
              {
                index: 'upload',
                title: '文件上传'
              }
            ]
          },
          {
            icon: 'el-icon-star-on',
            index: '4',
            title: '渠道',
            subs: [
              {
                index: 'baseform',
                title: '基本表单'
              },
              {
                index: 'vueeditor',
                title: '编辑器'
              },
              {
                index: 'markdown',
                title: 'markdown'
              },
              {
                index: 'basecharts',
                title: '文件上传'
              }
            ]
          },
          {
            icon: 'el-icon-upload2',
            index: 'drag',
            title: '财务'
          },
          {
            icon: 'el-icon-view',
            index: 'jur',
            title: '权限'
          },
          {
            icon: 'el-icon-setting',
            index: 'sys',
            title: '系统'
          }
        ]
      }
    },
    computed: {
      onRouter() {
        return this.$route.path.split('/')[2]
      }
    }
  }
</script>

<style lang="scss" scoped>
.sys-list{
    position: absolute;
    top: 70px;
    left: 0px;
    bottom: 0px;
    width: 250px;
    overflow: hidden;
    background-color: #2E363F;
    ul{
        height: 100%;
    }
}
</style>
