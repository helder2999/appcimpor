<template>
<v-container fluid fill-height>
	<v-layout align-center justify-center>
	  <v-flex xs12 sm8 md8>
	    <v-card>
        <v-card-title>
          <v-toolbar flat color="white">
            <v-toolbar-title>Lista dos Modelo 10</v-toolbar-title>
            <v-divider
                class="mx-2"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Procurar"
                single-line
                hide-details
            ></v-text-field>
          </v-toolbar>    
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="modelo10"
        :search="search"
        >
        <template slot="items" slot-scope="props">
            <td>{{ props.item.POR }}</td>
            <td class="text-xs-left">
              {{ Date(props.item.created_at) | moment("DD/MM/YYYY") }}
            </td>
            <td class="text-xs-center">
                <v-tooltip top>
                  <v-icon
                  class="mr-2"
                  slot="activator"
                  @click="$router.push({name: 'DetalheModelo10', params:{ id: props.item.id}})"
                  >
                  search
                  </v-icon>
                  <span>Abrir</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-icon
                  slot="activator"
                  class="mr-2"
                  @click="$router.push({name: 'AlterarModelo10', params:{ id: props.item.id}})"
                  >
                  edit
                  </v-icon>
                  <span>Editar</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-icon
                  slot="activator"
                  @click="EliminaModelo10(props.item.id)"
                  >
                  delete
                  </v-icon>
                  <span>Eliminar</span>
                </v-tooltip>
            </td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Não existe nenhum registro com essa informação "{{ search }}".
        </v-alert>
        </v-data-table>
      </v-card>
	  </v-flex>
	</v-layout>
</v-container>
</template>
<script>
  import firebase from '../ConfigFirebase.js'
  import moment from 'moment'
  export default {
    data () {
      return {
        search: '',
        modelo10:[],
        headers: [
          {
            text: 'Por',
            align: 'left',
            value: 'name',
            width: '60%'
          },
          { 
            text: 'Data', 
            align: 'left',
            sortable: true,
            value: 'calories',
            width: '20%'
          },
          { 
            text: 'Acções',
            align: 'center',
            sortable: false,
            value: 'fat' ,
            width: '20%'
          }
        ]
      }
    },
    methods:{
      EliminaModelo10(ID) {
        this.$swal.fire({
          title: 'Deseja realmente eliminar esse registro ?',
          text: "Você não poderá reverter isso!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, Eliminar!',
          cancelButtonText: 'Não, Cancelar!'
        }).then((result) => {
          if (result.value) {
            firebase.db.doc(`modelo10/${ID}`).delete()
            this.$swal.fire(
              'Eliminado!',
              'O registro foi eliminado com sucesso.',
              'success'
            )
          }
        })
      }
    },
    mounted(){
    firebase.db.collection('modelo10').orderBy('created_at').onSnapshot((snapShot) => {
            this.modelo10=[];
            snapShot.forEach((m10)  => {
                this.modelo10.push({
                  id:m10.id,
                  created_at: m10.data().created_at,
                  POR: m10.data().POR,
                  TARA: m10.data().TARA,
                  CAIXA: m10.data().CAIXA,
                  MARCA: m10.data().MARCA,
                  DT1_1: m10.data().DT1_1,
                  DT1_2: m10.data().DT1_2,
                  DT1_3: m10.data().DT1_3,
                  DT1_4: m10.data().DT1_4,
                  DT2_1: m10.data().DT2_1,
                  DT2_2: m10.data().DT2_2,
                  DT2_3: m10.data().DT2_3,
                  DT2_4: m10.data().DT2_4,
                  DT3_1: m10.data().DT3_1,
                  DT3_2: m10.data().DT3_2,
                  DT3_3: m10.data().DT3_3,
                  DT3_4: m10.data().DT3_4,
                  DT4_1: m10.data().DT4_1,
                  DT4_2: m10.data().DT4_2,
                  DT4_3: m10.data().DT4_3,
                  DT4_4: m10.data().DT4_4,
                  MODELO: m10.data().MODELO,
                  CHASSI: m10.data().CHASSI,
                  NUMERO: m10.data().NUMERO,
                  LOTACAO: m10.data().LOTACAO,
                  DESPACHO: m10.data().DESPACHO,
                  PESOQUADRO: m10.data().PESOQUADRO,
                  RESIDENCIA: m10.data().RESIDENCIA,
                  NUMEROMOTOR: m10.data().NUMEROMOTOR,
                  MOTORNUMERO: m10.data().MOTORNUMERO,
                  DATADESPACHO: m10.data().DATADESPACHO,
                  NUMEROQUADRO: m10.data().NUMEROQUADRO,
                  NUMEROCILINDORS: m10.data().NUMEROCILINDORS,
                  VERBETENUMERO: m10.data().VERBETENUMERO,
                  VERBETEMATRICULA1: m10.data().VERBETEMATRICULA1,
                  VERBETEMATRICULA2: m10.data().VERBETEMATRICULA2,
                  MOTORCOMBUSTIVEL: m10.data().MOTORCOMBUSTIVEL,
                  FICOUMATRICULADO1: m10.data().FICOUMATRICULADO1,
                  FICOUMATRICULADO2: m10.data().FICOUMATRICULADO2,
                  MEDIDAPNEUMATICOS: m10.data().MEDIDAPNEUMATICOS,
                  MATRICULACONNUMERO: m10.data().MATRICULACONNUMERO,
                  MOTORNUMEROCILINDRO: m10.data().MOTORNUMEROCILINDRO
                })
            });
        });
    }
  }
</script>