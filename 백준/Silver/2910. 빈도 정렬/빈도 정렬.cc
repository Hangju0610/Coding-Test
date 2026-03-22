#include <bits/stdc++.h>
using namespace std;
int n, c, a[1001], f;
map<int, int> mp;
map<int, int> order;
vector<pair<int, int>> v;

bool compare(pair<int, int> a, pair<int, int> b) {
    if(a.second == b.second) {
        return order[a.first] < order[b.first]; // 오름차순
    }
    return a.second > b.second; // 내림차순
}

int main() {
    cin >> n >> c;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        mp[a[i]]++;
        if (order[a[i]] == 0)
        {
            order[a[i]] = i + 1;
        }
    }

    for (auto i : mp) {
        v.push_back(i);
    }

    sort(v.begin(), v.end(), compare);

    for (auto i : v) {
        for (int j = 0; j < i.second; j++) {
            cout << i.first << ' ';
        }
    }

    return 0;
}