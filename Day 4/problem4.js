let n = 9;
let current_num = 0;
let sum = 0;
let previous_sum = 0;
while (current_num <= n) {
  previous_sum = sum;
  sum = current_num + previous_sum;
  current_num++;
}
console.log(sum);