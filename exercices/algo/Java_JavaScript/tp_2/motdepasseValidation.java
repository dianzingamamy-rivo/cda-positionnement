import java.util.Scanner ;

public class motdepasseValidation{
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    int len ;
    int i ;
    String tempo ;

    System.out.println("Donne un mot de passe :");
    String motdePasse = scanner.next();
    len = motdePasse.length(); /* longueur du mot de passe */

    String check = "✓";
    String nocheck = "✗";
    String Valide = "Valide";
    String Invalide = "Invalide";

    if (len < 8) {
      System.out.println(Invalide);
    }

    for (i=0; i<len ; i++){
      System.out.println(motdePasse.charAt(i)) ;
    }


    scanner.close();

  }
}