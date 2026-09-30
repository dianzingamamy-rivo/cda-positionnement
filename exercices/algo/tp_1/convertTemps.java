
import java.util.Scanner;

public class convertTemps{
  public static void main(String[] args) {
      /*
      quels sont les inputs ?
        le temps en secondes ---> tempsSecondes
      quels sont les outputs ?
        le temps en format Xh Ym Zs ---> tempsXhYmZs
      quelles sont les contraintes ?
        1h ---> 3600s
        1m ---> 60s
      Pseudo code
      1- Donne le temps en seconds : tempsSecondes
      2- Lance la conversion
        2.1 Récupère d'abord le nombre d'heures
            tempsHeures = tempsSecondes / 3600 ;
        2.2 Récupère les secondes temporaires
            secondesTempo = tempsSeconds % 3600
        2.3 Récupère le nombre de minutes
            tempsMinutes = secondesTempo / 60 ;
        2.4 Récupère le nombre de secondes 
            tempsSecondes = secondes % 60 
      */
      Scanner scanner = new Scanner(System.in); 

        /* Donne le temps en secondes */
        System.out.println("Donne le temps en secondes : ") ;
        int tempsSecondes = scanner.nextInt();

        /* Lance la conversion */
        int tempsHeures ;
        int secondesTempo ;
        int tempsMinutes ;

        tempsMinutes = 0 ;

        tempsHeures = (tempsSecondes / 3600) ;
        secondesTempo = tempsSecondes % 3600 ; /* secondes temporaires */
        tempsMinutes = (secondesTempo / 60) ;
        tempsSecondes = secondesTempo % 60 ;

        System.out.println("Donne le temps en format Xh Ym Zs : " 
            + tempsHeures + "h" + tempsMinutes + "m" 
            + tempsSecondes + "s") ;
        

      scanner.close() ;
  }
}