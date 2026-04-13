#include <bits/stdc++.h>
using namespace std;

int r, c, k, ret;
char a[6][6];
int v[6][6];
string str;

int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

void go(int y, int x, int s) {
    if (s > k)
        return;
    if (y == 0 && x == c - 1) {
        if (s == k) {
            ret++;
        }
        return;
    }

    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || ny >= r || nx < 0 || nx >= c || v[ny][nx] || a[ny][nx] == 'T')
            continue;
        // 원복
        v[ny][nx] = 1;
        go(ny, nx, s + 1);
        v[ny][nx] = 0;
    }
}

int main() {
    cin >> r >> c >> k;
    for (int i = 0; i < r; i++) {
        cin >> str;
        for (int j = 0; j < c; j++) {
            a[i][j] = str[j];
        }
    }
    if (k == 1) {
        cout << 0;
        return 0;
    }

    v[r-1][0] = 1;
    go(r-1, 0, 1);
    cout << ret;
}