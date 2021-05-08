# VanillaJs
## 배열
1. Push / Pop
- 선입 후출 방식임

2. splice
- ex) var nums = new Array(2, 3, "hello", 7);
- nums.slice(2);  -> 2번째 까지만 나옴(3까지)   2,3
- nums.slice(2,1);  -> 2번째에서 1개만 날라감 hello만 날라감    2,3,7
- nums.slice(2,1,hoho);  -> 2번째에서 1개 날리고 hoho를 넣어라  2,3,hoho,7
- nums.slice(2,0,hoho);  -> 2번째에서 0개 날리고 hoho를 널어라  2,3,hoho,hello,7

## Json
