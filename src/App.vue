<template>
  <v-app>
    <v-toolbar color="#1D2939" dark app dense>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">MODELO</span>
        <span>2</span>
        <span class="font-weight-light">&</span>
        <span class="font-weight-light">MODELO</span>
        <span>10</span>
      </v-toolbar-title>   
      <v-spacer></v-spacer>      
      <v-toolbar-items>
        <v-menu open-on-hover offset-y>
          <v-btn
            slot="activator"
            flat
          >
            Modelo 2
          </v-btn>
          <v-list>
            <v-list-tile @click="$router.push({ name: 'ModeloDois' })">
              <v-list-tile-title>Novo Modelo 2</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="$router.push({ name: 'ListaModeloDois' })">
              <v-list-tile-title>Lista Modelo 2</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y>
          <v-btn
            slot="activator"
            flat
          >
            Modelo 10
          </v-btn>
          <v-list>
            <v-list-tile @click="$router.push({ name: 'ModeloDez' })">
              <v-list-tile-title>Novo Modelo 10</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="$router.push({ name: 'ListaModeloDez' })">
              <v-list-tile-title>Lista Modelo 10</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      	<v-btn disabled @click="$router.push({ name: 'Mapa' })" flat>Sair</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view ></router-view>
    </v-content>
    
  <v-footer 
    fixed
    height="10px"
    class="pa-3"
  >
    <div>&copy; {{ new Date().getFullYear() }} — Desenvolvida por <strong>Helder Alves [Tel.: 5927282 * Email: helder2999@gmail.com]</strong></div>
  </v-footer>
  </v-app>
</template>

<script>
import auth from './auth'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: false,
      MenuModelo2: [
        { title: 'Novo Modelo 2' },
        { title: 'Lista Modelo 2' }
      ],
      MenuModelo10: [
        { title: 'Novo Modelo 10' },
        { title: 'Lista Modelo 10' }
      ]
    }
  },
  props: {
    source: String
  },
  methods: {
    logout () {
      auth.logout(this)
    },
    isAuthenticated () {
      return auth.isAuthenticated()
    }
  }
}
</script>

<style>
	body {
	  /*background: rgb(204,204,204); */
	  background: rgb(82, 86, 89);
	}
	.v-content {
	  /*background: rgb(204,204,204); */
	  background: rgb(82, 86, 89);
	}
	
@media print {
	body {
	  /*background: rgb(204,204,204); */
	  background: rgb(255, 255, 255);
	}
	.v-content {
	  /*background: rgb(204,204,204); */
	  background: rgb(255, 255, 255);
	}
  nav{
    display: none
  }
  .v-footer{
    display: none
  }

}
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
