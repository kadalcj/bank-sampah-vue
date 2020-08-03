<template>
<div>
   <v-app>
      <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="login_form" @submit="login">
                  <v-text-field label="email" v-model="email" prepend-icon="mdi-account" type="text"></v-text-field>
                  <v-text-field id="password" v-model="password" label="Password" prepend-icon="mdi-lock" type="password" @keyup.enter="login()"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="primary" @click="getAuth">Sign-Up</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-container class="justify-center">
          <v-dialog width="800" v-model="dialog">
            <v-card width="800">
            <v-card-title>
              <span class="headline">Create New Account</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="register_form" @submit="register">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-row>
                        <v-text-field class="pa-2" outlined v-model="r_firstName" label="First Name" type="text" required></v-text-field>
                        <v-text-field class="pa-2" outlined v-model="r_lastName" label="Last Name" type="text" required></v-text-field>
                      </v-row>
                      <v-text-field outlined v-model="r_email" label="Email" type="text" required></v-text-field>
                      <v-text-field outlined v-model="r_contact" label="Contact" type="text" required></v-text-field>
                      <v-text-field outlined v-model="r_password" label="Password" type="password" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="pa-4" justify="end">
                    <v-btn color="primary" type="submit" @click="signup">Register</v-btn>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
          </v-dialog>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</div>
</template>

<script>
 import axios from 'axios';

 export default {

    data: () => ({
      email: null,
      password: null,
      r_email: null,
      r_password: null,
      r_firstName: null,
      r_lastName: null,
      r_contact: null,
      whoissul:null,
      dialog:false,
      info:null,
    }),
    methods:{
      clicked(){
        alert("clicked");
      },
      async login(){
        if(this.$refs.login_form.validate()){
            try{
              const res = await axios.post('https://bank-sampah-api.herokuapp.com/api/login',
              {
                  "email" : this.email,
                  "password": this.password,
              },{
                headers: {
                  'Accept' : 'application/json',
                  'Content-Type': 'application/json',
                }
              })
              const user = JSON.stringify(res.data.data);
              const token = res.data.token;
              localStorage.setItem('userid', user);
              localStorage.setItem('token', token);
              this.$router.replace({path: "/dashboard"});
            }catch(err){
              console.log(err);
              alert("Email/ Password salah");
            }
        }
      },
      
       signup(){
        if(this.$refs.register_form.validate()){
            try{
              const res = axios.post('https://bank-sampah-api.herokuapp.com/api/register',
              {
                  "email" : this.r_email,
                  "password": this.r_password,
                  "firstName": this.r_firstName,
                  "lastName": this.r_lastName,
                  "contact": this.r_contact ,
              },{
                headers: {
                  'Accept' : 'application/json',
                  'Content-Type': 'application/json',
                }
              }).then(response => (this.info = response.data))
              console.log(res);
              // const mess = JSON.stringify(res.data.message);
              // if(!mess){
              //   const data = res.data;
              //   if(data){
              //     alert("Account Berhasil Ditambahkan, Silahkan Login");
              //   }else{
              //     alert("Gagal Menambahkan Account ,Silahkan Coba Beberapa Saat Lagi");
              //   }                
              // }else{
              //   alert("Gagal Menambahkan Account ,Email sudah didaftarkan");
              // }
            }catch(err){
              console.log(err);
            }
        }
      },

      getAuth(){
        this.dialog = true;
      },
      validation(){
        if(this.whoissul == "kadalcj"){
          alert("Muehehe, admin | admin");
        }else{
          alert("Mmmmh..., Try again");
        }
        this.whoissul = null;
        this.dialog = false;               
      }
    },

  }
</script>
