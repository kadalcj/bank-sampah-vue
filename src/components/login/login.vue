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
                  <v-text-field label="Login" v-model="name" prepend-icon="mdi-account" type="text"></v-text-field>
                  <v-text-field id="password" v-model="password" label="Password" prepend-icon="mdi-lock" type="password" @keyup.enter="login()"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="getAuth">I'm SuL</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog">
          <v-card>
          <v-card-title>
            <span class="headline">Muehehehe, looking for account eh?</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field v-model="whoissul" @keyup.enter="validation()" label="SuL's Signature Nickname" required></v-text-field>
                </v-col>
                <v-btn color="primary" text @click="validation">Submit</v-btn>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            
          </v-card-actions>
        </v-card>
        </v-dialog>


      </v-container>
    </v-main>


  </v-app>
</div>
</template>

<script>

 export default {
      components:{
   },

    data: () => ({
      name: null,
      password: null,
      whoissul:null,
      dialog:false,
    }),
    methods:{
      clicked(){
        alert("clicked");
      },
      async login(){
        if(this.$refs.login_form.validate()){
          if(this.name == "admin" && this.password == "admin"){
            await localStorage.setItem('userid', 1);
             this.$router.replace({path: "/dashboard"});
          }else{
            alert("Username/ Password anda Salah");
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
