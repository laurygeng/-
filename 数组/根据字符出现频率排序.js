// 根据字符出现频率排序        
// https://leetcode-cn.com/problems/sort-characters-by-frequency

// 因此需要首先遍历字符串，统计每个字符出现的频率，然后每次得到频率最高的字符，生成排序后的字符串。
// 可以使用哈希表记录每个字符出现的频率，将字符去重后存入列表，再将列表中的字符按照频率降序排序。
// 生成排序后的字符串时，遍历列表中的每个字符，则遍历顺序为字符按照频率递减的顺序。对于每个字符，将该字符按照出现频率拼接到排序后的字符串。例如，遍历到字符 cc，该字符在字符串中出现了 \textit{freq}freq 次，则将 \textit{freq}freq 个字符 cc 拼接到排序后的字符串。
// 也可以使用优先队列或大根堆存储字符，读者可以自行尝试。

var frequencySort = function(s) {
  const map = new Map();
  const length = s.length;
  for (let i = 0; i < length; i++) {
      const c = s[i];
      const frequency = (map.get(c) || 0) + 1;
      map.set(c, frequency);
  }
  const list = [...map.keys()];
  list.sort((a, b) => map.get(b) - map.get(a));
  const sb = [];
  const size = list.length;
  for (let i = 0; i < size; i++) {
      const c = list[i];
      const frequency = map.get(c);
      for (let j = 0; j < frequency; j++) {
          sb.push(c);
      }
  }
  return sb.join('');
};

