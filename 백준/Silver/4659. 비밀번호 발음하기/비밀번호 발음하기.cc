#include <bits/stdc++.h>
using namespace std;
string s;
bool b1 = true, b2 = true, ret = true;         // 이번턴 모음일 경우 true, 자음일 경우 false
int c1, c2; // c1 : 모음 개수 체크, c2 : 자음 혹은 모음이 3개 연속으로 오는 경우 c3: 연속된 것 2개 이상.
vector<char> p = {'a', 'e', 'i', 'o', 'u'};

int main() {
    while(true) {
        cin >> s;
        // 기저 사례
        if (s == "end") {
            break;
        }

        for (int i = 0; i < s.size(); i++) {
            char c = s[i];
            auto l = find(p.begin(), p.end(), c);
            bool innerBool = true;
            // 모음인지 체크
            if (l != p.end()) {
                c1++;
                innerBool = true;
            } else {
                innerBool = false;
            }

            // 조건 추가
            if (innerBool != b2) {
                b2 = innerBool;
                c2 = 1;
            } else {
                c2++;
            }

            if (c2 >= 3) {
                ret = false;
            }

            // 전 문자랑 같은지 비교
            if (i > 0) {
                if (s[i] == s[i - 1]) {
                    string t1 = string(1, s[i - 1]) + string(1, s[i]);
                    if (t1 != "ee" && t1 != "oo")
                    {
                        ret = false;
                        // cout << "c3 false : " << t1 << '\n';
                    }
                }
            }
        }
        if (c1 == 0) {
            ret = false;
        }

        if (ret == false) {
            cout << "<" << s << "> is not acceptable." << '\n';
        } else {
            cout << "<" << s << "> is acceptable." << '\n';
        }

        ret = true;
        c1 = 0;
        c2 = 0;
        b1 = true;
        b2 = true;
    }
}