#include <bits/stdc++.h>
using namespace std;

int a[101][101], n, m, t, cnt;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

void dfs(int y, int x) {
    if (a[y][x] == 1) {
        a[y][x] = 2;
        return;
    }

    a[y][x] = 2; // 공기 칸도 방문 처리

    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m || a[ny][nx] == 2)
            continue;
        dfs(ny, nx);
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> a[i][j];
            if (a[i][j] == 1) {
                cnt++;
            }
        }
    }

    while(cnt > 0) {
        dfs(0, 0);
        t++;
        int temp = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (a[i][j] == 2) {
                    a[i][j] = 0;
                }
                if (a[i][j] == 1) {
                    temp++;
                }
            }
        }
        if (temp == 0) {
            break;
        } else {
            cnt = temp;
        }
    }
    cout << t << '\n';
    cout << cnt;
    return 0;
}