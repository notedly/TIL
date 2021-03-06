# 알아두면 쓸모 있는 GIT 명령어 01. stash

stash는 알아두면 편리한 명령어입니다.

## stash 의미

stash의 사전적 의미 먼저 살펴보겠습니다.
사전적 의미는 "넣어두다", "저장해놓다"라는 의미입니다.
풀이해보면 stash는 현재 변경된 내용을 잠시 저장해놓는다고 이해하시면 되겠습니다.

## 언제 사용하는가?

상황으로 예를 들어보겠습니다.
현재 작업을 새로운 브랜치(a)를 생성해서 작업했어야 했는데 실수로 마스터 브랜치에 작업했을 경우 stash를 사용하여 해결할 수 있습니다.

또 이런 경우 사용할 수 있습니다. A 브랜치에서 작업을 하다가 B 브랜치에서 작업할 일이 생겼을 때에 A 브랜치의 코드가 완성되지 않아 커밋을 하기 싫을 경우 사용하면 편리합니다.
현재까지의 변경사항을 저장하고 B 브랜치로 넘어갔다가, 다시 돌아왔을 때 작업했던 내용을 복구할 수 있습니다.

첫번째 상황일 경우를 예로 들어 사용해보겠습니다.
과정은 이렇습니다. 마스터 브랜치에서 작업한 내용을 임시로 다른 공간에 저장해두고
새로운 브랜치(a)에서 불러온다고 보면 됩니다.

현재 마스터 브랜치에서 작업을 한 상황입니다.

[그림1]

현재 상태에서 임시 저장하겠습니다.

git stash

마스터 브랜치에서 위 명령어를 입력하여 저장해놓습니다.

[그림2]

Saved working ~ 이라는 메시지가 뜨고 현재 HEAD의 위치를 말해줍니다.
혹시 모르니 저장이 잘 되었는 지 확인해보겠습니다.

[그림3]

git stash list

위 명령어를 실행하면 저장한 리스트가 보입니다.
현재는 하나밖에 없습니다.

저장한 다음에 마스터 브랜치에서 현재 변경된 부분이 있는지 확인해보면 작업했던 내역이 깨끗해졌습니다. 작업했던 내용이 다른 곳에 임시로 저장되고 워킹 디렉토리는 깨끗해지는 것입니다.

그럼 이제 새로운 브랜치(a)로 이동해서 저장한 내용을 가져오겠습니다.

새로운 브랜치 a로 체크아웃을 합니다.
먼저 git stash list로 저장했던 리스트를 출력해보면 master 브랜치에서 저장했던 내용이 보입니다.

저장한 내용을 불러오는 명령어는 pop, apply 두 가지가 있는데 우선 pop 을 사용해서 불러오겠습니다.

[그림4]

명령어를 실행해보면 가장 최근에 저장했던 내용을 a 브랜치에 불러오게 되고 다시 작업을 하시면 됩니다.

여기서 다시 리스트를 출력해보면 리스트가 삭제된 것을 보실 수 있습니다.
제가 위에서 저장하는 명령어가 apply도 있다고 말씀드렸습니다.
이 부분에서 차이가 있습니다.

apply를 사용해서 저장 내용을 불러오면 리스트는 삭제되지 않고 계속 남아 있습니다.

간단합니다. 마지막으로 명령어를 정리해보겠습니다.


## 명령어 정리

`
git stash (save)
`
현재 작업 내용을 저장합니다. save는 생략이 가능합니다.

`
git stash list
`
저장한 리스트를 출력합니다.

`
git stash pop
`
저장한 내용을 불러옵니다. 그리고 저장했던 리스트에서 내역을 삭제합니다.

`
git stash apply
`
저장한 내용을 불러옵니다. 그리고 저장했던 리스트에서 내역을 삭제하지 않고 남겨둡니다.

`
git stash drop
`
가장 최근에 저장한 내역을 삭제합니다.

`
git stash drop stash@{0}
`
stash@{0} 내역을 삭제합니다. stash list 를 출력해보면 각 목록 앞에 있는 이름을 지정하여 삭제할 수 있습니다.

`
git stash clear
`
전체 stash list를 삭제합니다.

부족한 내용은 공식 사이트의 레퍼런스 문서에 잘 나와있으니 참고해주세요.
(https://git-scm.com/docs/git-stash)

이상입니다. 읽어 주셔서 감사합니다.
