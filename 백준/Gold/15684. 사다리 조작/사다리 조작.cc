#include <bits/stdc++.h>
using namespace std;

int n, m, h, ret = 987654321, y, x, a[31][11], maxCount, visited[31][11];
bool flag = false;


bool go() {
    for (int i = 1; i <= n; i++) {
        int now_x = i;
        for (int now_y = 1; now_y <= h; now_y++) {
            if (a[now_y][now_x] == 1) {
                now_x++; // 우측 이동
            } else if (a[now_y][now_x - 1] == 1) {
                now_x--; // 좌측 이동
            }
        }
        // cout << i << "번째 세로줄 결과 : " << now_x << '\n';
        if (now_x != i)
        {
            return false;
        }
    }
    return true;
}

void add(int y, int x, int count) {
    if (flag == true) {
        return;
    }

    if (count == maxCount) {
        flag = go();
        return;
    }

    for (int i = y; i <= h; i++) {
        for (int j = 1; j <= n; j++) {
            if (a[i][j] == 1 || a[i][j-1] == 1)
                continue;
            a[i][j] = 1;
            add(i, j, count + 1);
            a[i][j] = 0;
        }
    }
}

int main() {
    cin >> n >> m >> h;
    for (int i = 0; i < m; i++) {
        cin >> y >> x;
        a[y][x] = 1; // y번 점선에서 x 세로선과 x + 1 세로선이 연결되어있단 의미.
    }

    // 최대 3개 까지만 추가해보고, 안되면 -1이다. 또한 불가능하면 -1이다.
    // 최대 30 * 10
    for (int i = 0; i <= 3; i++) {
        maxCount = i;
        add(0, 0, 0);
        if (flag == true) {
            ret = i;
            break;
        }
    }

    if (ret <= 3) {
        cout << ret << '\n';
    } else {
        cout << -1 << '\n';
    }
    return 0;
}