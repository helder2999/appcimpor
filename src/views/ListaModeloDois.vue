<template>
<v-container fluid fill-height>
	<v-layout align-center justify-center>
	  <v-flex xs12 sm8 md8>
	    <v-card>
        <v-card-title>
          <v-toolbar flat color="white">
            <v-toolbar-title>Lista dos Modelo 2</v-toolbar-title>
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
        :items="modelo2"
        :search="search"
        >
          <template  slot="items" slot-scope="props">
            <td>{{ props.item.PropNome }}</td>
            <td class="text-xs-left">{{ props.item.PropData }}
            </td>
            <td class="text-xs-center">
                <v-tooltip top>
                  <v-icon
                  class="mr-2"
                  slot="activator"
                  @click="$router.push({name: 'DetalheModelo2', params:{ id: props.item.id}})"
                  >
                  search
                  </v-icon>
                  <span>Abrir</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-icon
                  slot="activator"
                  class="mr-2"
                  @click="$router.push({name: 'AlterarModelo2', params:{ id: props.item.id}})"
                  >
                  edit
                  </v-icon>
                  <span>Alterar</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-icon
                  slot="activator"
                  @click="EliminaModelo2(props.item.id)"
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
  export default {
    data () {
      return {
        search: '',
        modelo2:[],
        headers: [
          {
            text: 'Proprietario',
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
      EliminaModelo2(ID) {
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
            firebase.db.doc(`modelo2/${ID}`).delete()
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
    firebase.db.collection('modelo2').orderBy('created_at').onSnapshot((snapShot) => {
            this.modelo2=[];
            snapShot.forEach((m2)  => {
                this.modelo2.push({
                  id:m2.id,
                  PropNome: m2.data().PropNome,
                  PropPassaporte: m2.data().PropPassaporte,
                  PropDataNascimento: m2.data().PropDataNascimento,
                  PropDocEmitido: m2.data().PropDocEmitido,
                  PropPor: m2.data().PropPor,
                  PropNacionalidade: m2.data().PropNacionalidade,
                  PropResidencia: m2.data().PropResidencia,
                  PropLocalidade: m2.data().PropLocalidade,
                  PropData: m2.data().PropData,
                  MatriVeiuclo: m2.data().MatriVeiuclo,
                  MatriData: m2.data().MatriData,
                  PretMatriIncial: m2.data().PretMatriIncial,
                  PretMatriCancel: m2.data().PretMatriCancel,
                  PretMatriOutro: m2.data().PretMatriOutro,
                  PretMatriOutroTexto: m2.data().PretMatriOutroTexto,
                  PretLivreMudaCor: m2.data().PretLivreMudaCor,
                  PretLivreAlterDe: m2.data().PretLivreAlterDe,
                  PretLivre2Via: m2.data().PretLivre2Via,
                  PretLivreOutro: m2.data().PretLivreOutro,
                  PretLivreOutroTexto: m2.data().PretLivreOutroTexto,
                  PretInspPeriodica: m2.data().PretInspPeriodica,
                  PretInspTransformacao: m2.data().PretInspTransformacao,
                  PretInspAcidente: m2.data().PretInspAcidente,
                  PretencaoOutra: m2.data().PretencaoOutra,
                  DocJuntoLivreAnterior: m2.data().DocJuntoLivreAnterior,
                  DocJuntoTituloProp: m2.data().DocJuntoTituloProp,
                  DocJuntoVerbeteDespacho: m2.data().DocJuntoVerbeteDespacho,
                  DocJuntoFolhaHomolgacao: m2.data().DocJuntoFolhaHomolgacao,
                  DocJuntoCatalogo: m2.data().DocJuntoCatalogo,
                  DocJuntoCertificado: m2.data().DocJuntoCertificado,
                  DocJuntoOutro1: m2.data().DocJuntoOutro1,
                  DocJuntoOutro1Texto: m2.data().DocJuntoOutro1Texto,
                  DocJuntoOutro2: m2.data().DocJuntoOutro2,
                  DocJuntoOutro2Texto: m2.data().DocJuntoOutro2Texto,
                  DocJuntoOutro3: m2.data().DocJuntoOutro3,
                  DocJuntoOutro3Texto: m2.data().DocJuntoOutro3Texto,
                  DocJuntoOutro4: m2.data().DocJuntoOutro4,
                  DocJuntoOutro4Texto: m2.data().DocJuntoOutro4Texto,
                  DocJuntoOutro5: m2.data().DocJuntoOutro5,
                  VeiculoCor: m2.data().VeiculoCor,
                  VeiculoMarca: m2.data().VeiculoMarca,
                  VeiculoModelo: m2.data().VeiculoModelo,
                  VeiculoCategoria: m2.data().VeiculoCategoria,
                  VeiculoAnoFabrico: m2.data().VeiculoAnoFabrico,
                  VeiculoNChassi: m2.data().VeiculoNChassi,
                  VeiculoNCilindro: m2.data().VeiculoNCilindro,
                  VeiculoCilindrada: m2.data().VeiculoCilindrada,
                  VeiculoCombustivel: m2.data().VeiculoCombustivel,
                  VeiculoCaixaDimessao: m2.data().VeiculoCaixaDimessao,
                  VeiculoCaixaTipo: m2.data().VeiculoCaixaTipo,
                  VeiculoPneuFrente: m2.data().VeiculoPneuFrente,
                  VeiculoPneuTras: m2.data().VeiculoPneuTras,
                  VeiculoLotacao: m2.data().VeiculoLotacao,
                  VeiculoPesoBruto: m2.data().VeiculoPesoBruto,
                  VeiculoTara: m2.data().VeiculoTara,
                  VeiculoServico: m2.data().VeiculoServico,
                  VeiculoObs: m2.data().VeiculoObs,
                  VerbeteDespachoAlfadegarioNumero: m2.data().VerbeteDespachoAlfadegarioNumero,
                  VerbeteDespachoAlfadegarioData: m2.data().VerbeteDespachoAlfadegarioData
                })
            });
        });
    }
  }
</script>