#include <bits/stdc++.h>
using namespace std;

int r, c;
char a[21][21];
map<char, int> mp;
string s;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

int go(int y, int x, int cnt) {
    cnt++;
    int result = cnt; // 현재 경로 길이를 result로 분리
    for (int i = 0; i < 4; i++)
    {
        int ny = y + dy[i];
        int nx = x + dx[i];

        if(ny < 0 || ny >= r || nx < 0 || nx >= c || mp[a[ny][nx]] == 1)
            continue;
        mp[a[ny][nx]] = 1;
        result = max(result, go(ny, nx, cnt)); //cnt는 변경하지 않는다.
        mp[a[ny][nx]] = 0;
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> r >> c;
    for (int i = 0; i < r; i++) {
        cin >> s;
        for (int j = 0; j < c; j++) {
            a[i][j] = s[j];
        }
    }

    mp[a[0][0]] = 1;
    
    int cnt = go(0, 0, 0);
    cout << cnt;
}