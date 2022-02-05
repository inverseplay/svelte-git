export let cherrypick = 
{
    h: `
    # 기본적인 cherrypick 전략
    git switch main
    git checkout HEAD~
    git cherry-pick c1
    git checkout main

    > cherry-pick 된 c1 은 그대로 그자리에 남아있다
    
    ? head 에서 체리픽해도 다시 브랜치로 돌아가면 기록삭제된다 왜?
    
    
    `
}