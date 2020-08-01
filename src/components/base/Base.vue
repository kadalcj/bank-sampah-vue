<template>
<div>
   <v-app>
       <!-- navigation -->
    <v-navigation-drawer v-model="drawerRight" app clipped right>
      <v-list dense>
         <v-list-item>
          <v-list-item-action>
            <v-icon>
             brightness_6
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dark Theme</v-list-item-title>
          </v-list-item-content>
           <v-switch v-model="$vuetify.theme.dark">
            </v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-on:click="clicked">
          <v-list-item-action>
            <v-icon>
             account_circle
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-on:click="logout">
          <v-list-item-action>
            <v-icon>
             logout
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admon's Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>

    <!--  -->
    <v-main>
      <card1/>
      <!-- <card2/>       -->
    </v-main>


  </v-app>
</div>
</template>

<script>

 export default {
      components:{
     'card1':() => import('../main/baseCard'),
    //  'card2':() => import('../main/card2'),
   },

    data: () => ({
      drawer: null,
      drawerRight: null,
    }),
    methods:{
      clicked(){
        alert("clicked");
      },
      logout(){
        localStorage.removeItem('userid');
        this.$router.replace({path: "/login"});
      },
    },

  }
</script>
