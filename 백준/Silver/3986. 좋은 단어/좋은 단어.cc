#include <bits/stdc++.h>
using namespace std;

int n, ret;
string s;


int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> s;
        stack<char> st;

        // 1.무조건 짝수여야 한다.
        if (s.size() % 2 != 0) {
            continue;
        }
        for (char c : s) {
            if (!st.empty() && c == st.top()) {
                st.pop();
            } else {
                st.push(c);
            }
        }
        if (st.empty())
            ret++;
    }
    cout << ret << '\n';
    return 0;
}