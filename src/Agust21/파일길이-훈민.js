function solution(N, relation, dirname) {
    // 부모 -> 자식 빨리 찾기 위한 map.
    // (여기는 relation이랑 달리 0이 root.)
    const childMap = new Map();

    for (const [p, c] of relation) {
        if (!childMap.has(p - 1)) {
            childMap.set(p - 1, []);
        }

        childMap.get(p - 1).push(c - 1);
    }

    function findLongestPath(currentIndex) {
        const currentDir = dirname[currentIndex];
        let result = currentDir.length;

        if (!childMap.has(currentIndex)) {
            return result;
        }

        for (const childIndex of childMap.get(currentIndex)) {
            // + 1: For "/".
            result = Math.max(result, currentDir.length + 1 + findLongestPath(childIndex));
        }

        return result;
    }

    return findLongestPath(0);
}

console.log(solution(
    7,
    [[1, 2], [2, 5], [2, 6], [1, 3], [1, 4], [3, 7]],
    ["root", "abcd", "cs", "hello", "etc", "hello", "solution"]
));

console.log(solution(
    7,
    [[1, 2], [2, 3], [3, 4], [4, 5], [1, 6], [6, 7]],
    ["root", "a", "b", "c", "d", "efghij", "k"]
));