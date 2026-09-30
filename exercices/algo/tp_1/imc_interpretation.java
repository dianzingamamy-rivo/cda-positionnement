import java.util.Locale ;
import java.util.Scanner ;
/* Pour lire une saisie au clavier en Java, 
il faut utiliser la classe Scanner du paquet java.util 
associée au flux System.in  
*/

public class imc_interpretation{
  public static void main(String[] args){
    /*
    Quels sont les inputs ?
      le poids en kg ---> poidsKg
      la taille en m ---> tailleM
    Quels sont les outputs ?
      l'imc et son interprétation selon le bareme

    Pseudo code 
    1- Donne la valeur de poidsKg
    2- Donne la valeur de tailleM
    3- Calcule la valeur de imc
      imc = poidsKg/(tailleM*tailleM)
    4- Donne l'interprétation
      SI imc < 18.5
        ALORS : Insuffisance ponderale
      SI 18.5 < imc < 24.9
        ALORS : Poids normal
      SI 25.0 < imc < 29.9
        ALORS : Surpoids
      SINON : 
        ALORS : Obesite
    */
    
    /* Création du Scanner pour lire la console */
    Scanner scanner = new Scanner(System.in);

    /* force la console à supporter les décimaux avec . */
    scanner.useLocale(Locale.US);

    double imc ;
    imc = 0.0 ;

    /* Entre à l'écran du terminal */
    System.out.println("Entre la valeur du poids :") ;
    double poidsKg = scanner.nextDouble() ;

    /* Entre à l'écran du terminal */
    System.out.println("Entre la valeur de la taille :") ;
    double tailleM = scanner.nextDouble() ;

    /* Calcule la valeur de imc */
    imc = poidsKg / (tailleM*tailleM) ;

    /* Affiche à l'écran du terminal */
    System.out.println("Entre la valeur du poids : " + imc) ;

    /* Donne l'interpretation */
    if (imc < 18.5) {  /* structure de la boucle if */
      System.out.println("Insuffisance ponderale") ;
    } else if (imc >= 18.5 && imc < 24.9 ) {
      System.out.println("Poids normal") ;
    } else if (imc >= 25.0 && imc < 29.9) {
      System.out.println("Surpoids") ;
    } else {
      System.out.println("Obesite");
    }

    /* Fermeture de la console */
    scanner.close();
  
  }
}