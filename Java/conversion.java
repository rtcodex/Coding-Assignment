import java.util.*;
public class conversion {
    public static void main(String[] args) {
        String romanNumeral = "IX"; 
        int result = convert(romanNumeral);
        System.out.println("Integer representation: " + result);
    }

    public static int convert(String s) {
        int result = 0;
        int preValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue;

            switch (currentChar) {
                case 'I':
                    currentValue = 1;
                    break;
                case 'V':
                    currentValue = 5;
                    break;
                case 'X':
                    currentValue = 10;
                    break;
                case 'L':
                    currentValue = 50;
                    break;
                case 'C':
                    currentValue = 100;
                    break;
                case 'D':
                    currentValue = 500;
                    break;
                case 'M':
                    currentValue = 1000;
                    break;
                default:
                    currentValue = 0; 
            }

            if (currentValue == 0) {
                System.err.println("Invalid Roman numeral: " + s);
                return -1;
            }

            if (currentValue < preValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            preValue = currentValue;
        }

        return result;
    }
}
