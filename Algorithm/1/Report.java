import java.util.Scanner;

public class Report {
    Scanner input;
    int bottleCount;
    float[] bottleCapacity;
    float totalFluid;

    public Report() {
        input = new Scanner(System.in);
        bottleCount = input.nextInt();
        totalFluid = input.nextFloat();
        bottleCapacity = new float[bottleCount];
        for (int i = 0; i < bottleCount; i++) {
            bottleCapacity[i] = input.nextFloat();
        }
    }

    public String result() {
        float totalCapacity = 0;
        for (int i = 0; i < bottleCount; i++) {
            totalCapacity += bottleCapacity[i];
        }
        if (totalCapacity < totalFluid)
            return "NO";
        else
            return "YES";
    }

    public static void main(String[] args) {
        Report test = new Report();
        System.out.println(test.result());
    }
}
