#include <bits/stdc++.h>
using namespace std;

int n, k, t, ret = -10000000;
vector<int> temp;

int main() {
    cin >> n >> k;
    for (int i = 0; i < n; i++) {
        cin >> t;
        temp.push_back(t);
        
        if (i + 1 >= k) {
            int sum = 0;
            for (int j = i; j >= i + 1 - k; j--) {
                sum += temp[j];
            }
            if (sum > ret) {
                ret = sum;
            }
        }
    }
    cout << ret << '\n';
}