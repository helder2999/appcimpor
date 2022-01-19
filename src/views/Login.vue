<template>
<v-container fluid fill-height>
	<v-layout align-center justify-center>
	  <v-flex xs12 sm8 md4>
	    <v-card class="elevation-12">
	      <v-toolbar dense dark color="#1D2939">
	        <v-toolbar-title>
	        	<span>Acesso a Aplicação</span>
	        </v-toolbar-title>
	        <v-spacer></v-spacer>
	      </v-toolbar>
	      <v-card-text>
	        <v-form>
	          <v-text-field 
	          	type="text"
	          	name="login" 
	          	label="Utilizador" 
	          	prepend-icon="person" 
        			v-on:keyup.enter="submit"
        			v-model="credentials.username">
	          </v-text-field>
	          <v-text-field 
	          	id="password"  
	          	type="password" 
	          	name="password" 
	          	prepend-icon="lock"
	          	label="Palavra-passe"
        			v-on:keyup.enter="submit"
        			v-model="credentials.password">		          		
	          </v-text-field>
	        </v-form>
	      </v-card-text>
	      <v-card-actions>
	        <v-spacer></v-spacer>
	        <v-btn @click="submit" dark color="#1D2939">Acessar a Aplicação</v-btn>
	      </v-card-actions>
	    </v-card>
	  </v-flex>
	</v-layout>
</v-container>
</template>
<script>
import auth from '../auth'

  export default {
    data: () => ({
      drawer: null,
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }),
    props: {
      source: String
    },
		methods: {
			submit () {
			  var credentials = {
			    username: this.credentials.username,
			    password: this.credentials.password
			  }
			  auth.login(this, credentials, 'secretquote')
			}
		}
  }
</script>