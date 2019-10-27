function IDADE_ATUAL(DataNscm, DataAtual) {
  if(DataNscm != '') {
    /* SEPARANDO DATA DE NASCIMENTO */
    var AnoNscm = DataNscm.getFullYear();
    var DiaNscm = DataNscm.getDate();
    var MesNscm = DataNscm.getMonth() + 1;
    
    /* SEPARANDO DATA ATUAL */
    var AnoAtual = DataAtual.getFullYear();
    var DiaAtual = DataAtual.getDate();
    var MesAtual = DataAtual.getMonth() + 1;
    
    if(AnoNscm > AnoAtual) {
      return 'ERRO: ano \n de NCSM > \nano ATUAL';
    }
    else if((AnoNscm == AnoAtual) && (MesNscm > MesAtual)) {
      return 'ERRO: mes \n de NCSM > \n mes ATUAL';
    }
    else if((AnoNscm == AnoAtual) && (MesNscm == MesAtual) && (DiaNscm > DiaAtual)) {
      return 'ERRO: dia \n de NCSM > \n dia ATUAL';
    }

    else {
      /* PREPARANDO CÁLCULOS */
      var UltimoDiaMesAtual = new Date(AnoAtual, MesAtual, 0).getDate();
      var UltimoDiaMesNscm = new Date(AnoAtual, MesNscm, 0).getDate();
      
      /* VARIÁVEIS PARA RESULTADOS ESPERADOS */
      var ANO = AnoAtual - AnoNscm;
      var MES = 0;
      var DIA = 0;
      var IDADE = '';
      
      if(DiaNscm > DiaAtual) {
        DIA = (DiaNscm - DiaAtual);
      } else {
        DIA = (DiaAtual - DiaNscm);
      }
      
      if(MesNscm > MesAtual){
        ANO = ANO - 1;
        MES = (11 - (MesNscm - MesAtual));
        DIA = ((UltimoDiaMesAtual - DiaNscm) + DiaAtual);
      }
      else if(MesNscm < MesAtual) {
        MES = MesAtual - MesNscm;
        if(DiaNscm > DiaAtual) {
          MES = MES - 1;
          DIA = ((UltimoDiaMesNscm - DiaNscm) + DiaAtual);
        }
      }
      
      else if((MesNscm == MesAtual) && (DiaNscm > DiaAtual)) {
        ANO = ANO - 1;
        MES = 11;
        DIA = ((UltimoDiaMesAtual - DiaNscm) + DiaAtual);
      }
      
      IDADE = (ANO + ' ano(s),\n' + MES + ' mês(es),\n' + DIA + ' dia(s)');
      
      return IDADE;
    }
  }
  
  else {
    return 'SEM DATA!';
  }
}


