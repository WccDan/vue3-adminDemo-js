
<template>
  <div class="account">
    <div class="form-login">
        <a-form
            name="custom-validation"
             ref="formRef"
            :model="register_form"
            :rules="rules_regist"
            v-bind="layout"
            @finish="handleFinish"
        >
            <a-form-item name="usernameCheck">
            <label>用户名</label>
            <a-input 
                v-model:value="register_form.userName"
                type="text" 
                autocomplete="off"
                placeholder="Username"  />
                {{register_form.userName}}
            </a-form-item>

            <a-form-item>
             <label>密码</label>
            <a-input v-model="register_form.password"
                type="password"
                placeholder="Password"
            >
                <!-- <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" /> -->
            </a-input>
          
            </a-form-item>

            <a-form-item>
             <label>确认密码</label>
            <a-input
                 v-model="register_form.rePassword"
                type="password"
                placeholder="Password"
            >
                <!-- <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" /> -->
            </a-input>
          
            </a-form-item>

            <a-form-item>
             <label>验证码</label>
             <a-row :gutter="16">
                  <a-col :span="15">
                    <a-input
                    v-model="register_form.code"
                    type="password"
                    placeholder="Password"
                    >
                    </a-input>
                </a-col>

                <a-col :span="9">
                     <a-button block type="primary" :loading = "codeData.isLoading" :disabled="codeData.isDisable" @click="getCode">

                        {{codeData.codeText}}
                    </a-button>
                </a-col>
             </a-row>
               
 
            </a-form-item>

             <a-form-item>
             <label></label>
           
            <a-button  type="primary" html-type="submit" class="login-form-button" style="display: block; width: 100%;">
                注册
            </a-button>
            </a-form-item>


        </a-form>
    </div>

  </div>
</template>


<script>
import { checkPhone } from '@/utils/wcccheck.js';
import { message } from 'ant-design-vue';

import { RuleObject, ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { reactive, toRef, toRefs,defineComponent,ref} from 'vue'
export default {
    name:"Login",
        setup () {
            const formRef = ref();
            const state = reactive({
                register_form:{
                    userName:"",
                    password:"",
                    rePassword:"",
                    code:""
                }

            });
             const code = reactive({
                codeData:{
                    codeText:"获取验证码",
                    codeTime:5,
                    isLoading:false,
                    isDisable:false,
                    timer:null,
                }
                
            });


                const checkuserName = (rule,value,callback) => {
                    console.log(rule)
                    console.log()
                if (!value) {
                    // callback('两次密码输入不一致！')
                    return Promise.reject('请输入账号');
                }
                if (!checkPhone(value)) {
                    return Promise.reject('请输入11位的手机号码');
                }
                 else {
                    //  callback()
                    return Promise.resolve();
                }
                };
              const layout = {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                };
            //验证规则
            const rules_regist = {
                usernameCheck: [{ validator: checkuserName, trigger: 'change' }],
                // pass: [{ validator: validatePass, trigger: 'change' }],
                // usernameCheck: [
                //         { required: true, message: 'Please input Activity name', trigger: 'blur' },
                //         { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
                //     ],
              };

            //获取验证码
            const getCode = () =>{
                if (!state.register_form.userName) {
                    message.warning('用户名不能为空');
                    return false;
                }

                

                if (code.codeData.timer) {
                    clearInterval(code.codeData.timer)
                    code.codeData.isLoading = false;
                    code.codeData.isDisable = false;
                }
              code.codeData.timer =  setInterval(() => {
                code.codeData.isLoading = true;
                code.codeData.isDisable = true;
                const shi = code.codeData.codeTime --;
                code.codeData.codeText = shi + "秒";
                if (shi <= 0) {
                    code.codeData.isLoading = false;
                    code.codeData.isDisable = false;
                    code.codeData.codeText = "重新获取"
                    clearInterval(code.codeData.timer)
                    code.codeData.codeTime = 5;
                }
                },1000)

            }

             //提交事件
            const handleFinish = () =>{
                alert("sdfsf")
            };
            return {
                ...toRefs(state),
                ...toRefs(code),
                handleFinish,
                rules_regist,
                getCode,
                // layout,
                

               
            }

           
        }
    

}
</script>

<style lang="scss">
@import "./style.scss";
</style>

<!---
scoped
局部的样式应用，只在当前文件应用
可以避免样式全局冲突
---->