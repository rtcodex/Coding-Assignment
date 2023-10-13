import java.util.*;
public class shuffleArray {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};

        // Copy of the original array
        int[] shuffledArray = Arrays.copyOf(originalArray, originalArray.length);

        //Display array
        ShuffleArray(shuffledArray);
        System.out.println("Shuffled Array: " + Arrays.toString(shuffledArray));
    }

    //Logic
    public static void ShuffleArray(int[] array) {
        int n = array.length;

        for (int i = n - 1; i > 0; i--) {
            int j = (int) (Math.random() * (i + 1));
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
