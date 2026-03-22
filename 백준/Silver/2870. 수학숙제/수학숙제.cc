#include <bits/stdc++.h>
using namespace std;
int n;
string s;
vector<string> ret;

pair<string, int> go(int i) {
    string temp = "";
    int next_number = s.size();
    for (int j = i; j < s.size(); j++)
    {
        if (s[j] >= '0' && s[j] < '0' + 10) {
            temp += s[j];
        } else {
            next_number = j;
            break;
        }
    }
    // 선행 0 제거
    int start = 0;
    while (start < temp.size() - 1 && temp[start] == '0')
        start++;
    temp = temp.substr(start);
    return {temp, next_number};
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> s;
        for (int j = 0; j < s.size(); j++) {
            if (s[j] >= '0' && s[j] < '0' + 10) {
                auto temp = go(j);
                ret.push_back(temp.first);
                j = temp.second;
            }
        }
    }
    sort(ret.begin(), ret.end(), [](const string& a, const string& b) {
        if (a.size() != b.size()) return a.size() < b.size();
        return a < b;
    });
    for (auto i : ret) {
        cout << i << "\n";
    }
    return 0;
}