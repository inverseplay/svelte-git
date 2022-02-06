export let merge = 
{
    squash: "git merge --squash", 
}

// `# rebase
// main) git branch b1
// main) git switch b1
// b1) git commit -m "c1"
// b1) git commit -m "c2"
// b1) git rebase main
// b1) git rebase --continue
// b1) git switch main
// main) git merge b1
// main) git branch -d b1


// # merge
// main) git branch b2
// main) git switch b2
// b1) git commit -m "c1"
// b1) git commit -m "c2"
// b1) git switch main
// main) git merge b2
// main) git branch -d b1


// # rebase -i
// git rebase -i log
// git reset HEAD~
// git add 파일명1
// git commit -m "내용1"
// git add 파일명2
// git commit -m "내용2"
// git rebase --continue



// # 공통조상 브랜치 관리 fastfoward
// git merge => 자동으로 ff 병합된다
// git merge --no-ff  => ff 병합하지 않고 커밋새로 만들어서 병합한다

// # 3way merge
// 2가지 서로 다른 커밋을 merge 할때 결국 공통조상으로부터 비교를 통해야하기 때문에
// 2가지를 병합할때 3가지를 비교하여 병합을 진행하게 된다

// # rebase --onto
// rebase --onto main 가지 잔가지
// git switch main
// git merge 잔가지


// # git merge --squash
// merge 할 대상의 커밋들을 뭉퉁그려서 커밋할수 있음
// `