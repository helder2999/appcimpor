<template>
<page size="A4">
    <v-card-title class="title justify-space-between">
      <table width="100%">
        <tr  style="text-align: center;">
          <img height="60px" width="60px" src="@/assets/Coat_of_arms_of_Cape_Verde.svg" alt="">
        </tr>
        <tr style="text-align: center;">
          <span class="body-2 font-weight-medium ">MINISTÉRIO DAS INFRAESTRUTURAS E TRANSPORTES</span>
        </tr>
        <tr style="text-align: center;">
          <span class="body-2 font-weight-medium ">DIRECÇÃO-GERAL DOS TRANSPORTES RODOVIÁRIOS</span>
        </tr>
      </table>
      <br>
        <table id="t01">
          <tr>
            <td width="50%"></td>
            <td width="50%" style="text-align: center;">
              <span class="subheading font-weight-bold">VEÍCULOS<br>REQUERIMENTO</span>
            </td>
          </tr>
        </table>
    </v-card-title>
    <table id="TABELAKU1">
      <tr>
        <td style="border: none;" width="80%">
          <table id="t02">
            <tr>
              <td align="center"><span class="body-1 font-weight-medium ">REQUERENTE</span></td>
            </tr>
            <tr style="border: none;">
              <td style="border: none;"><span  style="padding-left: 1%; font-size: 10px !important;" class="font-weight-medium "> Proprietário/Procurador</span></td>
            </tr>
            <tr style="border: none;">
              <td style="border: none;padding-top:5px;">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-medium "> Nome: </span>
                <input v-model="PropNome" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 91.5%; " name="" />
              </td>
            </tr>
            <tr style="border: none;">
              <td style="border: none;padding-top:5px;">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-medium "> Passaporte/B.I. n°. : </span>
                <input v-model="PropPassaporte" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 18%; " name="" />
                <span style="padding-left: 2%; padding-right: 1%;" class="caption font-weight-medium "> Emitido em: </span>
                <input v-model="PropDocEmitido" placeholder=" " type="date" required class="SUBSX text-uppercase font-weight-medium" style="width: 23%; " name="" />
                <span style="padding-left: 2%; padding-right: 1%;" class="caption font-weight-medium ">Por: </span>
                <input v-model="PropPor" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 18%; " name="" />
              </td>
            </tr>
            <tr style="border: none;">
              <td style="border: none;padding-top:5px;">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-medium "> Data de Nascimento: </span>
                <input v-model="PropDataNascimento" placeholder=" " type="date" required class="SUBSX text-uppercase font-weight-medium" style="width: 23%; " name="" />
                <span style="padding-left: 5%; padding-right: 1%;" class="caption font-weight-medium "> Nacionalidade: </span>
                <input v-model="PropNacionalidade" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 25%; " name="" />
              </td>
            </tr>
            <tr style="border: none;">
              <td style="border: none;padding-top:5px;">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-medium ">Residência: </span>
                <input v-model="PropResidencia" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 36%; " name="" />
                <span style="padding-left: 4%; padding-right: 1%;" class="caption font-weight-medium ">Localidade: </span>
                <input v-model="PropLocalidade" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 36%; " name="" />
              </td>
            </tr>
            <tr style="border: none;">
              <td style="border: none;padding-top:5px;">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-medium ">Data: </span>
                <input v-model="PropData" placeholder=" " type="date" required class="SUBSX text-uppercase font-weight-medium" style="width: 23%; " name="" />
                <span style="padding-left: 47%; padding-right: 1%;" class="caption font-weight-black "> O Requerente: </span>
                <span style="padding-left: 69%; padding-right: 1%;" class="caption font-weight-black ">__________________________________</span>
              </td>
            </tr>
          </table>
        </td>
        <td style="border: none; text-align: center; vertical-align: text-top;"  width="20%">
          <span class="caption font-weight-medium ">DESPACHO:</span>
          <br><br><br><br><br><br>
          <span class="caption font-weight-medium ">INSPECÇÃO:</span><br>
          <span class="caption font-weight-medium ">nº </span><span>_____________________</span><br>
          <span class="caption font-weight-medium ">data </span><span>_____/______/______</span><br>
          <span class="caption font-weight-medium ">hora </span><span>___________________</span><br>
          <span class="caption font-weight-medium ">local </span><span>___________________</span>
        </td>
      </tr>
    </table>

    <table id="TABELAKU3">
      <tr>
        <td style="border: none;" width="80%">
          <table id="t03">
            <tr>
              <td style="padding-top:4px;padding-bottom:4px;">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold "> MATRÍCULA DO VEÍCULO: </span>
                <input v-model="MatriVeiuclo" placeholder=" " type="date" required class="SUBSX text-uppercase font-weight-medium" style="width: 25%; " name="" />
                <span style="padding-left: 3.5%; padding-right: 1%;" class="caption font-weight-bold "> DATA DA MATRÍCULA: </span>
                <input v-model="MatriData" placeholder=" " type="date" required class="SUBSX text-uppercase font-weight-medium" style="width: 25%; " name="" />
              </td>
            </tr>
          </table>
        </td>
        <td style="border: none; text-align: center; vertical-align: text-top;"  width="20%">
          <span class="caption font-weight-medium ">RESULTADO:</span><br>
          <span class="caption font-weight-medium ">O inspector</span>
        </td>
      </tr>
    </table>

    <table id="t04">
      <tr>
        <td style="text-align: center;" width="46%">
          <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold "> PRETENÇÃO </span>
        </td>
        <td style="border: none;" width="8%"></td>
        <td style="text-align: center;" width="46%">
          <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold "> DOCUMETOS JUNTOS </span>
        </td>
      </tr>
    </table>
    <span style="padding-left: 3%;" class="caption font-weight-bold ">Assinalar com ✓ as quadriculas correspondentes à pretenção e documentos juntos</span>
    <table id="TABELAKU2">
      <tr>
        <td width="50%" style="border: none;">
          <table id="t05">
            <tr>
              <td width="30%" style="text-align: center;" rowspan="4">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold "> MATRÍCULA </span>
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">Matrícula inicial</td>
              <td align="center" width="8%">
                <input v-model="PretMatriIncial" type="checkbox" name="vehicle1" class="checkbox">
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">Calcelamento</td>
              <td align="center" width="8%">
                <input v-model="PretMatriCancel" type="checkbox" name="vehicle1" class="checkbox">
              </td>
            </tr>
            <tr>
              <td><input v-model="PretMatriOutroTexto" type="text" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" /></td>
              <td align="center" width="8%">
                <input v-model="PretMatriOutro" type="checkbox" name="vehicle1" class="checkbox">
              </td>
            </tr>
            <tr>
              <td width="30%" style="text-align: center;" rowspan="5">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">LIVRETE</span>
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">Mudança de cor</td>
              <td align="center" width="8%">
                <input v-model="PretLivreMudaCor" type="checkbox" name="vehicle1" class="checkbox">
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">Alteração de</td>
              <td align="center" width="8%">
                <input v-model="PretLivreAlterDe" type="checkbox" name="vehicle1" class="checkbox">
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">2ª via</td>
              <td align="center" width="8%">
                <input v-model="PretLivre2Via" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
            </tr>
            <tr>
              <td><input type="text" v-model="PretLivreOutroTexto" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" /></td>
              <td align="center" width="8%">
                <input v-model="PretLivreOutro" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
            </tr>
            <tr>
              <td width="30%" style="text-align: center;" rowspan="4">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">INSPECÇÃO</span>
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">Periodica</td>
              <td align="center" width="8%">
                <input v-model="PretInspPeriodica" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">Transformação</td>
              <td align="center" width="8%">
                <input v-model="PretInspTransformacao" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
            </tr>
            <tr>
              <td style="padding-left: 1%;" width="55%">Acidente</td>
              <td align="center" width="8%">
                <input v-model="PretInspAcidente" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
            <tr>
              <td width="30%" style="text-align: left;" colspan="3">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-medium ">OUTRA (Escrever qual):</span>
                <br>
                <input v-model="PretencaoOutra" type="text" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" />
              </td>
            </tr>
          </table>
        </td>
        <td width="50%" style="border: none;">
          <table style="margin-left: 8%" id="t05">
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoLivreAnterior" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td style="padding-left: 1%;" width="55%">Livrete anterior</td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoTituloProp" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td style="padding-left: 1%;" width="55%">Título de propriedade</td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoVerbeteDespacho" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td style="padding-left: 1%;" width="55%">Verbete de despacho alfandegário</td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoFolhaHomolgacao" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td style="padding-left: 1%;" width="55%">Folha de homologação</td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoCatalogo" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td style="padding-left: 1%;" width="55%">Catálogos</td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoCertificado" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td style="padding-left: 1%;" width="55%">Certificados / caracteristicas</td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoOutro1" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td>
                <input v-model="DocJuntoOutro1Texto" type="text" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" /></td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoOutro2" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td><input v-model="DocJuntoOutro2Texto" type="text" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" /></td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoOutro3" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td><input v-model="DocJuntoOutro3Texto" type="text" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" /></td>
            </tr>
            <tr>
              <td align="center" width="5.5%">
                <input v-model="DocJuntoOutro4" type="checkbox" name="vehicle1" class="checkbox" >
              </td>
              <td><input v-model="DocJuntoOutro4Texto" type="text" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" /></td>
            </tr>
            <tr>
              <td width="30%" style="text-align: left;" colspan="3">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-medium ">OUTRA (Escrever qual):</span>
                <br>
                <input v-model="DocJuntoOutro5" type="text" class="text-uppercase font-weight-medium" style="padding-left: 1%;width: 100%; " name="" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <br>
    <table style="border: none;">
      <tr>
        <td width="50%" style="border: none;">
          <table id="t06">
            <tr>
              <td style="padding-bottom:4px;" align="center" colspan="2">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">CARACTERISTICAS DO VEÍCULO</span>
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">MARCA: </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 85%; " v-model="VeiculoMarca" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">CAIXA (tipo): </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 63%; " v-model="VeiculoCaixaTipo" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">MODELO: </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 83%; " v-model="VeiculoModelo" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">COR:</span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 82%; " v-model="VeiculoCor" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">CATEGORIA: </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 79%; " v-model="VeiculoCategoria" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">PNEUS (frente):</span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 59%; " v-model="VeiculoPneuFrente" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">ANO DE FABRICO: </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 71%; " v-model="VeiculoAnoFabrico" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">PNEUS (ret.):</span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 64%; " v-model="VeiculoPneuTras" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">Nº DE CHASSI: </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 75%; " v-model="VeiculoNChassi" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">LOTAÇÃO</span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 72%; " v-model="VeiculoLotacao" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">MOTOR (Nº de cilindros): </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 61%; " v-model="VeiculoNCilindro" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">PESO BRUTO</span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 63%; " v-model="VeiculoPesoBruto" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">MOTOR (Cilindrada): </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 67%; " v-model="VeiculoCilindrada" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">TARA</span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 78%; " v-model="VeiculoTara" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">MOTOR (Combustível): </span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 64%; " v-model="VeiculoCombustivel" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">SERVIÇO</span>
                <input type="text" class="text-uppercase font-weight-medium" style="width: 71%; " v-model="VeiculoServico" name="" />
              </td>
            </tr>
            <tr>
              <td width="60%">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">CAIXA (dimensões): </span>
                <input type="text" class=" text-uppercase font-weight-medium" style="width: 68%; " v-model="VeiculoCaixaDimessao" name="" />
              </td>
              <td width="40%">              
                <span style="padding-left: 6%; padding-right: 1%;" class="caption font-weight-bold ">OBS.:</span>
                <input type="text" class=" text-uppercase font-weight-medium" style="width: 79%; " v-model="VeiculoObs" name="" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <br>
    <table style="border: none;">
      <tr>
        <td width="50%" style="border: none;">
          <table id="t07">
            <tr>
              <td style="padding-top:4px;padding-bottom:4px;">
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold "> Verbete de despacho alfandegário n°.: </span>
                <input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 35%; " v-model="VerbeteDespachoAlfadegarioNumero" name="" />
                <span style="padding-left: 1%; padding-right: 1%;" class="caption font-weight-bold ">de</span>
                <input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 25%; " name="" v-model="VerbeteDespachoAlfadegarioData" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
      <v-tooltip top>
        <v-btn
          color="red"
          key="print"
          v-model="fab"
          slot="activator"
          dark
          fab
          fixed
          bottom
          right
          @click="post"
          v-if="!BTIMPRIMIR"
        >
          <v-icon>save</v-icon>
        </v-btn>
        <span>Guardar</span>
      </v-tooltip>
      <v-tooltip top>
        <v-btn
          v-if="BTIMPRIMIR"
          color="red"
          key="print"
          v-model="fab"
          slot="activator"
          dark
          fab
          fixed
          bottom
          right
          v-print

        >
          <v-icon>print</v-icon>
        </v-btn>
        <span>Imprimir</span>
      </v-tooltip>
