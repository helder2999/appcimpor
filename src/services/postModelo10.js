import  firebase  from '../ConfigFirebase.js'

export default (POR,TARA,CAIXA,MARCA,DT1_1,DT1_2,DT1_3,DT1_4,DT2_1,DT2_2,DT2_3,DT2_4,DT3_1,DT3_2,DT3_3,DT3_4,DT4_1,DT4_2,DT4_3,DT4_4,MODELO,CHASSI,NUMERO,LOTACAO,DESPACHO,PESOQUADRO,RESIDENCIA,NUMEROMOTOR,MOTORNUMERO,DATADESPACHO,NUMEROQUADRO,NUMEROCILINDORS,VERBETENUMERO,VERBETEMATRICULA1,VERBETEMATRICULA2,MOTORCOMBUSTIVEL,FICOUMATRICULADO1,FICOUMATRICULADO2,MEDIDAPNEUMATICOS,MATRICULACONNUMERO,MOTORNUMEROCILINDRO) => {

    // console.log(firebase.db)

    firebase.db.collection('modelo10').add(
        {
            POR,
            TARA,
            CAIXA,
            MARCA,
            DT1_1,
            DT1_2,
            DT1_3,
            DT1_4,
            DT2_1,
            DT2_2,
            DT2_3,
            DT2_4,
            DT3_1,
            DT3_2,
            DT3_3,
            DT3_4,
            DT4_1,
            DT4_2,
            DT4_3,
            DT4_4,
            MODELO,
            CHASSI,
            NUMERO,
            LOTACAO,
            DESPACHO,
            PESOQUADRO,
            RESIDENCIA,
            NUMEROMOTOR,
            MOTORNUMERO,
            DATADESPACHO,
            NUMEROQUADRO,
            NUMEROCILINDORS,
            VERBETENUMERO,
            VERBETEMATRICULA1,
            VERBETEMATRICULA2,
            MOTORCOMBUSTIVEL,
            FICOUMATRICULADO1,
            FICOUMATRICULADO2,
            MEDIDAPNEUMATICOS,
            MATRICULACONNUMERO,
            MOTORNUMEROCILINDRO,
            created_at: new Date().getTime()
        }
    ).then(
        console.log("STA GRAVADO")
        // router.push({ name: 'ListaModeloDois' })
    )
}