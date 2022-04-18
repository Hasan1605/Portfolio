#include <bits/stdc++.h>
using namespace std;

#define f first
#define s second
#define ll long long
#define pb push_back
#define mp make_pair
#define inp(x) cin >> x
#define print(x) cout << x
#define pii pair<int, int>
#define pll pair<ll, ll>
#define gcd(a, b) __gcd(a, b)
#define pq priority_queue<int, vector<int>, greater<int>>
#define pq1 priority_queue<pll, vector<pll>, greater<pll>>

const int mod = 1e9 + 7;

int main(int argc, char const *argv[])
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    cin >> t;
    while (t--)
    {
        int N;
        bool result = false;
        string str;
        cin >> N >> str;
        if (N % 2 == 1)
        {
            cout << "NO" << endl;
            continue;
        }
        set<pair<int, int>> st;
        vector<int> arr(26, 0);
        for (int i = 0; i < N; i++)
        {
            char x = str[i];
            arr[x - 'a']++;
        }
        for (int i = 0; i < 26; i++)
        {
            if (arr[i] > 0)
            {
                st.insert({arr[i], i});
                // cout << arr[i] << " " << i << endl;
            }
        }
        string res = "";
        while (st.size() > 0)
        {
            if (st.size() == 1)
            {
                result = false;
                break;
            }
            else
            {
                int y = st.rbegin()->second;
                int x = st.begin()->second;
                int z = st.rbegin()->first;
                int p = st.begin()->first;
                char k = y + 'a';
                res = k + res;
                res += (x + 'a');
                if (z == 1)
                {
                    st.erase(st.find({z, y}));
                }
                else
                {
                    st.erase(st.find({z, y}));
                    st.insert({z - 1, y});
                }
                if (p == 1)
                {
                    st.erase(st.find({p, x}));
                }
                else
                {
                    st.erase(st.find({p, x}));
                    st.insert({p - 1, x});
                }
                if (st.size() == 0)
                {
                    result = true;
                    break;
                }
            }
        }
        if (result == true)
        {
            cout << "YES"
                 << "\n";
            cout << res << "\n";
        }
        else
        {
            cout << "NO"
                 << "\n";
        }
    }
}