</page>
</template>

<script>
import axios from 'axios'
import postModelo2 from '../services/postModelo2.js'

  export default {
    data: () => ({
      fab: false,
      show: true,
      BTIMPRIMIR: false,
      PropNome: '',
      PropPassaporte: '',
      PropDataNascimento: '',
      PropDocEmitido: '',
      PropPor: '',
      PropNacionalidade: '',
      PropResidencia: '',
      PropLocalidade: '',
      PropData: '',
      MatriVeiuclo: '',
      MatriData: null,
      PretMatriIncial: false,
      PretMatriCancel: false,
      PretMatriOutro: false,
      PretMatriOutroTexto: '',
      PretLivreMudaCor: false,
      PretLivreAlterDe: false,
      PretLivre2Via: false,
      PretLivreOutro: false,
      PretLivreOutroTexto: '',
      PretInspPeriodica: false,
      PretInspTransformacao: false,
      PretInspAcidente: false,
      PretencaoOutra: '',
      DocJuntoLivreAnterior: false,
      DocJuntoTituloProp: false,
      DocJuntoVerbeteDespacho: false,
      DocJuntoFolhaHomolgacao: false,
      DocJuntoCatalogo: false,
      DocJuntoCertificado: false,
      DocJuntoOutro1: false,
      DocJuntoOutro1Texto: '',
      DocJuntoOutro2: false,
      DocJuntoOutro2Texto: '',
      DocJuntoOutro3: false,
      DocJuntoOutro3Texto: '',
      DocJuntoOutro4: false,
      DocJuntoOutro4Texto: '',
      DocJuntoOutro5: '',
      VeiculoCor: '',
      VeiculoMarca: '',
      VeiculoModelo: '',
      VeiculoCategoria: '',
      VeiculoAnoFabrico: '',
      VeiculoNChassi: '',
      VeiculoNCilindro: '',
      VeiculoCilindrada: '',
      VeiculoCombustivel: '',
      VeiculoCaixaDimessao: '',
      VeiculoCaixaTipo: '',
      VeiculoPneuFrente: '',
      VeiculoPneuTras: '',
      VeiculoLotacao: '',
      VeiculoPesoBruto: '',
      VeiculoTara: '',
      VeiculoServico: '',
      VeiculoObs: '',
      VerbeteDespachoAlfadegarioNumero: '',
      VerbeteDespachoAlfadegarioData: ''
    }),
    methods:{
        post(){
            postModelo2(this.PropNome,this.PropPassaporte,this.PropDataNascimento,this.PropDocEmitido,this.PropPor,this.PropNacionalidade,this.PropResidencia,this.PropLocalidade,this.PropData,this.MatriVeiuclo,this.MatriData,this.PretMatriIncial,this.PretMatriCancel,this.PretMatriOutro,this.PretMatriOutroTexto,this.PretLivreMudaCor,this.PretLivreAlterDe,this.PretLivre2Via,this.PretLivreOutro,this.PretLivreOutroTexto,this.PretInspPeriodica,this.PretInspTransformacao,this.PretInspAcidente,this.PretencaoOutra,this.DocJuntoLivreAnterior,this.DocJuntoTituloProp,this.DocJuntoVerbeteDespacho,this.DocJuntoFolhaHomolgacao,this.DocJuntoCatalogo,this.DocJuntoCertificado,this.DocJuntoOutro1,this.DocJuntoOutro1Texto,this.DocJuntoOutro2,this.DocJuntoOutro2Texto,this.DocJuntoOutro3,this.DocJuntoOutro3Texto,this.DocJuntoOutro4,this.DocJuntoOutro4Texto,this.DocJuntoOutro5,this.VeiculoCor,this.VeiculoMarca,this.VeiculoModelo,this.VeiculoCategoria,this.VeiculoAnoFabrico,this.VeiculoNChassi,this.VeiculoNCilindro,this.VeiculoCilindrada,this.VeiculoCombustivel,this.VeiculoCaixaDimessao,this.VeiculoCaixaTipo,this.VeiculoPneuFrente,this.VeiculoPneuTras,this.VeiculoLotacao,this.VeiculoPesoBruto,this.VeiculoTara,this.VeiculoServico,this.VeiculoObs,this.VerbeteDespachoAlfadegarioNumero,this.VerbeteDespachoAlfadegarioData)
            this.BTIMPRIMIR = true
            window.print()
        }
    },
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      }
    }
  }
