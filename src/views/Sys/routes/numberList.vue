<template>
    <div class="number-list">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Sys/numberlist' }"><i class="el-icon-service"></i>号码管理</el-breadcrumb-item>
            <el-breadcrumb-item>400号码中心</el-breadcrumb-item>
        </el-breadcrumb>
        <el-collapse v-model="activeNames">
            <el-collapse-item title="筛选" name="1">
                <el-form :inline="true" ref="form" :model="form" label-position="left">
                    <el-form-item label="400号段：不勾默认全选">
                        <el-checkbox-group v-model="form.numberlist">
                            <el-checkbox label="4000" name="numberlist"></el-checkbox>
                            <el-checkbox label="4006" name="numberlist"></el-checkbox>
                            <el-checkbox label="4001" name="numberlist"></el-checkbox>
                            <el-checkbox label="4007" name="numberlist"></el-checkbox>
                            <el-checkbox label="4008" name="numberlist"></el-checkbox>
                            <el-checkbox label="4009" name="numberlist"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="号码种类：">
                        <el-select v-model="form.numbertype" placeholder="无限制">
                            <el-option label="可选号" value="1"></el-option>
                            <el-option label="快速开通号" value="2"></el-option>
                            <el-option label="推荐号" value="3"></el-option>
                            <el-option label="隐藏号" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="号码类型：">
                        <el-select v-model="form.numbergenre" placeholder="无限制">
                            <el-option label="A类号码" value="1"></el-option>
                            <el-option label="B类号码" value="2"></el-option>
                            <el-option label="C类号码" value="3"></el-option>
                            <el-option label="D类号码" value="4"></el-option>
                            <el-option label="E类号码" value="5"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="号码模式：">
                        <el-autocomplete
                                class="inline-input"
                                v-model="form.numbermodel"
                                :fetch-suggestions="modelSearch"
                                placeholder="请输入内容"
                                @select="handleSelect"
                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="预占代理商：">
                        <el-autocomplete
                                class="inline-input"
                                v-model="form.numberagency"
                                :fetch-suggestions="agencySearch"
                                placeholder="请输入内容"
                                @select="handleSelect"
                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="400号码：" label-width="80px">
                        <el-input placeholder="*代表一到多位的任意数" v-model="form.number"></el-input>
                    </el-form-item>
                    <el-form-item label="不包含：" label-width="80px">
                        <el-input placeholder="*输入不包含" v-model="form.exclude"></el-input>
                    </el-form-item>
                    <el-form-item label="协商状态：">
                        <el-select v-model="form.condition" placeholder="选择协商状态">
                            <el-option label="协商中" value="1"></el-option>
                            <el-option label="未协商" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="号码状态：">
                        <el-select v-model="form.numbercondition" placeholder="选择号码状态">
                            <el-option label="未预占" value="1"></el-option>
                            <el-option label="已预占" value="2"></el-option>
                            <el-option label="申请开通" value="3"></el-option>
                            <el-option label="已开通" value="4"></el-option>
                            <el-option label="冻结" value="5"></el-option>
                            <el-option label="分配" value="6"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="号码星级：">
                        <el-select v-model="form.numberstart" placeholder="选择号码星级">
                            <el-option label="一星" value="1"></el-option>
                            <el-option label="二星" value="2"></el-option>
                            <el-option label="三星" value="3"></el-option>
                            <el-option label="四星" value="4"></el-option>
                            <el-option label="五星" value="5"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <div>啊啊啊</div>
        </el-collapse>
    </div>
</template>

<script>
  export default {
    name: "NumberList",
    data() {
      return {
        activeNames: ['1'],
        modelList: [],
        agencyList: [],
        form: {
          numberlist: [],
          numbertype: '',
          numbergenre: '',
          numbermodel: '',
          numberagency: '',
          number: '',
          exclude: '',
          condition: '',
          numbercondition: '',
          numberstart: ''
        }
      }
    },
    methods: {
      onSubmit(q) {
        console.log(this.form)
      },
      modelSearch(queryString, cb) {
        var restaurants = this.modelList
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      agencySearch(queryString, cb) {
        var restaurants = this.agencyList
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll() {
        return {
          modelList: [{"value": "AAAAAA"},
            {"value": "*AAAAA"},
            {"value": "*ABCDE"},
            {"value": "ABCDE*"},
            {"value": "AAABBB"},
            {"value": "**AAAA"},
            {"value": "4008A4008A"},
            {"value": "**ABCD"},
            {"value": "AAAA**"},
            {"value": "AAACDE"},
            {"value": "DEFAAA"},
            {"value": "AABBCC"},
            {"value": "ABCABC"},
            {"value": "ABABAB"}],
          agencyList: [{"value": "一级代理"}]
        }
      },
      handleSelect(item) {
        console.log(item)
      }
    },
    mounted () {
      this.modelList = this.loadAll().modelList
      this.agencyList = this.loadAll().agencyList
    }
  }
</script>

<style scoped>

</style>
