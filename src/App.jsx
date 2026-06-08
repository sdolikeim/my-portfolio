import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="badge">Backend / Full-stack Developer</p>
          <h1>Java/Spring Boot 백엔드 개발자</h1>
          <p className="hero-text">
            사용자 흐름과 예외 상황을 고려하며 안정적인 API와 서비스 기능을 구현하는 개발자입니다.
          </p>
          <div className="hero-buttons">
            <a href="https://github.com/alphaengneering02-dev" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://github.com/alphaengneering02-dev/3H_Furniture" target="_blank" rel="noreferrer">
              Project Repository
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <h2>About Me</h2>
          <p>
            Java/Spring Boot 기반으로 상품, 리뷰, 북마크, 파일 업로드, 페이지네이션 기능을
            구현한 신입 백엔드 개발자입니다. 기능 구현에서 끝나지 않고 사용자의 실제 이용
            흐름과 예외 상황, 데이터 정합성을 함께 고려하려고 합니다.
          </p>
          <p>
            팀 프로젝트에서 상품 도메인을 담당하며 관리자 상품 관리, 이미지 업로드/삭제,
            리뷰 중복 검증, 상품 상태에 따른 버튼 제어 기능을 구현했습니다.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skill-grid">
            <div className="card">
              <h3>Backend</h3>
              <p>Java, Spring Boot, Spring MVC, JPA, REST API, Session 기반 인증</p>
            </div>
            <div className="card">
              <h3>Frontend</h3>
              <p>JavaScript, React, Axios, HTML, CSS</p>
            </div>
            <div className="card">
              <h3>Database</h3>
              <p>Oracle, SQL</p>
            </div>
            <div className="card">
              <h3>Tools</h3>
              <p>Git, GitHub, VS Code, Postman, Docker</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Project</h2>
          <div className="project-card">
            <p className="badge">Main Project</p>
            <h3>3H_FURNITURE | 가구 판매 웹 서비스</h3>
            <p>
              사용자가 가구 상품을 조회·구매하고, 관리자가 상품을 등록·수정·삭제할 수 있는
              가구 판매 웹 서비스입니다.
            </p>

            <div className="project-info">
              <p><strong>기간</strong> 2026.04.21 ~ 2026.06.05</p>
              <p><strong>인원</strong> 5인 팀 프로젝트</p>
              <p><strong>역할</strong> 상품 도메인 담당</p>
              <p><strong>기술</strong> Java, Spring Boot, React, Oracle, JPA, GitHub</p>
            </div>

            <h4>주요 구현 기능</h4>
            <ul>
              <li>일반 사용자 상품 목록/상세 조회 구현</li>
              <li>카테고리 필터, 정렬, 페이지네이션 구현</li>
              <li>관리자 상품 등록/수정/삭제 구현</li>
              <li>상품 이미지 업로드/삭제 구현</li>
              <li>리뷰 작성 조건 검증 및 평균 평점 조회 구현</li>
              <li>회원 ID와 상품 ID 기반 리뷰 중복 작성 방지 구현</li>
              <li>북마크 토글 기능 구현</li>
              <li>상품 재고 및 판매 상태에 따른 구매/장바구니 버튼 제어 구현</li>
            </ul>

            <div className="link-row">
              <a href="https://github.com/alphaengneering02-dev/3H_Furniture" target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Problem Solving</h2>

          <div className="problem-card">
            <h3>01. 상품 이미지 삭제 시 물리 파일이 남는 문제 해결</h3>
            <p>
              상품 이미지 삭제 시 DB 데이터는 삭제되었지만 서버에 저장된 물리 이미지 파일이
              그대로 남는 문제가 있었습니다.
            </p>
            <p>
              이미지 URL을 기준으로 실제 파일 경로를 계산하고, DB 이미지 데이터 삭제와 물리
              파일 삭제 로직을 분리하여 함께 처리했습니다.
            </p>
            <p>
              이를 통해 상품 이미지 삭제 시 DB 데이터와 서버의 물리 파일이 함께 삭제되도록
              개선했습니다.
            </p>
          </div>

          <div className="problem-card">
            <h3>02. 동일 상품 리뷰 중복 작성 방지</h3>
            <p>
              사용자가 같은 상품에 여러 리뷰를 작성할 수 있어 평균 평점과 리뷰 데이터의
              신뢰성이 낮아질 수 있는 문제가 있었습니다.
            </p>
            <p>
              회원 ID와 상품 ID 조합을 기준으로 기존 리뷰 존재 여부를 확인하고, 이미 리뷰가
              존재하는 경우 추가 작성이 불가능하도록 검증 로직을 적용했습니다.
            </p>
            <p>
              이를 통해 동일 사용자의 중복 리뷰 작성을 제한하고 리뷰 데이터의 신뢰성을
              높였습니다.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>
          <div className="card">
            <h3>휴먼IT | 디지털컨버전스 중심 데이터 처리 SW 개발자 양성 과정</h3>
            <p>2025.12.16 ~ 2026.06.15</p>
            <p>
              Java, Spring Boot, React, Oracle 기반 웹 개발 과정 수료 예정.
              REST API 설계, 데이터베이스 연동, 프론트엔드 화면 구현, GitHub 협업을 경험했습니다.
            </p>
          </div>
        </section>

        <section className="section contact">
          <h2>Contact</h2>
          <p>Email: sdolikeim@gmail.com</p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/alphaengneering02-dev" target="_blank" rel="noreferrer">
              https://github.com/alphaengneering02-dev
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App