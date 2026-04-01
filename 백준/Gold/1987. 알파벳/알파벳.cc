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
    int result = cnt;
    for (int i = 0; i < 4; i++)
    {
        int ny = y + dy[i];
        int nx = x + dx[i];

        if(ny < 0 || ny >= r || nx < 0 || nx >= c || mp[a[ny][nx]] == 1)
            continue;
        mp[a[ny][nx]] = 1;
        result = max(result, go(ny, nx, cnt));
        mp[a[ny][nx]] = 0;
    }
    return result;
}

int main() {
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