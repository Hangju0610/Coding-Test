class Solution {
    public int solution(String t, String p) {
        int pLength = p.length();
        long intP = Long.parseLong(p);

        int answer = 0;

        for (int i = 0; i <= t.length() - pLength; i++) {
            long sliceLong = Long.parseLong(t.substring(i, i + pLength));
            if (sliceLong <= intP) {
                answer++;
            }
        }

        return answer;
    }
}