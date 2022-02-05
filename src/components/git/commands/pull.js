`# git pull
md
rm -rf .git
git init
git remote add origin "저장소"
git pull origin main 
git add .
git commit -m "저장소 재설치"
git push origin main
git push -u origin main


# git push -u 의미
md
git push 할때 -u 를 붙이면 
다음번에 git push 만해도 origin main 으로 푸쉬가 된다

# git push --force
md
git push --force
로컬 상태 강제로 푸쉬


# git push (원격이름-origin) --delete (원격브랜치명)

# 이거 어떻게 넘어오지?
# git pull --no-rebase
md
merge 방식으로 pull 된다

# git pull --rebase
md
git pull --rebase
git add .
git rebase --continue

`