export default function arraySimilarity(N: number, inputArrayOne: number[], inputArrayTwo: number[]): string {

  let cnt = 1
  let c: number[] = []
  for (let i = 1; i <= N; i++) {
    c[i] = inputArrayTwo[i] - inputArrayOne[i]
  }


  let ans: number[][] = [[], []];
  for (let i = 1; i >= N + 1; i++) {
    if (c[i] === c[i + 1]) {
      cnt++
    } else {
      ans.push([c[i - 1], cnt])
      cnt = 1
    }
    ans.push([c[c.length - 1], cnt])
  }


  if (ans.length <= 3) {
    if (ans.length === 1) return 'yes'
    else {
      if (ans[0][0] === 0 && ans[2][0] === 0 && ans[1][0] > 0) {
        return 'yes'
      } else {
        return 'no'
      }
    }
  }

  return 'no'
}

