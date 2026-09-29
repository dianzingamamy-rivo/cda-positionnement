public class switch_variable{
  public static void main(String[] args){
    /* Echanger deux variables a et b
      en utilisant une variable temporaire.  
      */
    
    int a ;
    int b ;
    int temp ;

    a = 5 ;
    b = 3 ;
    temp = 0 ;

    temp = a ; /* la valeur temporaire prend la valeur de a  */
    a = b ; /* a prend la valeur de b */
    b = temp ; /* b prend la valeur temporaire  */

    /* System.out.println(a);
    System.out.println(b); 
    */

  /*  
    Echanger les variables a et b sans
    variable temporaire (astuce : addition/soustraction).
  */

   a = 5 ;
   b = 3 ;
   

  }
}