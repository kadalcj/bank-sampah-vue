<template>
<div>
   <v-app>
      <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="register_form" @submit="register">
                 <v-col>
                      <v-row>
                        <v-text-field class="pa-2" outlined v-model="r_firstName" label="First Name" type="text" required></v-text-field>
                        <v-text-field class="pa-2" outlined v-model="r_lastName" label="Last Name" type="text" required></v-text-field>
                      </v-row>
                      <v-text-field outlined v-model="r_email" label="Email" type="text" required></v-text-field>
                      <v-text-field outlined v-model="r_contact" label="Contact" type="text" required></v-text-field>
                      <v-text-field outlined v-model="r_password" label="Password" type="password" required></v-text-field>
                    </v-col>
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-row class="justify-center pb-8">
                    <v-btn color="primary" type="submit" @click="signup">Register</v-btn>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</div>
</template>

<script>
 import axios from 'axios';

 export default {

    data: () => ({
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
    //   async login(){
    //     if(this.$refs.login_form.validate()){
    //         try{
    //           const res = await axios.post('https://bank-sampah-api.herokuapp.com/api/login',
    //           {
    //               "email" : this.email,
    //               "password": this.password,
    //           },{
    //             headers: {
    //               'Accept' : 'application/json',
    //               'Content-Type': 'application/json',
    //             }
    //           })
    //           const user = JSON.stringify(res.data.data);
    //           const token = res.data.token;
    //           localStorage.setItem('userid', user);
    //           localStorage.setItem('token', token);
    //           this.$router.replace({path: "/dashboard"});
    //         }catch(err){
    //           console.log(err);
    //           alert("Email/ Password salah");
    //         }
    //     }
    //   },
      
       signup(){
        if(this.$refs.register_form.validate()){
            try{
              axios.post('https://bank-sampah-api.herokuapp.com/api/register',
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
            //   console.log(res);
            //   const mess = JSON.stringify(res.data.message);
            //   console.log(mess);
              console.log(this.info);
              if(!this.info){
                alert("Account Berhasil Ditambahkan, Silahkan Login");             
              }else{
                alert("Gagal Menambahkan Account ,Email sudah didaftarkan");
              }
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
