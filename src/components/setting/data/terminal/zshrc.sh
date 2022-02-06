# Reset
NC='\033[0m'       # Text Reset

# Regular Colors
Black='\033[0;30m'        # Black
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan
White='\033[0;37m'        # White

# %n : 유저이름
# %m : 기계이름
# %1~ symbol means the current working directory path where the ~ strips the $HOME directory location.
# %~ : 디렉터리 
# %1~ : 디렉터리 끝

PROMPT='%n~$'
PROMPT='%F{125}%n%f' # F 색변환 f 색변환 종료
PROMPT='%F{125}%1~%f '

# git 보이게 설정
function parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/\1/p'
}

COLOR_DEF=$'\e[0m'
COLOR_USR=$'\e[38;5;243m'
COLOR_DIR=$'\e[33;35;115m'
COLOR_GIT=$'\e[38;5;39m'
setopt PROMPT_SUBST
export PROMPT='${COLOR_DIR}%1~ ${COLOR_GIT}$(parse_git_branch)${COLOR_DEF} <%F{red}<%f '

# %{ %} 로 감싸야 자동완성이 깨지지 않는다
# export PROMPT='%{${COLOR_DIR}%}%1~ %{${COLOR_GIT}%}$(parse_git_branch)%{${COLOR_DEF}%} <%F{red}<%f '

# 깃 자동화
g0 () {
    x=$1
    if [ $# -eq 0 ]; then
        x='i'
    fi
    echo "${Green}=== git init === ${NC}"
    git init
    echo "${Green}=== git add . === ${NC}"
    git add .
    git status 
    echo "${Green} === git commit -m $x ===${NC} "
    git commit -m $x
}

g1 () {
    x=$1
    if [ $# -eq 0 ]; then
        x='i'
    fi
    echo "${Yellow} === git commit $x ===${NC} "
    git add .
    git commit -m "$x"
    echo " "

    echo "${Green} === git push origin main ===${NC} "
    git push origin main
    echo " "
}

# 즉시 실행 
lets_code () {
   echo "${Blue}let's code!${NC}"
}

lets_code