</script>
<style scoped lang="css">
table#t01 { 
  width: 100%;
  height: 60px;
}
table#t01, th, td {
  border: 1px solid black;
}
table#t02 { 
  width: 100%;
  border-collapse: collapse;
  border: 1.5px solid black;
}
table#t03 { 
  width: 100%;
  border-collapse: collapse;
  border: 1.5px solid black;
}
table#t04 { 
  width: 80%;
}
table#t05 { 
  width: 92.5%;
  border-collapse: collapse;
  border: 1.5px solid black;
}
input.SUBSX {
    border: 0;
    outline: 0;
    border-bottom: 1px solid blue;
}
table#TABELAKU2 { 
  width: 80%;
  border: none;
}
table#t06 { 
  width: 80%;
  border-collapse: collapse;
  border: 1.5px solid black;
}
table#t07 { 
  width: 80%;
  border-collapse: collapse;
  border: 1.5px solid black;
}
table#TABELAKU1 { 
  width: 100%;
  border: none;
}
table#TABELAKU3 { 
  width: 100%;
  border: none;
}
.v-content {
  /*background: rgb(204,204,204); */
  background: rgb(82, 86, 89);
}
page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  margin-top: 0.5cm;
}
page[size="A4"] {  
    height:297mm;
    width:210mm;
}
input {
  background-color: #fbffa3;
}

