export let reflog = 
{
    h: `
    # 죽은 브랜치 살리기
    git branch -D component-git
    git reflog
    git checkout -b component-git HEAD@{269}

    # 죽은 커밋 살리기
    git reset --hard HEAD~15
    git reflog
    git reset --hard 로그

    `
}