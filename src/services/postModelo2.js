import  firebase  from '../ConfigFirebase.js'

export default (PropNome,PropPassaporte,PropDataNascimento,PropDocEmitido,PropPor,PropNacionalidade,PropResidencia,PropLocalidade,PropData,MatriVeiuclo,MatriData,PretMatriIncial,PretMatriCancel,PretMatriOutro,PretMatriOutroTexto,PretLivreMudaCor,PretLivreAlterDe,PretLivre2Via,PretLivreOutro,PretLivreOutroTexto,PretInspPeriodica,PretInspTransformacao,PretInspAcidente,PretencaoOutra,DocJuntoLivreAnterior,DocJuntoTituloProp,DocJuntoVerbeteDespacho,DocJuntoFolhaHomolgacao,DocJuntoCatalogo,DocJuntoCertificado,DocJuntoOutro1,DocJuntoOutro1Texto,DocJuntoOutro2,DocJuntoOutro2Texto,DocJuntoOutro3,DocJuntoOutro3Texto,DocJuntoOutro4,DocJuntoOutro4Texto,DocJuntoOutro5,VeiculoCor,VeiculoMarca,VeiculoModelo,VeiculoCategoria,VeiculoAnoFabrico,VeiculoNChassi,VeiculoNCilindro,VeiculoCilindrada,VeiculoCombustivel,VeiculoCaixaDimessao,VeiculoCaixaTipo,VeiculoPneuFrente,VeiculoPneuTras,VeiculoLotacao,VeiculoPesoBruto,VeiculoTara,VeiculoServico,VeiculoObs,VerbeteDespachoAlfadegarioNumero,VerbeteDespachoAlfadegarioData) => {

    // console.log(firebase.db)

    firebase.db.collection('modelo2').add(
        {
            PropNome,
            PropPassaporte,
            PropDataNascimento,
            PropDocEmitido,
            PropPor,
            PropNacionalidade,
            PropResidencia,
            PropLocalidade,
            PropData,
            MatriVeiuclo,
            MatriData,
            PretMatriIncial,
            PretMatriCancel,
            PretMatriOutro,
            PretMatriOutroTexto,
            PretLivreMudaCor,
            PretLivreAlterDe,
            PretLivre2Via,
            PretLivreOutro,
            PretLivreOutroTexto,
            PretInspPeriodica,
            PretInspTransformacao,
            PretInspAcidente,
            PretencaoOutra,
            DocJuntoLivreAnterior,
            DocJuntoTituloProp,
            DocJuntoVerbeteDespacho,
            DocJuntoFolhaHomolgacao,
            DocJuntoCatalogo,
            DocJuntoCertificado,
            DocJuntoOutro1,
            DocJuntoOutro1Texto,
            DocJuntoOutro2,
            DocJuntoOutro2Texto,
            DocJuntoOutro3,
            DocJuntoOutro3Texto,
            DocJuntoOutro4,
            DocJuntoOutro4Texto,
            DocJuntoOutro5,
            VeiculoCor,
            VeiculoMarca,
            VeiculoModelo,
            VeiculoCategoria,
            VeiculoAnoFabrico,
            VeiculoNChassi,
            VeiculoNCilindro,
            VeiculoCilindrada,
            VeiculoCombustivel,
            VeiculoCaixaDimessao,
            VeiculoCaixaTipo,
            VeiculoPneuFrente,
            VeiculoPneuTras,
            VeiculoLotacao,
            VeiculoPesoBruto,
            VeiculoTara,
            VeiculoServico,
            VeiculoObs,
            VerbeteDespachoAlfadegarioNumero,
            VerbeteDespachoAlfadegarioData,
            created_at: new Date().getTime()
        }
    ).then(
        // router.push({ name: 'ListaModeloDois' })
    )
}