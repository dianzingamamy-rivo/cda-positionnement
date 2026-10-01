import java.util.Random ;
import java.util.Scanner ;

public class plusgrandPluspetit{
  public static void main(String[] args) {

    /* le programme génère un nombre aléatoire entre 1 et 100 */
    Random rand = new Random();
    int min = 1 ;
    int max = 100 ;
    int randomNum = rand.nextInt((max-min)+1) + min ;
    int essai ;
    int userNumtempo ;

    essai = 0 ;
    Scanner scanner = new Scanner(System.in);    
    /* L'utilisateur propose son nombre */
    do { 
        essai = essai + 1 ;
        System.out.println("Propose un nombre entre 1 et 100 :");
        int userNum = scanner.nextInt();
        userNumtempo = userNum ;
        if (userNum < randomNum) {
          System.out.println("Essai "+ essai + ": Plus grand !") ;
        } else {
          System.out.println("Essai "+ essai + " : Plus petit !") ;
        }
    } while (userNumtempo != randomNum);
    System.out.println("Essai "+ essai + ": Bravo ! Trouvé en " + essai + 
    " essais") ;
    System.out.println("Voici ton nombre (user number) : " + userNumtempo);
    System.out.println("C'était le nombre (program number) : " + randomNum);
    scanner.close();
  }
}