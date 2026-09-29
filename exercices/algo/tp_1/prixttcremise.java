public class prixttcremise{
  public static void main (String[] args){

    /* 2è exo 
    Calcul de prix ttc avec remise
    Quelles sont les données en entrée : prixHT, tauxTVA & 
                                         pourcentageRemise
    Quelles sont les données en sortie : montantTVA, prixTTC, 
                                         montantRemise, prixFinal
    Quelles sont les contraintes ?   
          montantTVA = (prixHT*tauxTVA)/100;
          prixTTC = prixHT + montantTVA ;
          montantRemise = (prixTTC)*(pourcentageRemise/100);
          prixFinal = prixTTC - montantRemise;
    */
     /* inputs */
    double prixHT ; 
    double tauxTVA ; 
    double pourcentageRemise ;

    /* outputs */
    double montantTVA ; 
    double prixTTC ; 
    double montantRemise ;
    double prixFinal ;

    prixHT = 100.0;
    tauxTVA = 20.0;
    pourcentageRemise = 10.0;

    /* Calcule le montant de la TVA */
    montantTVA = (prixHT*tauxTVA)/100.0 ;
    System.out.println(montantTVA);

    /*  Calcule le prix TTC */
    prixTTC = prixHT + montantTVA ;
    System.out.println(prixTTC);

    /* Calcule le montant de la remise  */
    montantRemise = (prixTTC)*(pourcentageRemise/100);
    System.out.println(montantRemise);

    /* Calcule le prix final */
    prixFinal = prixTTC - montantRemise;
    System.out.println(prixFinal);

  } 
}