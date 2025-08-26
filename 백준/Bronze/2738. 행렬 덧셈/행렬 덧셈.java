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
        List<Integer> matrixSize = readMatrixSize();
        int x = matrixSize.get(0);
        int y = matrixSize.get(1);
        List<List<Integer>> matrixA = readMatrix(x, y);
        List<List<Integer>> matrixB = readMatrix(x, y);

        for (int i = 0; i < x; i++) {
            List<Integer> newLines = new ArrayList<>();
            for (int j = 0; j < y; j++) {
                newLines.add(matrixA.get(i).get(j) + matrixB.get(i).get(j));
            }
            String result = newLines.stream().map(String::valueOf).collect(Collectors.joining(" "));
            bw.write(result);
            bw.newLine();
        }
        bw.flush();

    }

    static List<Integer> readMatrixSize() throws IOException {
        List<Integer> matrixSize = new ArrayList<>();
        String line = br.readLine();
        StringTokenizer st = new StringTokenizer(line);

        while(st.hasMoreTokens()) {
            int size = Integer.parseInt(st.nextToken());
            matrixSize.add(size);
        }
        return matrixSize;
    }

    static List<List<Integer>> readMatrix(Integer x, Integer y) throws IOException {
        List<List<Integer>> matrix = new ArrayList<>();
        for (int i = 0; i < x; i++) {
            List<Integer> line = new ArrayList<>();
            StringTokenizer st = new StringTokenizer(br.readLine());
            while(st.hasMoreTokens()) {
                int value = Integer.parseInt(st.nextToken());
                line.add(value);
            }
            matrix.add(line);
        }
        return matrix;
    }
}