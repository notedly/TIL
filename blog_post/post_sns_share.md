
## meta 태그 설정하기

페이지를 공유하는 기능을 적용하기 전에 HTML 마크업에 페이스북, 트위터에 정보를 넘겨 줄 meta 태그가 적용되어있어야 합니다.
페이스북이나 트위터에서 링크를 공유했을 때 해당 페이지의 제목, 설명, 썸네일 이미지를 볼 수가 있는데 meta 태그를 설정해줘야 가능합니다.

( html meta 태그란 현재 페이지를 설명해주는 태그입니다. )

페이스북은 Open Graph protocol 을 사용합니다. 공식 홈페이지를 보면(http://ogp.me/) 많은 속성들이 보이는데, 우리가 사용하는 속성은 다음과 같습니다.

`
<meta property="og:title" content="제목">
<meta property="og:description" content="설명">
<meta property="og:image" content="대표 이미지">
<meta property="og:url" content="현재 페이지 링크">
`

og:title
제목입니다. 현재 페이지가 블로그 글 상세 보기 페이지라면 글 제목이 들어갑니다.

og:description
현재 페이지의 간략한 설명이 들어갑니다.

og:image
현재 페이지를 공유할 때 표시되는 이미지 URL입니다.

이미지의 크기는 최소 1200x630 픽셀인 이미지를 사용합니다. 이미지가 600x315 픽셀 보다 작은 경우에는 왼쪽에 작은 이미지, 오른쪽에 텍스트( 제목, 설명 )가 들어가는 구성으로 보입니다.
이미지의 최대 크기는 8MB입니다.

og:url
현재 페이지의 링크가 들어갑니다.

공유했을 때 어떻게 보이는지 확인하려면, 공유디버거(https://developers.facebook.com/tools/debug/)에 URL을 입력하면 확인할 수 있습니다.

트위터도 페이스북과 유사한 <meta>태그를 사용합니다.

`
<meta name="twitter:title" content="제목" />
<meta name="twitter:description" content="설명" />
<meta name="twitter:image" content="대표 이미지" />
<meta name="twitter:card" content="트위터 카드 타입" />
`

title, description는 페이스북과 동일한 정보입니다.

twitter:image
이미지는 1:1 비율의 144x144 픽셀부터 최대 4096x4096 픽셀까지 지원합니다.
이미지 크기는 5MB 미만이어야 합니다.

twitter:card
트위터에서 보이는 카드 타입입니다.
summary, photo, player 중 하나를 선택할 수 있습니다.

트위터도 마찬가지로 (https://cards-dev.twitter.com/validator) 이 사이트에서 페이지 URL을 입력하면 미리 보기를 확인 할 수 있습니다.

## 공유하기 링크

기본적인 설정 작업이 끝났으면 각 소셜 버튼에 공유하기 링크를 적용해주겠습니다.
필요한 파라미터 값은 많지 않습니다.
페이지의 제목, 링크 값만 불러와서 공유 링크의 해당 위치에 적용 하면됩니다.
아래는 각 SNS 별 공유 URL, 파라미터를 정리한 내용입니다.

페이스북
`http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}`

트위터
`http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}`

네이버블로그
`https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}`

구글플러스
`https://plus.google.com/share?url={페이지링크}&t={페이지 제목}`

가장 많이 사용하는 4개만 정리했으며 앞으로 새로운 SNS 추가 시 업데이트하겠습니다.
다음은 예제 코드이니 참고하시길 바랍니다.

`
class Share{
	constructor() {
		/**
		@postUrl : 현재 포스트 URL
		@postTitle : 현재 포스트 제목
		*/
		this.info = {
			postUrl : document.URL ,
			postTitle : document.title
		}
	}

	/* FaceBook */
	faceBookShare(){
		let url = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(this.info.postUrl) + "&t=" + encodeURIComponent( this.info.postTitle );
		this.windowOpen(url, 600, 450);
	}

	/* Twitter */
	twitterShare(){
		let url = "http://twitter.com/intent/tweet?text=" + encodeURIComponent( this.info.postTitle ) + "&url=" + encodeURIComponent(this.info.postUrl);
		this.windowOpen (url, 600, 400);
	}

	/* Naver Blog */
	naverBlogShare(){
		let url = "https://share.naver.com/web/shareView.nhn?url=" + encodeURIComponent(this.info.postUrl) + "&title=" + encodeURIComponent( this.info.postTitle );
		this.windowOpen (url, 500, 600);
	}

	/* google plus */
	googlePlusShare(){
		let url = "https://plus.google.com/share?url=" + encodeURIComponent(this.info.postUrl) + "&t=" + encodeURIComponent(this.info.postTitle);
		this.windowOpen (url, 500, 600);
	}

	windowOpen( ...args ) {
		let [ url, w, h ] = args ;
		let strPopupInfo = "left=10,top=10,width="+w+",height="+h+",menubar=yes,location=yes,resizable=no,scrollbars=no,status=no";
		window.open(url, "sharePopUp", strPopupInfo);
	}
} ;
`

이상입니다. 읽어 주셔서 감사합니다.




