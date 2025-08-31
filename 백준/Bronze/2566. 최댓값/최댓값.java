import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    public static void main(String[] args) throws Exception {
        int maxInt = 0;
        List<Integer> positions = new ArrayList<>();
        positions = Arrays.asList(1, 1);

        for (int i = 0; i < 9; i++) {
            Integer[] row = readMatrixRow().toArray(new Integer[9]);
            for (int j = 0; j < 9; j++) {
                if (row[j] > maxInt) {
                    maxInt = row[j];
                    positions = Arrays.asList(i + 1, j + 1);
                }
            }
        }

        bw.write(String.valueOf(maxInt));
        bw.newLine();
        String result = positions.stream().map(String::valueOf).collect(Collectors.joining(" "));
        bw.write(result);
        
        bw.flush();

    }

    static List<Integer> readMatrixRow() throws IOException {
        List<Integer> matrixSize = new ArrayList<>();
        String line = br.readLine();
        StringTokenizer st = new StringTokenizer(line);

        while (st.hasMoreTokens()) {
            int size = Integer.parseInt(st.nextToken());
            matrixSize.add(size);
        }
        return matrixSize;
    }
}