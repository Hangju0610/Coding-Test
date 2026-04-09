#include <bits/stdc++.h>
using namespace std;
int k, n, a[2048];
vector<int> ret[12];

void go(int min, int max, int level) {
    int index = (min + max) / 2;
    ret[level].push_back(index);

    // 기저 사례 추가

    if (index == min || index == max) {
        return;
    }

    level++;

    go(min, index, level);
    go(index, max, level);

    return;
}

int main() {
    cin >> k;
    n = (int) pow(2, (double)k) - 1;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    go(0, n, 0);
    for (int i = 0; i < k; i++) {
        for (int num : ret[i]) {
            cout << a[num] << ' ';
        }
        cout << '\n';
    }
}