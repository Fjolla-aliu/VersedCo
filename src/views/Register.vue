
<template>
    <div class="form-wrap">

        <form class="register" action="#"  @submit.prevent="Register" >

            <p class="login-register"> Already have an account?
                <RouterLink class="router-link" :to="{ name: 'Login' }">Login</RouterLink>
            </p>
            <h2>Create your account</h2>

            <div class="inputs">
                <div class="input">
                <input type="text" placeholder="Username" v-model="username" />
                </div>
                 <div class="input">
                    <input type="email" placeholder="Email" v-model="email" />
                    </div>
                <div class="input">
                <input type="password" placeholder="Password" v-model="password" />
                </div>
                <div  v-show="error" class="error">{{ this.errorMsg }}</div>
            </div>

            <button type="submit">Sign up</button>

            <div class="angle"></div>
        </form>

        <div class="background"></div>
    </div>
</template>


<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Register",
    setup() {
        const name = ref('')
        const email = ref('')
        const password = ref('')
        const error = ref(null)

        const store = useStore()
        const router = useRouter()

        const Register = async () => {
            try {
                await store.dispatch('register', {
                    email: email.value,
                    password: password.value,
                    name: name.value
                })
                router.push('/home')
            }
            catch (err) {
                console.log(err.message);
            }
        }

        return { Register, name, email, password, error }
    }
};
</script>

<style lang="scss" scoped>
    .register{
        h2{
            max-width: 350px;
        }
    }
    
    .form-wrap{
        overflow: hidden;
        margin: 0 auto;
        justify-content: center;
        display: flex;
        align-self: center;
        width: 90%;
        height: 100vh;
         min-height: 100vh; 
         @media(min-width: 900px){
            width: 100%;
         }
        
    

     .login-register{
        margin-bottom: 32px;
    } 
    .router-link
    {
        color: #000;
    }   
 }
    form{
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;

        @media(min-width: 900px) {
            padding: 0 50px;
        }  
        
        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;
            @media(min-width: 900px) {
                font-size: 40px;
            } 
        }
    
        

    .inputs{
        
        width: 100%;
        max-width: 350px;
        
        input{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 8px;
            width: 100%;
            border: none;
            background-color: #f2f7f6;
            padding: 4px 4px 4px 30px;
            height:50px;
            
            &:focus {
            outline: none;
            }
        }
    }
    
	.angle{
        display: none;
        position: absolute;
        background-color: #fff;
        transform: rotateZ(3deg);
        width: 60px;
        right: -31px;
        height: 101%;
        @media (min-width: 900px){
            display: initial;
        }

    }
}

    .background{
        display: none;
        flex: 2;
        background-size: cover;
        background-image: url("../assets/background.png");
        width: 100%;
        height: 100%;
        @media(min-width: 900px){
            display: initial;
        }
    }
</style>