`주.부.수
주. 버전 호환 x
부. 버전 호환 o 새로운 기능 o
수. 버그수정

git tag v2.0.0 커밋해쉬 -m "굿거리장단"
git tag -a -m v2.0.0
git tag v2.0.0 -m "자진모리버전"
git tag -d v2.0.0
git show v2.0.0

git tag -l 'v1.*'
git checkout v1.2.1

# 원격에 올리기
git push origin v2.0.0
git push --delete origin v2.0.0
git push --tags`