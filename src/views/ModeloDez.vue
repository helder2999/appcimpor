<template lang="html">
	<page id="PAG_A4"  ref="PAGINAA4" name="PAG_A4" size="A4" layout="landscape">
		<table style="border: none;" width="1122.22px">
			<tr>
				<!-- LADO 1 -->
				<td style="border: none;" width="536.76px">
					<table style="border: none;" width="536.76px">
						<tr>
							<td  style="border: none;" align="left"  width="266.76px">
								<span class="caption font-weight-bold">TALÃO</span>
							</td>
							<td  style="border: none;" align="right"  width="266.76px">
								<span class="caption font-weight-bold">Preço ................$..........</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<img height="50px" width="50px" src="@/assets/Coat_of_arms_of_Cape_Verde.svg" alt="">
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="headline font-weight-bold">Direcção-Geral das Alfândegas</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="subheading font-weight-regular">Alfândega da Praia</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="subheading font-weight-medium">Verbete do despacho do veículo automóvel</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="subheading font-weight-medium">constante do bilhete de importação nº......................</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<span style=" margin-left: 58px;" class="caption font-weight-medium">Por </span>
								<input v-model="POR" type="text" style="" class="SUBSX text-uppercase font-weight-medium" style="width: 462.86px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<span class="caption font-weight-medium">residente em </span>
								<input v-model="RESIDENCIA" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 368.35px; " name="" />
								<span class="caption font-weight-medium">, vai ser submetido</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<span class="caption font-weight-medium">a despacho um 
									<span class="caption font-weight-medium font-italic">(a)</span>
								</span>
								<input v-model="DESPACHO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 344.35px; " name="" />
								<span class="caption font-weight-medium"> com as seguintes</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<span class="caption font-weight-medium">características principais:</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<span style="margin-left: 58px;" class="caption font-weight-medium">Marca </span>
								<input v-model="MARCA" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 280px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<span style="margin-left: 58px;" class="caption font-weight-medium">Número do motor </span>
								<input v-model="NUMEROMOTOR" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 220px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<span style="margin-left: 58px;" class="caption font-weight-medium">Número do quadro </span>
								<input v-model="CHASSI" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 215px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<input v-model="DT1_1" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 192px; " name="" />, 
								<input v-model="DT1_2" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 50px; " name="" /> de 
								<input v-model="DT1_3" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 180px; " name="" /> de 
								<input v-model="DT1_4" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 70px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 15px;" align="left">
								<span  style="margin-left: 70px" class="caption font-weight-medium">O Importador,</span><br><br>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 230px; " name="" />
							</td>
							<td  style="border: none;padding-top: 15px;" align="right">
								<span  style="margin-right: 70px" class="caption font-weight-medium">O Despachante,</span><br><br>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 230px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none; padding-left: 58px;padding-top: 5px;" colspan="2" align="left">
								<span class="caption font-weight-medium">Este veículo ficou matriculado </span>
								<input v-model="FICOUMATRICULADO1" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 320px;" name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="left">
								<input v-model="FICOUMATRICULADO2" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 293.94px;" name="" />
								<span class="caption font-weight-medium">com nº, </span>
								<input v-model="MATRICULACONNUMERO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 133.61px;" name="" />
							</td>
						</tr>
						<tr>
							<td style="border: none; padding-left: 58px;padding-top: 5px;" colspan="2" align="left">
								<input v-model="DT3_1" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 180px; " name="" />, 
								<input v-model="DT3_2" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 40px; " name="" /> de 
								<input v-model="DT3_3" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 149px; " name="" /> de 
								<input v-model="DT3_4" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 65px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="center">
								<span class="caption font-weight-medium">O </span>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 340.66px; " name="" />
								<span class="caption font-weight-medium">,</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;padding-top: 5px;" colspan="2" align="center">
								<span class="caption font-weight-medium">de </span>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 213.77px; " name="" />
								<span class="caption font-weight-medium">,</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;; padding-left: 58px;padding-top: 5px;" colspan="2" align="left">
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 484.74px; " name="" />
							</td>
						</tr>
						<tr>
							<td style="border: none; padding-left: 58px;padding-top: 5px;" colspan="2" align="left">
								<span class="caption font-weight-medium">(a) Automóvel ligeiro, pesado, motocíclo com ou carro.</span>
							</td>
						</tr>
						<tr>
							<td style="border: none; padding-top: 30px;" colspan="2" align="right">
								<span style="border-top: solid 1px;font-size: 8px !important;" class=" font-weight-medium">Offset - Exclusivo da I.N.C.V</span>
							</td>
						</tr>
					</table>
				</td>
				<!-- LADO 1 -->
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
				<td style="border: none;" width="44.44px" align="center">
					<img height="760px" src="@/assets/LogoModelo10.png" alt="">
				</td>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////// -->
				<!-- LADO 2 -->
				<td style="border: none;" width="536.76px">
					<table style="border: none;padding-top: 5px;" width="536.76px" >
						<tr>
							<td  style="border: none;" align="left" width="50%">
								<span class="caption font-weight-bold">ORIGINAL</span>
								<span style="float: right;" class="caption font-weight-bold">Modelo nº10</span>
							</td>
							<td  style="border: none;" align="right" width="50%">
								<span class="caption font-weight-bold">Preço ................$..........</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<img height="50px" width="50px" src="@/assets/Coat_of_arms_of_Cape_Verde.svg" alt="">
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="headline font-weight-bold">Direcção-Geral das Alfândegas</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="subheading font-weight-regular">Alfândega da Praia</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="subheading font-weight-medium">Verbete do despacho do veículo automóvel</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="subheading font-weight-medium">constante do bilhete de importação nº......................</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="right">
								<span class="caption font-weight-medium">Por </span>
								<input v-model="POR" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 450px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="right">
								<span class="caption font-weight-medium">residente em </span>
								<input v-model="RESIDENCIA" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 370px; " name="" />
								<span class="caption font-weight-medium">, foi despachado</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="right">
								<span class="caption font-weight-medium">um <span class="caption font-weight-medium font-italic">(a)</span> </span>
								<input v-model="DESPACHO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 310px; " name="" />
								<span class="caption font-weight-medium"> com as seguintes características:</span>
							</td>
						</tr>
						<tr>
							<td width="50%" style="border-right: 2px solid;" align="left">
								<span class="caption font-weight-medium">Marca </span>
								<input v-model="MARCA" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 224px; " name="" />
							</td>
							<td width="50%" style="border-left: 2px solid;" align="left">
								<span style="padding-left: 10px;" class="caption font-weight-medium">Caixa </span>
								<input v-model="CAIXA" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 220px; " name="" />
							</td>
						</tr>
						<tr>
							<td width="50%" style="border-right: 2px solid;" align="left">
								<span class="caption font-weight-medium">Modelo </span>
								<input v-model="MODELO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 217.5px; " name="" />
							</td>
							<td width="50%" style="border-left: 2px solid;" align="left">
								<span style="padding-left: 10px;" class="caption font-weight-medium">Medida dos pneumáticos </span>
								<input v-model="MEDIDAPNEUMATICOS" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 114px; " name="" />
							</td>
						</tr>
						<tr>
							<td width="50%" style="border-right: 2px solid;" align="left">
								<span class="caption font-weight-medium">Número </span>
								<input v-model="CHASSI" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 215px; " name="" />
							</td>
							<td width="50%" style="border-left: 2px solid;" align="left">
								<span style="padding-left: 10px;" class="caption font-weight-medium">Peso do quadro </span>
								<input v-model="PESOQUADRO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 165.5px; " name="" />
							</td>
						</tr>
						<!-- INCIO -->
						<tr>
							<td width="20%" style="border-right: 2px solid;" align="left">
								<span style="padding-left: 49px;" class="caption font-weight-medium">Número </span>
								<input v-model="MOTORNUMERO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 166px; " name="" />
							</td>
							<td width="20%" style="border-left: 2px solid;" align="left">
								<span style="padding-left: 10px;" class="caption font-weight-medium">Tara </span>
								<input v-model="TARA" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 226px; " name="" />
							</td>
						</tr>
						<tr>
							<td width="50%" style="border-right: 2px solid;" align="left">
								<span class="caption font-weight-medium">Motor </span>
								<img 
									id="IMGCHAVETA"
									name="IMGCHAVETA"
									src="@/assets/chaveta-21.png">
								<span class="caption font-weight-medium" style="padding-left: 14px;">Numero cilindros </span>
								<input v-model="MOTORNUMEROCILINDRO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 116px; " name="" />
							</td>
							<td width="50%" style="border-left: 2px solid;" align="left">
								<span style="padding-left: 10px;" class="caption font-weight-medium">Lotação </span>
								<input v-model="LOTACAO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 206px; " name="" />
							</td>
						</tr>
						<tr>
							<td width="50%" style="border-right: 2px solid;" align="left">
								<span style="padding-left: 48px;" class="caption font-weight-medium">Combustível </span>
								<input type="text" v-model="MOTORCOMBUSTIVEL" class="SUBSX text-uppercase font-weight-medium" style="width: 143px; " name="" />
							</td>
							<td width="50%" style="border-left: 2px solid;" align="left">
								<span style="padding-left: 10px;" class="caption font-weight-medium">Data do Despacho</span>
								<input v-model="DATADESPACHO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 154.5px; " name="" />
							</td>
						</tr>
						<!-- FIM -->
						<tr>
							<td  style="border: none;" colspan="2" align="left">
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 532px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="left">
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 532px; " name="" />
							</td>
						</tr>

						<tr>
							<td  style="border: none;" colspan="2" align="left">
								<input v-model="DT2_1" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 197px; " name="" />, 
								<input v-model="DT2_2" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 50px; " name="" /> de 
								<input v-model="DT2_3" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 155px; " name="" /> de 
								<input v-model="DT2_4" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 79px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none; padding-top: 3px;" align="left">
								<span  style="margin-left: 70px" class="body-2 font-weight-bold">O Verificador,</span><br>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 230px; " name="" />
							</td>
							<td  style="border: none; padding-top: 3px;" align="right">
								<span  style="margin-right: 70px" class="body-2 font-weight-bold">O Reverificador,</span><br>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 230px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="right">
								<span class="caption font-weight-medium">Este verbete substitui o certificado de matricula (livrete) do (a) </span>
								<input v-model="VERBETEMATRICULA1" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 130px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="left">
								<input v-model="VERBETEMATRICULA2" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 140px; " name="" />
								<span class="caption font-weight-medium">nº, </span>
								<input v-model="VERBETENUMERO" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 103px; " name="" />
								<span class="caption font-weight-medium"> durante o dia de despacho do veículo e o seguinte</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="right">
								<input v-model="DT4_1" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 196px; " name="" />
								<span class="caption font-weight-medium"> </span>&nbsp;
								<input v-model="DT4_2" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 52.8px; " name="" /> 
								<span class="caption font-weight-medium"> de </span>
								<input v-model="DT4_3" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 86.39px; " name="" />
								<span class="caption font-weight-medium"> de </span>
								<input v-model="DT4_4" type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 86.39px; " name="" />
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="caption font-weight-medium">O </span>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 390px; " name="" />
								<span class="caption font-weight-medium">,</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="center">
								<span class="caption font-weight-medium">de </span>
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 220px; " name="" />
								<span class="caption font-weight-medium">,</span>
							</td>
						</tr>
						<tr>
							<td  style="border: none;" colspan="2" align="right">
								<input type="text" class="SUBSX text-uppercase font-weight-medium" style="width: 467px; " name="" />
							</td>
						</tr>
						<tr>
							<td style="border: none; padding-top: 10px;" colspan="2" align="left">
								<span style="padding-left: 50px" class="caption font-weight-medium">(a) Automóvel ligeiro, pesado, motocíclo com ou carro.</span>
							</td>
						</tr>
						<tr>
							<td style="border: none; padding-top: 30px;" colspan="2" align="right">
								<span style="border-top: solid 1px;font-size: 8px !important;" class=" font-weight-medium">Offset - Exclusivo da I.N.C.V</span>
							</td>
						</tr>
					</table>
				</td>
				<!-- LADO 2 -->
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
		<!-- <v-btn class="IMPRIMIBUTTON" @click="generateFromHTML()">generatePDF from HTML</v-btn> -->
	</page>

