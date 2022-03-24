// 로그인 실패 시 화면 맨 위에 뜨는 경고창
// 1초 후에 자동으로 종료된다.

import "./LoginFailAlert.css"

export default function LoginFailAlert() {
    return (
        <>
        <div className = "alert alert-danger" role = "alert">로그인 실패</div>
        </>
    )
}