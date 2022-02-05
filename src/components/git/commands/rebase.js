export let rebase = 
{
    onto: "git rebase --onto 도착 출발 이동", 
    h: `
    git rebase --onto main animals dogs
    
    `,
    h1: `
    # 기본적인 rebase 전략
    # main[c8]-git[c1]
    + git switch main
    + git rebase git
    + git reset --soft HEAD~
    + git stash


    

    `
}