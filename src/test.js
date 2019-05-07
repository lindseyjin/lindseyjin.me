//JavaScript-C24.2.0 (SpiderMonkey)

let list = [3, 2, 4, 6, 3, 4, 5, 8, 6, 7, 9, 6, 3, 6, 8, 4, 2, 2, 4, 6, 2, 1, 3, 4, 5, 6, 7, 4, 5, 7, 4, 5, 3, 2, 5, 6, 3, 7, 8, 3, 2, 9, 0, 4, 3, 6, 8, 9];
let dict = {};

for (let i = 0; i < list.length; i++) {
     if (dict[list[i]]) dict[list[i]]++;
     else dict[list[i]] = 0;
}

let num = 0;

for (let item in dict) {
    if (dict[item]%2 == 1) num++;
}
print(num);