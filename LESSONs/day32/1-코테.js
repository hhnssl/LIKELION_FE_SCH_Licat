/*
words : ["frodo", "front", "frost", "frozen", "frame", "kakao"]
query : ["fro??", "????o", "fr???", "fro???", "pro?"]
result : [3, 2, 4, 1, 0]

"fro??"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 3

"????o"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 2

"fr???"
["frodo", "front", "frost", "frozen", "frame", "kakao"] -> 4

*/

'frodo'.match(/fro../g);
