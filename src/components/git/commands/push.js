export let push = 
{
    h: ` 
    # 로컬 => 원격
    git push -u origin main
    git push --set-upstream origin fruit

    # 원격 => 로컬 
    git fetch
    git switch -t origin/

    # 원격의 브랜치 삭제
    git push origin_원격명 --delete 브랜치명
    git push origin_원격명 -d 브랜치명

    # 원격 => 로컬
    git switch -t origin/브랜치명
    git branch -a

    # git push --force
    `,

    ex: `
    rm -rf .git
    git init
    git remote add origin "저장소"
    git pull origin main 
    git add .
    git commit -m "저장소 재설치"
    git push origin main
    git push -u origin main

    `
}