</template>

<script lang="js">
import axios from 'axios'
import postModelo10 from '../services/postModelo10.js'
  export default {
    data: () => ({
      fab: false,
      hidden: false,
      tabs: null,
			show: true,
			output : null,
      BTIMPRIMIR: false,
			POR: '',
			TARA: '',
			CAIXA: '',
			MARCA: '',
			DT1_1: '',
			DT1_2: '',
			DT1_3: '',
			DT1_4: '',
			DT2_1: '',
			DT2_2: '',
			DT2_3: '',
			DT2_4: '',
			DT3_1: '',
			DT3_2: '',
			DT3_3: '',
			DT3_4: '',
			DT4_1: '',
			DT4_2: '',
			DT4_3: '',
			DT4_4: '',
			MODELO: '',
			CHASSI: '',
			NUMERO: '',
			LOTACAO: '',
			DESPACHO: '',
			PESOQUADRO: '',
			RESIDENCIA: '',
			NUMEROMOTOR: '',
			MOTORNUMERO: '',
			DATADESPACHO:'',
			NUMEROQUADRO: '',
			NUMEROCILINDORS: '',
			VERBETENUMERO: '',
			VERBETEMATRICULA1: '',
			VERBETEMATRICULA2: '',
			MOTORCOMBUSTIVEL: '',
			FICOUMATRICULADO1: '',
			FICOUMATRICULADO2: '',
			MEDIDAPNEUMATICOS: '',
			MATRICULACONNUMERO: '',
			MOTORNUMEROCILINDRO: '',
    }),
    methods:{
        post(){
            postModelo10(this.POR,this.TARA,this.CAIXA,this.MARCA,this.DT1_1,this.DT1_2,this.DT1_3,this.DT1_4,this.DT2_1,this.DT2_2,this.DT2_3,this.DT2_4,this.DT3_1,this.DT3_2,this.DT3_3,this.DT3_4,this.DT4_1,this.DT4_2,this.DT4_3,this.DT4_4,this.MODELO,this.CHASSI,this.NUMERO,this.LOTACAO,this.DESPACHO,this.PESOQUADRO,this.RESIDENCIA,this.NUMEROMOTOR,this.MOTORNUMERO,this.DATADESPACHO,this.NUMEROQUADRO,this.NUMEROCILINDORS,this.VERBETENUMERO,this.VERBETEMATRICULA1,this.VERBETEMATRICULA2,this.MOTORCOMBUSTIVEL,this.FICOUMATRICULADO1,this.FICOUMATRICULADO2,this.MEDIDAPNEUMATICOS,this.MATRICULACONNUMERO,this.MOTORNUMEROCILINDRO)
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

img#IMGCHAVETA {
	display: none;
	top: 370px;
	right: 0px;
	left: 735px;
	width: 10px;
	height: 60.19px;
	position: absolute;
 /* z-index: -1; */
}
.v-content {
  /*background: rgb(204,204,204); */
  background: rgb(82, 86, 89);
}
page {
background: white;
display: block;
margin: 0 auto;
	margin-top: 0.5cm;
margin-bottom: 0.5cm;
/* box-shadow: 0 0 0.0cm rgba(255, 255, 255, 0.5); */
}
page[size="A4"][layout="landscape"] {
width: 29.7cm;
height: 21cm;  
}
input.SUBSX {
    border: 0;
    outline: 0;
    padding-left: 20px;
    letter-spacing: 1px;
    background-color: #fbffa3;
    border-bottom: 1px  black;
    border-bottom-style: dotted;
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
      background-color: transparent;
      border-bottom: 1px  black;
      border-bottom-style: dotted;
  }
  nav{
    display: none
  }
  button.v-btn--floating{
    display: none
  }
  button.IMPRIMIBUTTON{
    display: none
  }
  img#IMGCHAVETA {
	display: block;
	top: 292.3px;
    right: 0px;
    left: 621px;
    width: 10px;
    height: 60.19px;
    position: absolute;
    /* z-index: -1; */
  }
}
</style>