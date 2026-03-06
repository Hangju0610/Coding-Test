#include <bits/stdc++.h>
using namespace std;
string s;
int a[26];
int n;

int main() {
    // 1. 단어 s를 받는다.
    cin >> s;

    for (int i = 0; i < s.size(); i++) {
        a[(int)s[i] - 97]++;
    }

    for (int i = 0; i < 26; i++) {
        cout << a[i] << " ";
    }
    cout << "\n";
    return 0;
}