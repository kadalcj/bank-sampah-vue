<template>
<div>
    <v-card class="ma-4">
        <v-data-table
            :headers="headers"
            :items="listReward"
            sort-by="calories"
            class="elevation-1"
        >
            <template v-slot:top>
            <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-toolbar-title class="headline">Reward</v-toolbar-title>
                <!-- <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider> -->
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    >New Reward</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.name" label="Nama Item"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.req_poin" label="Req Point"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.stock" label="Stock"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </v-card>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
      dialog: false,
      statusCreate: null,
      headers: [
        {
          text: 'Nama',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Req Point', value: 'req_poin' },
        { text: 'Stock', value: 'stock' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      listReward: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        req_poin: '',
        stock: '',
      },
      defaultItem: {
        name: '',
        req_poin: '',
        stock: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
        async getReward(){
            try{
            const res = await axios.get('http://bank-sampah-api.herokuapp.com/api/reward');
            this.listReward = res.data.data;
            // console.log(this.listReward);
            }catch(err){
                console.log(err);
            }
        },
        async createReward(){
            try{
                const res = await axios.post('http://bank-sampah-api.herokuapp.com/api/reward',{
                    "name" : this.editedItem.name,
                    "req_poin" : this.editedItem.req_poin,
                    "stock" : this.editedItem.stock,
                },{
                headers: {
                  'Accept' : 'application/json',
                  'Content-Type': 'application/json',
                }
                }).then(response => this.statusCreate = response);
                console.log(res);
            }catch(err){
                console.log(err);
            }
        },
        async editReward(){
            try{
                 await axios.post('http://bank-sampah-api.herokuapp.com/api/reward/' + this.editedItem._id ,{
                    "name" : this.editedItem.name,
                    "req_poin" : this.editedItem.req_poin,
                    "stock" : this.editedItem.stock,
                },{
                headers: {
                  'Accept' : 'application/json',
                  'Content-Type': 'application/json',
                }
                }).then(response => this.statusCreate = response);
            }catch(err){
                console.log(err);
            }
        },
        async deleteReward(){
            try{
                await axios.delete('http://bank-sampah-api.herokuapp.com/api/reward/' + this.editedItem._id)
            }catch(err){
                console.log(err);
            }
        },

      editItem (item) {
        this.editedIndex = this.listReward.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.listReward.indexOf(item)
        this.editedItem = Object.assign({}, item)
        confirm('Are you sure you want to delete this item?')? this.listReward.splice(index, 1) && this.deleteReward() : this.dialog = false
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
            this.editReward();  
          Object.assign(this.listReward[this.editedIndex], this.editedItem)
        } else {
         this.createReward();
          this.listReward.push(this.editedItem)
        }
        this.close()
      },
    },
    mounted(){
        this.getReward();
    }

}
</script>

<style scoped>
.center{
  margin: auto;
}

</style>
