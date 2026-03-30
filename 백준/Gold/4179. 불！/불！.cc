#include <bits/stdc++.h>
using namespace std;

int r, c, person_check[1004][1004], fire_check[1004][1004], sy, sx, y, x, ret;
char a[1004][1004];
string s;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int INF = 999999;

int main() {
    cin >> r >> c;
    queue<pair<int, int>> q;
    fill(&fire_check[0][0], &fire_check[0][0] + 1004 * 1004, INF);
    for (int i = 0; i < r; i++)
    {
        cin >> s;
        for (int j = 0; j < c; j++) {
            a[i][j] = s[j];
            if (a[i][j] == 'F') {
                fire_check[i][j] = 1;
                q.push({i, j});
            } else if (a[i][j] == 'J') {
                sy = i;
                sx = j;
            }
        }
    }

    while(!q.empty()) {
        tie(y, x) = q.front();
        q.pop();
        for (int i = 0; i < 4; i++) {
            int ny = y + dy[i];
            int nx = x + dx[i];
            if (ny < 0 || ny >= r || nx < 0 || nx >= c)
                continue;
            if(fire_check[ny][nx] != INF || a[ny][nx]=='#') continue;
			fire_check[ny][nx] = fire_check[y][x] + 1;
			q.push({ny, nx});
        }
    }

    person_check[sy][sx] = 1;
    q.push({sy, sx});
    while(!q.empty()) {
        tie(y, x) = q.front();
        q.pop();
        if(x == c - 1 || y == r - 1 || x == 0 || y == 0){
            ret = person_check[y][x];
            break;
		}
		for(int i = 0; i < 4; i++){
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || ny >= r || nx < 0 || nx >= c)
                continue;
			if(person_check[ny][nx] || a[ny][nx]=='#') continue; 
			if(fire_check[ny][nx] <= person_check[y][x] + 1) continue;
            person_check[ny][nx] = person_check[y][x] + 1;
            q.push({ny, nx});
		}
    }

    if(ret != 0) cout << ret;
	else cout << "IMPOSSIBLE";
	return 0;
}