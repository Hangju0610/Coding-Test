#include <bits/stdc++.h>
using namespace std;
const int maxInt = 987654321;
int n, p, f, s, v, ret = maxInt;
vector<array<int, 5>> a;

map<int, vector<vector<int>>> map_ret;

int main()
{
    cin >> n;
    cin >> p >> f >> s >> v;
    for (int i = 0; i < n; i++) {
        int mp, mf, ms, mv, mc;
        cin >> mp >> mf >> ms >> mv >> mc;
        a.push_back({mp, mf, ms, mv, mc});
    }

    for (int i = 0; i < (1 << n); i++) {
        int tp = 0, tf = 0, ts = 0, tv = 0, tc = 0;
        vector<int> vect;
        for (int j = 0; j < n; j++) {
            if (i & (1 << j)) {
                vect.push_back(j + 1);
                tp += a[j][0];
                tf += a[j][1];
                ts += a[j][2];
                tv += a[j][3];
                tc += a[j][4];
            }
        }

        if (tp >= p && tf >= f && ts >= s && tv >= v) {
            if (tc <= ret) {
                ret = min(ret, tc);
                map_ret[ret].push_back(vect);
            }
        }
        
    }
    if (ret == maxInt) {
        cout << -1 << '\n';
        return 0;
    }
    cout << ret << '\n';
    sort(map_ret[ret].begin(), map_ret[ret].end());
    for(int a : map_ret[ret][0]){
        cout << a << " ";
    }
    return 0;
}