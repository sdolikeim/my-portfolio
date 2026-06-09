import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="badge hero-badge">Backend / Full-stack Developer</p>
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
            Java/Spring Boot 기반으로 상품 조회, 상품 관리, 이미지 업로드/삭제, 리뷰 검증,
            북마크, 페이지네이션, DB 기반 상담 문의 기능을 구현한 신입 백엔드 개발자입니다.
          </p>
          <p>
            기능 구현에서 끝나지 않고 사용자의 실제 이용 흐름, 예외 상황, 데이터 정합성을 함께
            고려하려고 합니다. 팀 프로젝트에서는 상품 도메인을 중심으로 관리자 상품 관리,
            리뷰/북마크, 상담 문의/답변 흐름을 구현했습니다.
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
          <h2>Main Project</h2>

          <div className="project-card">
            <p className="badge">Team Project</p>
            <h3>3H_FURNITURE | 가구 판매 웹 서비스</h3>

            <p>
              3H_FURNITURE는 사용자가 가구 상품을 조회·구매하고, 관리자가 상품 정보를
              등록·수정·삭제할 수 있는 가구 판매 웹 서비스입니다. 저는 상품 도메인을 담당하여
              상품 조회, 관리자 상품 관리, 이미지 업로드/삭제, 리뷰 검증, 북마크, 상담 문의/답변
              기능을 구현했습니다.
            </p>

            <div className="project-info">
              <p><strong>기간</strong> 2026.04.21 ~ 2026.06.05</p>
              <p><strong>인원</strong> 5인 팀 프로젝트</p>
              <p><strong>역할</strong> 상품 도메인 담당</p>
              <p><strong>기술</strong> Java, Spring Boot, React, Oracle, JPA, GitHub</p>
            </div>

            <h4>프로젝트 주요 기능</h4>
            <ul>
              <li>일반 사용자 상품 목록/상세 조회</li>
              <li>카테고리 필터, 판매상태 필터, 정렬, 페이지네이션</li>
              <li>관리자 상품 등록/수정/삭제 및 다중 선택 삭제</li>
              <li>상품 이미지 업로드/삭제</li>
              <li>리뷰 작성 조건 검증 및 평균 평점 조회</li>
              <li>북마크 토글 및 마이페이지 북마크 목록 조회</li>
              <li>상품 재고 및 판매 상태에 따른 구매/장바구니 버튼 제어</li>
              <li>DB 기반 상담 문의 등록, 관리자 답변, 회원 답변 확인</li>
            </ul>

            <div className="link-row">
              <a href="https://github.com/alphaengneering02-dev/3H_Furniture" target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>My Role</h2>

          <div className="role-grid">
            <div className="card">
              <h3>상품 조회</h3>
              <p>
                사용자가 원하는 상품을 쉽게 탐색할 수 있도록 상품 목록/상세 조회,
                카테고리 필터, 판매상태 필터, 정렬, 페이지네이션 기능을 구현했습니다.
              </p>
            </div>

            <div className="card">
              <h3>관리자 상품 관리</h3>
              <p>
                관리자가 상품 정보를 직접 관리할 수 있도록 상품 등록, 수정, 삭제,
                다중 선택 삭제 기능을 구현했습니다.
              </p>
            </div>

            <div className="card">
              <h3>이미지 업로드/삭제</h3>
              <p>
                상품 이미지 등록 및 삭제 기능을 구현했습니다. 삭제 시 DB 데이터뿐 아니라
                서버에 저장된 물리 파일까지 함께 정리되도록 처리했습니다.
              </p>
            </div>

            <div className="card">
              <h3>리뷰/북마크</h3>
              <p>
                리뷰 작성 조건 검증, 평균 평점 조회, 동일 상품 리뷰 중복 작성 방지,
                북마크 토글 및 마이페이지 북마크 목록 기능을 구현했습니다.
              </p>
            </div>

            <div className="card">
              <h3>상담 문의/답변</h3>
              <p>
                사용자가 상담창에서 문의를 등록하고 답변 상태를 확인할 수 있도록
                DB 기반 상담 문의 기능을 구현했습니다. 관리자는 상담 관리 화면에서
                문의를 확인하고 답변을 등록할 수 있도록 처리했습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Feature Details</h2>

          <div className="detail-card">
            <h3>01. 상품 목록 조회 / 필터 / 정렬 / 페이지네이션</h3>
            <p>
              사용자가 원하는 상품을 빠르게 찾을 수 있도록 상품 목록 조회 기능을 구현했습니다.
              카테고리 조건, 판매상태 조건, 정렬 조건, 페이지 정보를 함께 처리하여 조건에 맞는
              상품 목록을 조회할 수 있도록 구성했습니다.
            </p>
            <ul>
              <li>상품 목록 조회 API와 React 화면 연동</li>
              <li>카테고리별 상품 필터링 처리</li>
              <li>판매상태 조건에 따른 상품 조회 처리</li>
              <li>기본순, 가격순 등 정렬 조건 처리</li>
              <li>페이지네이션 적용으로 한 번에 표시되는 상품 수 제어</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>02. 관리자 상품 등록 / 수정 / 삭제</h3>
            <p>
              관리자가 상품 정보를 직접 관리할 수 있도록 상품 등록, 수정, 삭제 기능을 구현했습니다.
              상품명, 가격, 카테고리, 재고, 판매 상태 등의 정보를 입력받아 DB에 저장하고,
              수정 시 기존 상품 정보를 불러와 변경할 수 있도록 처리했습니다.
            </p>
            <ul>
              <li>관리자 상품 등록 기능 구현</li>
              <li>상품 수정 시 기존 데이터 조회 및 수정 처리</li>
              <li>상품 개별 삭제 기능 구현</li>
              <li>관리자 상품 다중 선택 삭제 기능 구현</li>
              <li>선택된 상품 목록을 별도 영역에 표시하여 삭제 대상 확인 가능하도록 개선</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>03. 이미지 업로드 / 삭제</h3>
            <p>
              상품 등록 및 수정 과정에서 상품 이미지를 함께 관리할 수 있도록 이미지 업로드와 삭제
              기능을 구현했습니다. 이미지 삭제 시에는 DB 데이터뿐 아니라 서버에 저장된 실제 파일까지
              함께 삭제되도록 처리했습니다.
            </p>
            <ul>
              <li>상품 대표 이미지 및 상세 이미지 업로드 기능 구현</li>
              <li>이미지 URL 저장 및 조회 처리</li>
              <li>상품 수정 화면에서 기존 이미지 조회 처리</li>
              <li>이미지 삭제 시 DB 데이터 삭제 처리</li>
              <li>이미지 URL 기반 실제 파일 경로 계산 및 물리 파일 삭제 처리</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>04. 리뷰 검증 / 북마크</h3>
            <p>
              사용자가 상품에 리뷰를 작성하고 북마크할 수 있도록 관련 기능을 구현했습니다.
              리뷰의 경우 동일 사용자가 같은 상품에 여러 번 리뷰를 작성하지 못하도록 검증 로직을
              적용했습니다.
            </p>
            <ul>
              <li>리뷰 작성 조건 검증 구현</li>
              <li>회원 ID와 상품 ID 기반 리뷰 중복 작성 방지</li>
              <li>상품별 평균 평점 조회 구현</li>
              <li>마이페이지 리뷰 수정/삭제 기능 구현</li>
              <li>북마크 토글 및 마이페이지 북마크 목록 조회 구현</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>05. DB 기반 상담 문의 / 관리자 답변 기능</h3>
            <p>
              사용자가 쇼핑몰 이용 중 궁금한 내용을 상담창을 통해 남기고, 관리자가 관리자 페이지에서
              문의를 확인한 뒤 답변을 등록할 수 있는 상담 문의 기능을 구현했습니다.
            </p>
            <ul>
              <li>사용자 상담 문의 등록 기능 구현</li>
              <li>로그인 회원 기준 내 상담 내역 조회 기능 구현</li>
              <li>상품 상세 페이지에서는 상품 ID와 함께 상품 문의로 등록되도록 처리</li>
              <li>관리자 페이지에서 전체 상담 문의 목록 조회 기능 구현</li>
              <li>관리자 답변 등록 시 상담 상태를 WAITING에서 ANSWERED로 변경</li>
              <li>답변 완료 여부에 따라 사용자 상담창에서 관리자 답변 표시</li>
              <li>상담 문의 삭제 및 회원별 상담 내역 삭제 기능 구현</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Screenshots</h2>
          <p className="section-desc">
            상품 조회, 관리자 상품 관리, 리뷰/북마크, 상담 문의 기능을 중심으로 제가 구현한 주요 화면입니다.
          </p>

          <div className="image-grid">
            <div className="image-card">
              <img src="/images/product-list.JPG" alt="상품 목록 화면" />
              <div>
                <h3>상품 목록</h3>
                <p>
                  카테고리 필터, 판매상태 필터, 정렬, 페이지네이션을 적용하여 상품을 조회할 수 있는 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="/images/product-detail.JPG" alt="상품 상세 화면" />
              <div>
                <h3>상품 상세</h3>
                <p>
                  상품 이미지, 옵션, 재고, 판매상태, 리뷰, 북마크, 구매/장바구니 버튼 상태를 확인할 수 있는 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="/images/admin-product-list.JPG" alt="관리자 상품 목록 화면" />
              <div>
                <h3>관리자 상품 관리</h3>
                <p>
                  상품 목록 조회, 필터링, 수정, 삭제, 다중 선택 삭제를 처리할 수 있는 관리자 상품 관리 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="/images/product-update.JPG" alt="상품 수정 화면" />
              <div>
                <h3>상품 수정</h3>
                <p>
                  기존 상품 정보와 이미지를 조회하고, 대표 이미지와 상세 이미지를 수정할 수 있도록 구현한 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="/images/bookmark-list.JPG" alt="북마크 목록 화면" />
              <div>
                <h3>북마크 목록</h3>
                <p>
                  사용자가 북마크한 상품을 마이페이지에서 확인하고 상품 상세로 이동할 수 있도록 구현한 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="/images/review-management.JPG" alt="리뷰 관리 화면" />
              <div>
                <h3>리뷰 관리</h3>
                <p>
                  사용자가 작성한 리뷰를 확인하고 수정/삭제할 수 있도록 구현한 마이페이지 리뷰 관리 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="/images/article-widget.JPG" alt="상담 문의창 화면" />
              <div>
                <h3>상담 문의창</h3>
                <p>
                  사용자가 상담 내용을 입력하고, 본인의 상담 내역과 답변 상태를 확인할 수 있는 DB 기반 상담 UI입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <img src="/images/admin-article-answer.jpg" alt="관리자 상담 답변 화면" />
              <div>
                <h3>관리자 상담 답변</h3>
                <p>
                  관리자가 상담 문의를 확인하고 답변을 등록하면 답변 상태가 변경되도록 구현한 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card image-card-wide">
              <img src="/images/member-article-answer.JPG" alt="회원 상담 답변 확인 화면" />
              <div>
                <h3>회원 상담 답변 확인</h3>
                <p>
                  관리자가 등록한 답변을 사용자가 상담창에서 확인할 수 있도록 구현했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Problem Solving</h2>

          <div className="problem-card">
            <h3>01. 상품 이미지 삭제 시 물리 파일이 남는 문제 해결</h3>
            <p>
              상품 이미지 삭제 기능 구현 중 DB에 저장된 이미지 데이터는 삭제되었지만,
              서버에 저장된 실제 이미지 파일은 그대로 남는 문제가 있었습니다.
            </p>
            <p>
              원인은 DB 이미지 정보 삭제와 파일 시스템의 실제 파일 삭제 처리가 함께 이루어지지
              않았기 때문이었습니다.
            </p>
            <p>
              이를 해결하기 위해 이미지 URL을 기준으로 실제 파일 경로를 계산하고, DB 삭제 로직과
              물리 파일 삭제 로직을 분리하여 함께 처리했습니다.
            </p>
            <p>
              그 결과 상품 이미지 삭제 시 DB 데이터와 서버의 물리 파일이 함께 삭제되도록 개선하여
              불필요한 파일 누적을 방지했습니다.
            </p>
          </div>

          <div className="problem-card">
            <h3>02. 동일 상품 리뷰 중복 작성 방지</h3>
            <p>
              사용자가 같은 상품에 여러 리뷰를 작성할 수 있어 평균 평점과 리뷰 데이터의 신뢰성이
              낮아질 수 있는 문제가 있었습니다.
            </p>
            <p>
              리뷰 작성 요청 시 회원 ID와 상품 ID 조합으로 기존 리뷰 존재 여부를 확인하고,
              이미 리뷰가 존재하는 경우 추가 작성이 불가능하도록 검증 로직을 적용했습니다.
            </p>
            <p>
              이를 통해 동일 사용자의 중복 리뷰 작성을 제한하고, 평균 평점과 리뷰 데이터의
              신뢰성을 높였습니다.
            </p>
          </div>

          <div className="problem-card">
            <h3>03. DB 기반 상담 문의 흐름 구현</h3>
            <p>
              WebSocket을 사용한 실시간 채팅 구조는 아니지만, 사용자가 쇼핑몰 이용 중
              빠르게 문의를 남기고 답변 상태를 확인할 수 있는 상담 UI가 필요했습니다.
            </p>
            <p>
              상담 문의를 ARTICLE 테이블에 저장하고, 회원 ID와 상품 ID를 함께 관리하여
              일반 문의와 상품 문의를 구분할 수 있도록 처리했습니다.
            </p>
            <p>
              관리자가 답변을 등록하면 상담 상태를 WAITING에서 ANSWERED로 변경하고,
              답변 시간과 답변 내용을 저장하도록 구현했습니다.
            </p>
            <p>
              사용자는 상담창에서 본인의 상담 내역을 다시 조회하여 답변 완료 여부와
              관리자 답변 내용을 확인할 수 있도록 개선했습니다.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>

          <div className="card">
            <h3>휴먼IT | 디지털컨버전스 중심 데이터 처리 SW 개발자 양성 과정</h3>
            <p>2025.12.16 ~ 2026.06.15</p>
            <p>
              Java, Spring Boot, React, Oracle 기반 웹 개발 과정 수료 예정입니다.
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

          <p>
            Project Repository:{' '}
            <a href="https://github.com/alphaengneering02-dev/3H_Furniture" target="_blank" rel="noreferrer">
              https://github.com/alphaengneering02-dev/3H_Furniture
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App