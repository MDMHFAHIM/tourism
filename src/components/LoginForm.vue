<template>
    <div className="text-center mb-5">
      <img src="" alt="" height="48" className='mb-4' />
      <h3>Sign In</h3>
      <p>Please sign in to continue to TourNest.</p>
    </div>
    <form onSubmit={handleSubmit}>
        <div className="form-group position-relative has-icon-left">
            <label htmlFor="email" class="form-label text-primary"> Email </label>
      <input type="text" class="form-control" id="email" name="email"
        v-model="formData.email" placeholder="Enter Your Email"/>
        </div>
        <div className="form-group position-relative has-icon-left">
            <div className="clearfix">
                <label htmlFor="password" class="form-label text-primary">Password </label>
            <input type="password" class="form-control" id="password" name="password"
            v-model="formData.password" placeholder="Enter a password"/>

            </div>

            <br/>
                    
        <div className="clearfix">
            <button type="button" @click="login" class="btn btn-primary w-100"> Submit</button>
        </div>
      
      </div>
    </form>
  </template>
  
  <script>
    import DataService from "../services/DataService";
    import router from '@/router';
  export default {
    name: "LoginForm",
    data() {
      return {
        formData: {
          email: "",
          password: "",
        },
      };
    },
    methods: {
      login() {
        var data = {
          email: this.formData.email,
          password: this.formData.password
        };
        DataService.login(data)
        .then(response => {
          console.log(response.data.data.token)
          if(response.data.data.token)
            sessionStorage.setItem('uid', response.data.data.token);
          else
            alert(response.data.error)
            
            router.push({ name: 'home' });
            window.location.href='/home';
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
  };
</script>
  
 <style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }
  .text-center {
    text-align: center;
  }
  </style>