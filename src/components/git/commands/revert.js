`# revert
c0-c1-c2-c3-c4
git revert c3

# 리버트 결과
- c3에서의 input 값만 제거 된다


# reset
c0-c1-c2-c3-c4
git reset --hard c3


# git reset --hard
2x

# git reset --soft
21
git reset --soft HEAD~
# git reset --mixed
20

# 리셋 결과
- c3 까지는 살아남고 그 후손은 다 사라진다`