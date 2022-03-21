import "./Loading.css";

export default function Loading() {
  return (
    <>
      <div className = "loading">
        <h1>로딩중입니다.</h1>
        <div>
          <img src="/loading_icon.png" height="200" alt="아이콘" />
        </div>
        <h1>Simple - Webapp</h1>
      </div>
    </>
  );
}
