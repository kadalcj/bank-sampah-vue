<template>
   <v-app id="inspire">
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


    <v-app-bar app clipped-right color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admon's Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>

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
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary></v-navigation-drawer>

    <!-- <v-main>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <v-col class="shrink">            
          </v-col>
        </v-row>
      </v-container>
    </v-main> -->

    <v-navigation-drawer v-model="right" fixed right temporary></v-navigation-drawer>

    <!-- <v-footer app color="blue-grey" class="white--text">
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>

 export default {

    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false
    }),
    methods:{
      clicked(){
        alert("clicked");
      },
    },

  }
</script>
