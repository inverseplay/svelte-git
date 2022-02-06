export let rebase = 
{
    onto: "git rebase --onto 부모가지 잔가지 이동할가지", 
    i: "git rebase -i HEAD~4",
    h: `
    # 잔가지만 똑 잘라서 붙이기
    git rebase --onto 부모가지 잔가지 붙일장소

    # 가지 정리하기
    git rebase -i HEAD~4
    `
}