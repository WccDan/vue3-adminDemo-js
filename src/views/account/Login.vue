
<template>
  <div class="account">
    <div class="form-login">
        <a-form
            id="components-form-demo-normal-login"

            @submit="handleSubmit"
        >
            <a-form-item>
            <label>用户名</label>
            <a-input
                placeholder="Username"
            >
                <!-- <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" /> -->
            </a-input>
            </a-form-item>

            <a-form-item>
             <label>密码</label>
            <a-input
                type="password"
                placeholder="Password"
            >
                <!-- <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" /> -->
            </a-input>
          
            </a-form-item>

             <a-form-item>
             <label></label>
           
            <a-button  type="primary" html-type="submit" class="login-form-button" style="display: block; width: 100%;" @click="doLogin">
                登录111ß
            </a-button>
            </a-form-item>

            <!-- <a-form-item>
           
            <a-button  type="primary" html-type="submit" class="login-form-button" style="display: block; width: 100%;">
                登录111ß
            </a-button>
            <a href="">注册</a>
                 <label for=""> | </label>
                 <a href="">忘记密码</a>
            </a-form-item>


             <a-form-item class="registerAndforget">
           
                 <a href="">注册</a>
                 <label for=""> | </label>
                 <a href="">忘记密码</a>
           
            </a-form-item> -->

            <div class="text-center font-12 color-white">
                  <a class="color-white" href="">注册</a> |
                 <!-- {{layout.count}} -->
                 <!-- <a class="color-white" href="">忘记密码</a> -->
                 <router-link to="/Register">忘记密码</router-link>
            </div>
        </a-form>
    </div>

  </div>
</template>


<script>
import { reactive, toRef, toRefs } from 'vue'
import { useRouter } from 'vue-router';
export default {
    name:"Login",
   

        setup () {
            const state = reactive({
                layout:{
                    count: 0,
                },
                aaa:"fsds"
                
            });
            const router = useRouter();
            const doLogin = ()=>{
                
                router.push("/layout");
            };

            return {
                ...toRefs(state),
                doLogin
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