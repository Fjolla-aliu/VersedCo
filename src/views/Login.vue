
<template>
    <div class="form-wrap">

            <form  class="login">
                 
                 <p class="login-register"> Don't have an account?
                    <RouterLink class="router-link" :to="{name: 'Register'}">Register</RouterLink>
                 </p>
                 <h2>Login</h2>

                 <div class="inputs">
                     <div class="input">
                    <input type="email" placeholder="Email address" v-model="email" />
                    </div>
                    <div class="input">
                    <input type="password" placeholder="Password" v-model="password" />
                    </div>
                    <div  v-show="error" class="error">{{ this.errorMsg }}</div>
                     </div>

                     <button @click.prevent="signIn">Sign in</button>

                    <div class="angle"></div>
            </form>

                    <div class="background"></div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

import { auth } from '@/firebase'


export default {

    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    components: {
      
    },

    data() {
        return {
            email: "",
            password: "",
            error: null,
            errorMsg: "",
        };
    },
    methods: {
        signIn() {
            //     auth.signInWithEmailAndPassword(this.email, this.password).then(() => { 
            //         this.$router.push({ name: "Home" });
            //         this.error = false;
            //         this.errorMsg = "";
            //         console.log(auth.currentUser.uid);
            //     })
            //     .catch((err) => {
            //         this.error = true;
            //         this.errorMsg = err.message;
            //     });
            // }
            auth.onAuthStateChanged(() => {
                auth.signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$router.push({ name: 'Home' })
                        this.error = false
                        this.errorMsg = ''
                    })
                    .catch((err) => {
                        this.error = true
                        this.errorMsg = err.message
                    });
            });
        }
    }
};

</script>

<style lang="scss">

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
        right: -30px;
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