import java.util.Locale ; 
import java.util.Scanner ;

public class devis_peinture{
  public static void main(String[] args){
    /* 
    Quels sont les inputs ?
      la largeur, la longueur, la hauteur
    Quels sont les outputs 
      la surface nette, les posts et le prix final
    Il y'a aussi des constantes 
      le pourcentage de surface retirée : 20%
      la surface couverte par 1 pot : 10 m²
      le prix d'1 pot : 29.90 euros

    Pseudo code
      1- Donne la largeur ;
      2- Donne la longueur ;
      3- Donne la hauteur ;
      4- Calcule la surface totale :
        surfaceTotale = 2*hauteur*(longueur+largeur) ;
      5- Calcule la surface nette :
        surfaceNette = surfaceTotale - (surfaceTotale*0.2) ;
      6- Calcule le nombre de pots :
        nombrePots = surfaceNette / 10 ;
        nombrePots = arrondiSup (nombrePots) ;
      7- Calcule le prix total :
        prixTotal = nombrePots * 29.9 ; 
    */
    

    Scanner scanner = new Scanner(System.in) ;

    scanner.useLocale(Locale.US) ;

    double surfaceTotale ;
    double surfaceNette ;
    double nombrePots ;
    double prixFinal ;

    surfaceTotale = 0.0 ;
    surfaceNette = 0.0 ;
    nombrePots = 0.0 ;
    prixFinal = 0.0 ; 

    /* Entre la valeur de la longueur */
    System.out.println("Donne la valeur de la longeur : ") ;
    double longueur = scanner.nextDouble(); 

    /* Entre la valeur de la largeur */
    System.out.println("Donne la valeur de la largeur : ") ;
    double largueur = scanner.nextDouble(); 

    /* Entre la valeur de la hauteur */
    System.out.println("Donne la valeur de la hauteur : ") ;
    double hauteur = scanner.nextDouble(); 

    /* Calcule la surface nette */
    /* Calcule d'abord la surface totale */
    surfaceTotale = 2*hauteur*(longueur+largueur);
    surfaceNette = surfaceTotale - (surfaceTotale*0.2) ;
    System.out.println("Surface Nette :" + surfaceNette) ;

    /* Calcule le nombre de pots en arrondissant au supérieur */
    nombrePots = Math.ceil(surfaceNette/10.0) ;
    System.out.println("Nombre de pots : " + nombrePots) ;

    /* Calcule le prix final */
    prixFinal = nombrePots * 29.90 ;
    System.out.println("Prix final : " + prixFinal) ; 

   scanner.close();

  }
}