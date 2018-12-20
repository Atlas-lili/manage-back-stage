<template>
    <div class="login">
        <h1>后台管理系统</h1>
        <el-form  :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-button
                    type="primary"
                    @click="subForm(callback)"
                    ref="button"
                    v-text="isLoad?'登录中':'登录'"
                    :disabled="isLoad">
            </el-button>
            <p>Tips：账号密码随便填！</p>
        </el-form>

    </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        isLoad: false,
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      subForm (callback) {
        if(this.isUsername && this.isPassword) {
          this.isLoad = !this.isLoad
          let data = JSON.parse(JSON.stringify(this.ruleForm))
          let backData = callback(data)
          this.isLoad = !this.isLoad
          if(backData){
            sessionStorage.setItem('ms_username',this.ruleForm.username)
            // 跳转
            this.$router.replace('Sys/readme')
          } else {
            //滞留 报错
            console.log(backData)
          }
        }
      },
      callback (data) {
        console.log(data)
        return true
      }
    },
    computed: {
      isUsername(){
        // username value
        if(this.ruleForm.username){
          return true
        }
        return false
      },
      isPassword(){
        // password value
        if(this.ruleForm.password){
          return true
        }
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
.login{
    h1{
        color: white;
        font-size: 30px;
        margin-top: 15%;
        text-align: center;
    }
    form{
        margin: 20px auto 0;
        padding: 20px 20px;
        border-radius: 10px;
        width: 400px;
        background-color: white;
        button{
            width: 100%;
        }
        p{
            height: 40px;
            line-height: 40px;
            font-size: 15px;
            color: #999;
        }
    }
}

</style>
