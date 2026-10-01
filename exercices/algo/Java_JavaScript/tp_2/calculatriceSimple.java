
import java.util.Locale ;
import java.util.Scanner ;

public class calculatriceSimple{
  public static void main(String[] args) {
    /*
      Quels sont les inputs ?
        Deux nombres a et b, 
        un opérateur parmi (+,-,*,/)
      Quels sont les outputs ?
        le resultat de l'opération 
    */
    Scanner scanner = new Scanner(System.in);

    scanner.useLocale(Locale.US);
    /* Donne le 1er nombre */
    System.out.println("Donne le 1er nombre : ");
    double nombre1 = scanner.nextDouble();

    /* Donne le 2è nombre */
    System.out.println("Donne le 2è nombre : ");
    double nombre2 = scanner.nextDouble();

    /* Donne l'opération */
    System.out.println("Donne l'opérateur : ");
    String operateur = scanner.next();

    /*  Calcule le résultat selon différent cas ---> switch case*/
    double resultat = 0.0 ;

    switch(operateur){
      case "+" :
        resultat = nombre1 + nombre2 ;
        System.out.println("Le résultat est : " + resultat) ;
        break;
      case "-" :
        resultat = nombre1 - nombre2 ;
        System.out.println("Le résultat est : " + resultat) ;
        break; 
      case "*" :
        resultat = nombre1 * nombre2 ;
        System.out.println("Le résultat est : " + resultat) ;
        break;
      case "/" :
        if (nombre2 == 0) {
          System.out.println("Erreur : division par zero ") ;  
        } else {
        resultat = nombre1 / nombre2 ;
        System.out.println("Le résultat est : " + resultat) ;
        }
        break;
      default:
        System.out.println("Erreur : operateur inconnu");       
    }     

   scanner.close();

  }
}