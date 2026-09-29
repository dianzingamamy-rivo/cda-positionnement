public class convtemp{ /*  fonction de conversion */

  public static void main (String[] args){ /* fonction main */
    double temperatureCelsius ;
    double temperatureFarenheit ;

    temperatureCelsius = 0.0;
    temperatureFarenheit = 0.0;

    temperatureFarenheit = temperatureCelsiusFarenheit(
      temperatureCelsius); /* fonction appelée dans le main  */

    System.out.println(temperatureFarenheit);

  }

  public static double temperatureCelsiusFarenheit ( double a){
    /*  fonction définie en dehors du main */
    double b ;

    b = 0.0;

    b = ((a*9.0)/5.0) + 32.0 ;
    return b ;    
  }

}