@media print {
  :before{
    color:#000!important;
    text-shadow:none!important;
    background:0 0!important;
    -webkit-box-shadow:none!important;
    box-shadow:none!important
  }
  @page {  
	/* size: landscape; */
  	margin-top: 0.5cm;
  	margin-left: 0.5cm;
  	margin-right: 0.5cm;
  	margin-bottom: 0.1cm;

  }

  body, page {
    margin: 0;
    margin-top: -60px;
    box-shadow: 0;
    background-color: #ffffff;

  }
  input {
    background-color: transparent;
  }
  input.SUBSX {
      border: 0;
      outline: 0;
      border-bottom: 1px solid black;
  }
  input[type=date]:required:invalid::-webkit-datetime-edit {
      color: transparent;
  }
  input[type=date]:focus::-webkit-datetime-edit {
      color: black !important;
  }
  .v-toolbar{
    display: none
  }
  nav{
    display: none
  }
  button.v-btn--floating{
    display: none
  }
}

.checkbox {
    position: relative;
    cursor: pointer
}

.checkbox:before {
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 1rem;
    height: 1rem;
    border: 2px solid transparent;
}

.checkbox:checked:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    height: .5rem;
    border-color: #000;
    border-top-style: none;
    border-right-style: none
}

.checkbox:after {
    content: "";
    position: absolute;
    left: 0;
    width: 1.1rem;
    height: 1.1rem;
    background: #fff;
    cursor: pointer
}

</style>