import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="badge hero-badge">Backend / Full-stack Developer</p>
          <h1>Java/Spring Boot 백엔드 개발자</h1>
          <p className="hero-text">
            Java와 Spring Boot를 중심으로 REST API, 데이터 흐름, 예외 처리를 학습하며
            사용자가 실제로 확인할 수 있는 기능을 끝까지 구현하려는 백엔드 개발자입니다.
          </p>

          <div className="hero-buttons">
            <a href="https://github.com/sdolikeim" target="_blank" rel="noreferrer">
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
            기능을 구현한 뒤에는 화면 동작뿐 아니라 DB 저장 결과, 사용자 흐름,
            예외 상황까지 함께 확인하려고 합니다. 부족한 부분은 미니 프로젝트로 따로 실습하며
            백엔드 API, 프론트엔드 연동, Servlet/JSP 구조, Linux 명령어, Docker 및 Kubernetes 실행 환경까지 경험을 넓혀가고 있습니다.
          </p>
          <p>
            기능을 구현한 뒤에는 화면 동작뿐 아니라 DB 저장 결과, 사용자 흐름,
            예외 상황까지 함께 확인하려고 합니다. 부족한 부분은 미니 프로젝트로 따로 실습하며
            백엔드 API, 프론트엔드 연동, Docker 및 Kubernetes 실행 환경까지 경험을 넓혀가고 있습니다.
          </p>
        </section>

        <section className="section">
          <h2>My Values</h2>

          <div className="value-grid">
            <div className="card">
              <h3>흐름을 놓치지 않는 꼼꼼함</h3>
              <p>
                기능이 한 화면에서 동작하는 것만 확인하지 않고, 사용자가 다음에 어떤 화면에서
                결과를 확인하는지까지 함께 고려하려고 합니다.
              </p>
            </div>

            <div className="card">
              <h3>데이터까지 확인하는 습관</h3>
              <p>
                화면에 보이는 결과뿐 아니라 DB 저장 상태, 삭제 처리, 상태 변경처럼
                기능 뒤에서 이어지는 데이터 흐름도 함께 확인합니다.
              </p>
            </div>

            <div className="card">
              <h3>부족함을 실습으로 보완하는 태도</h3>
              <p>
                팀 프로젝트에서 부족하다고 느낀 부분은 작은 실습 프로젝트로 다시 만들어보며
                개념과 흐름을 정리하려고 합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skill-grid">
            <div className="card">
            <h3>Backend</h3>
            <p>Java, Spring Boot, Spring MVC, JPA, Servlet, JSP, MyBatis, REST API, Session 기반 인증</p>
            </div>

            <div className="card">
              <h3>Frontend</h3>
              <p>JavaScript, React, Axios, HTML, CSS</p>
            </div>

            <div className="card">
              <h3>Database</h3>
              <p>Oracle, PostgreSQL, SQL</p>
            </div>

            <div className="card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Eclipse, Postman, Thunder Client, Docker, Docker Compose, Kubernetes, Linux/Ubuntu</p>
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
              상품 조회, 관리자 상품 관리, 이미지 업로드/삭제, 리뷰 검증, 북마크,
              상담 문의/답변 기능을 구현했습니다.
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
                상품 이미지 등록 및 삭제 기능을 구현했습니다. 이미지 삭제 시 DB 데이터뿐 아니라
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
              카테고리 조건, 판매상태 조건, 정렬 조건, 페이지 정보를 함께 처리하여
              조건에 맞는 상품 목록을 조회할 수 있도록 구성했습니다.
            </p>
            <ul>
              <li>상품 목록 조회 API와 React 화면 연동</li>
              <li>카테고리별 상품 필터링 처리</li>
              <li>판매상태 조건에 따른 상품 조회 처리</li>
              <li>정렬 조건 처리</li>
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
              상품 등록 및 수정 과정에서 상품 이미지를 함께 관리할 수 있도록
              이미지 업로드와 삭제 기능을 구현했습니다. 이미지 삭제 시에는 DB 데이터뿐 아니라
              서버에 저장된 실제 파일까지 함께 삭제되도록 처리했습니다.
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
              리뷰의 경우 동일 사용자가 같은 상품에 여러 번 리뷰를 작성하지 못하도록
              검증 로직을 적용했습니다.
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
              사용자가 쇼핑몰 이용 중 궁금한 내용을 상담창을 통해 남기고,
              관리자가 관리자 페이지에서 문의를 확인한 뒤 답변을 등록할 수 있는
              상담 문의 기능을 구현했습니다.
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
              <a href="/images/product-list.JPG" target="_blank" rel="noreferrer">
                <img src="/images/product-list.JPG" alt="상품 목록 화면" />
              </a>
              <div>
                <h3>상품 목록</h3>
                <p>
                  카테고리 필터, 판매상태 필터, 정렬, 페이지네이션을 적용하여 상품을 조회할 수 있는 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <a href="/images/product-detail.JPG" target="_blank" rel="noreferrer">
                <img src="/images/product-detail.JPG" alt="상품 상세 화면" />
              </a>
              <div>
                <h3>상품 상세</h3>
                <p>
                  상품 이미지, 옵션, 재고, 판매상태, 리뷰, 북마크, 구매/장바구니 버튼 상태를 확인할 수 있는 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <a href="/images/admin-product-list.JPG" target="_blank" rel="noreferrer">
                <img src="/images/admin-product-list.JPG" alt="관리자 상품 목록 화면" />
              </a>
              <div>
                <h3>관리자 상품 관리</h3>
                <p>
                  상품 목록 조회, 필터링, 수정, 삭제, 다중 선택 삭제를 처리할 수 있는 관리자 상품 관리 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <a href="/images/product-update.JPG" target="_blank" rel="noreferrer">
                <img src="/images/product-update.JPG" alt="상품 수정 화면" />
              </a>
              <div>
                <h3>상품 수정</h3>
                <p>
                  기존 상품 정보와 이미지를 조회하고, 대표 이미지와 상세 이미지를 수정할 수 있도록 구현한 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <a href="/images/bookmark-list.JPG" target="_blank" rel="noreferrer">
                <img src="/images/bookmark-list.JPG" alt="북마크 목록 화면" />
              </a>
              <div>
                <h3>북마크 목록</h3>
                <p>
                  사용자가 북마크한 상품을 마이페이지에서 확인하고 상품 상세로 이동할 수 있도록 구현한 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <a href="/images/review-management.JPG" target="_blank" rel="noreferrer">
                <img src="/images/review-management.JPG" alt="리뷰 관리 화면" />
              </a>
              <div>
                <h3>리뷰 관리</h3>
                <p>
                  사용자가 작성한 리뷰를 확인하고 수정/삭제할 수 있도록 구현한 마이페이지 리뷰 관리 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <a href="/images/article-widget.JPG" target="_blank" rel="noreferrer">
                <img src="/images/article-widget.JPG" alt="상담 문의창 화면" />
              </a>
              <div>
                <h3>상담 문의창</h3>
                <p>
                  사용자가 상담 내용을 입력하고, 본인의 상담 내역과 답변 상태를 확인할 수 있는 DB 기반 상담 UI입니다.
                </p>
              </div>
            </div>

            <div className="image-card">
              <a href="/images/admin-article-answer.jpg" target="_blank" rel="noreferrer">
                <img src="/images/admin-article-answer.jpg" alt="관리자 상담 답변 화면" />
              </a>
              <div>
                <h3>관리자 상담 답변</h3>
                <p>
                  관리자가 상담 문의를 확인하고 답변을 등록하면 답변 상태가 변경되도록 구현한 화면입니다.
                </p>
              </div>
            </div>

            <div className="image-card image-card-wide">
              <a href="/images/member-article-answer.JPG" target="_blank" rel="noreferrer">
                <img src="/images/member-article-answer.JPG" alt="회원 상담 답변 확인 화면" />
              </a>
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
            <h3>01. 상품 이미지 삭제 시 물리적 파일이 남는 문제 해결</h3>
            <p>
              상품 이미지 삭제 기능 구현 중 DB에 저장된 이미지 데이터는 삭제되었지만,
              서버에 저장된 실제 이미지 파일은 그대로 남는 문제가 있었습니다.
            </p>
            <p>
              원인은 DB 이미지 정보 삭제와 파일 시스템의 실제 파일 삭제 처리가 함께 이루어지지
              않았기 때문이었습니다.
            </p>
            <p>
              이를 해결하기 위해 이미지 URL을 기준으로 실제 파일 경로를 계산하고,
              DB 삭제 로직과 물리적 파일 삭제 로직을 분리하여 함께 처리했습니다.
            </p>
            <p>
              그 결과 상품 이미지 삭제 시 DB 데이터와 서버의 물리적 파일이 함께 삭제되도록 개선하여
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
              실시간 채팅 구조는 아니지만, 사용자가 쇼핑몰 이용 중 빠르게 문의를 남기고
              답변 상태를 확인할 수 있는 상담 UI가 필요했습니다.
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

        <section className="section study-section">
          <div className="section-head">
            <p className="section-kicker">Mini Practice Project</p>
            <h2>WebSocket 상담 알림 실습</h2>
            <p>
              팀 프로젝트에서 구현한 DB 기반 상담 문의/답변 흐름을 확장해보기 위해
              별도로 진행한 WebSocket 알림 미니 실습 프로젝트입니다.
            </p>
          </div>

          <div className="study-showcase">
            <div className="study-main">
              <div className="study-label-row">
                <span>React</span>
                <span>Spring Boot</span>
                <span>Oracle</span>
                <span>WebSocket</span>
              </div>

              <h3>상담 등록과 답변 완료 알림 흐름 구현</h3>

              <p>
                사용자가 상담 문의를 등록하면 Oracle DB에 데이터가 저장되고,
                관리자 화면에는 WebSocket 알림이 전송되도록 구현했습니다.
                관리자가 답변을 등록하면 상담 상태가 <strong> WAITING </strong>에서
                <strong> ANSWERED </strong>로 변경되며, 사용자 화면에 답변 완료 알림이 표시됩니다.
              </p>

              <div className="study-process">
                <div>
                  <strong>01</strong>
                  <span>문의 등록</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>DB 저장</span>
                </div>
                <div>
                  <strong>03</strong>
                  <span>관리자 알림</span>
                </div>
                <div>
                  <strong>04</strong>
                  <span>답변 등록</span>
                </div>
                <div>
                  <strong>05</strong>
                  <span>사용자 알림</span>
                </div>
              </div>

              <div className="study-point-box">
                <p>
                  <strong>학습 포인트</strong>
                  HTTP 요청/응답 방식과 WebSocket 기반 연결 유지 방식의 차이를 비교하기 위해 진행했습니다.
                  완성형 서비스보다는 실시간 알림 흐름을 이해하기 위한 미니 실습 프로젝트입니다.
                </p>
              </div>

              <a
                className="study-link"
                href="https://github.com/sdolikeim/socket-notification-practice"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </div>

            <div className="study-preview-area">
              <div className="study-preview main-preview">
                <a href="/images/websocket_practice.JPG" target="_blank" rel="noreferrer">
                  <img src="/images/websocket_practice.JPG" alt="WebSocket 상담 알림 실습 기본 화면" />
                </a>
                <div className="study-caption">
                  <strong>상담 등록 전 화면</strong>
                  <span>사용자 문의 등록과 관리자 상담 관리 화면 구성</span>
                </div>
              </div>

              <div className="study-preview">
                <a href="/images/websocket_practice_answer.JPG" target="_blank" rel="noreferrer">
                  <img src="/images/websocket_practice_answer.JPG" alt="WebSocket 상담 답변 완료 화면" />
                </a>
                <div className="study-caption">
                  <strong>답변 완료 화면</strong>
                  <span>답변 등록 후 ANSWERED 상태와 사용자 알림 표시</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section study-section">
          <div className="section-head">
            <p className="section-kicker">Mini Full-stack Project</p>
            <h2>Plant Watering Tracker</h2>
            <p>
              팀 프로젝트 이후 Spring Boot, Docker Compose, Kubernetes 사용 경험을 보완하기 위해 진행한
              식물 물주기 관리 미니 풀스택 프로젝트입니다.
            </p>
          </div>

          <div className="study-showcase">
            <div className="study-main">
              <div className="study-label-row">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>REST API</span>
              </div>

              <h3>식물 등록부터 다음 물주기 계산까지 이어지는 관리 흐름 구현</h3>

              <p>
                사용자가 식물 이름, 물주기 주기, 마지막 물 준 날짜를 입력하면
                React 화면에서 Spring Boot API로 데이터를 전송하고, PostgreSQL에 저장되도록 구현했습니다.
                백엔드에서는 마지막 물 준 날짜와 물주기 주기를 기준으로 다음 물 주는 날짜를 계산하고,
                오늘 날짜와 비교하여 <strong> OK </strong>, <strong> DUE_TODAY </strong>,
                <strong> OVERDUE </strong> 상태를 반환하도록 구성했습니다.
              </p>

              <div className="study-process">
                <div>
                  <strong>01</strong>
                  <span>식물 등록</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>API 요청</span>
                </div>
                <div>
                  <strong>03</strong>
                  <span>DB 저장</span>
                </div>
                <div>
                  <strong>04</strong>
                  <span>날짜 계산</span>
                </div>
                <div>
                  <strong>05</strong>
                  <span>K8s 실행</span>
                </div>
              </div>

              <div className="study-point-box">
                <p>
                  <strong>구현 포인트</strong>
                  단순 CRUD에서 끝내지 않고, 날짜 계산 로직과 상태 판단 로직을 백엔드에서 처리했습니다.
                  Docker Compose로 Spring Boot 백엔드와 PostgreSQL 실행 환경을 구성했고,
                  추가로 Kubernetes Deployment와 Service를 작성해 백엔드와 DB를 로컬 Kubernetes 환경에서 실행해보았습니다.
                  React 화면에서 Kubernetes NodePort로 노출한 백엔드 API에 요청을 보내 식물 등록과 목록 조회가 정상 동작하는 것을 확인했습니다.
                </p>
              </div>

              <ul>
                <li>Spring Boot 기반 식물 CRUD REST API 구현</li>
                <li>React와 Axios를 사용한 API 연동</li>
                <li>PostgreSQL을 사용한 식물 데이터 저장</li>
                <li>마지막 물 준 날짜 기준 다음 물주기 날짜 계산</li>
                <li>Docker Compose로 백엔드와 DB 컨테이너 실행</li>
                <li>Kubernetes Deployment와 Service로 백엔드/DB 실행 실습</li>
                <li>NodePort를 통해 React 화면에서 Kubernetes 백엔드 API 요청 확인</li>
              </ul>

              <div className="link-row">
                <a
                  href="https://github.com/sdolikeim/Plant_Watering_Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="study-preview-area">
              <div className="study-preview main-preview">
                <a href="/images/WaterTracker.JPG" target="_blank" rel="noreferrer">
                  <img
                    src="/images/WaterTracker.JPG"
                    alt="Plant Watering Tracker 메인 화면"
                  />
                </a>
                <div className="study-caption">
                  <strong>식물 물주기 관리 화면</strong>
                  <span>
                    식물 등록, 목록 조회, 다음 물 주는 날짜 계산, 물주기 상태 표시를 구현한 React 화면입니다.
                  </span>
                </div>
              </div>

              <div className="study-preview">
                <a href="/images/DockerCompose.JPG" target="_blank" rel="noreferrer">
                  <img
                    src="/images/DockerCompose.JPG"
                    alt="Docker Compose 실행 화면"
                  />
                </a>
                <div className="study-caption">
                  <strong>Docker Compose 실행 화면</strong>
                  <span>
                    PostgreSQL 컨테이너와 Spring Boot 백엔드 컨테이너를 함께 실행한 화면입니다.
                  </span>
                </div>
              </div>

              <div className="study-preview">
                <a href="/images/KubernetesPractice.JPG" target="_blank" rel="noreferrer">
                  <img
                    src="/images/KubernetesPractice.JPG"
                    alt="Kubernetes 실행 확인 화면"
                  />
                </a>
                <div className="study-caption">
                  <strong>Kubernetes 실행 확인</strong>
                  <span>
                    Spring Boot 백엔드와 PostgreSQL을 Kubernetes Deployment와 Service로 실행하고,
                    NodePort를 통해 백엔드 API 접근을 확인한 화면입니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section study-section">
        <div className="section-head">
          <p className="section-kicker">Mini Backend Project</p>
          <h2>Servlet MyBatis Memo Board</h2>
          <p>
            Spring Boot를 사용하기 전, Servlet/JSP 환경에서 요청과 응답 흐름을 직접 구성하고
            MyBatis Mapper XML을 사용해 Oracle DB와 연동한 메모 게시판 미니 프로젝트입니다.
          </p>
        </div>

        <div className="study-showcase">
          <div className="study-main">
            <div className="study-label-row">
              <span>Java 8</span>
              <span>Servlet</span>
              <span>JSP</span>
              <span>MyBatis</span>
              <span>Oracle</span>
              <span>Tomcat</span>
            </div>

            <h3>Servlet/JSP 기반 CRUD와 이미지 첨부 흐름 구현</h3>

            <p>
              사용자가 메모 제목, 작성자, 내용을 입력하면 Servlet Controller가 요청을 받고,
              Service와 DAO를 거쳐 MyBatis Mapper XML의 SQL이 실행되도록 구현했습니다.
              Oracle DB에 저장된 메모 목록을 JSP 화면에서 조회하고, 등록·수정·삭제 기능과
              이미지 첨부 및 이미지 수정 기능을 함께 구현했습니다.
            </p>

            <div className="study-process">
              <div>
                <strong>01</strong>
                <span>JSP 요청</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Servlet 처리</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Service 분리</span>
              </div>
              <div>
                <strong>04</strong>
                <span>MyBatis SQL</span>
              </div>
              <div>
                <strong>05</strong>
                <span>Oracle 저장</span>
              </div>
            </div>

            <div className="study-point-box">
              <p>
                <strong>구현 포인트</strong>
                Spring Boot의 자동 설정에 의존하지 않고, Servlet/JSP에서 요청 파라미터를 직접 받고
                Controller, Service, DAO, DTO, Mapper 계층으로 역할을 분리했습니다.
                이미지 파일은 서버 upload 디렉터리에 저장하고, DB에는 이미지 파일명을 저장해
                JSP 화면에서 첨부 이미지를 조회할 수 있도록 처리했습니다.
              </p>
            </div>

            <ul>
              <li>Servlet Controller 기반 메모 등록, 조회, 수정, 삭제 구현</li>
              <li>JSP 화면에서 등록 form, 목록 출력, 수정 form 토글 처리</li>
              <li>MyBatis Mapper XML을 사용해 SQL 분리</li>
              <li>Oracle DB 테이블과 시퀀스를 사용한 데이터 저장</li>
              <li>Servlet Multipart 기능을 사용한 이미지 업로드 구현</li>
              <li>이미지 수정 시 기존 이미지 유지 또는 새 이미지로 교체 처리</li>
            </ul>

            <div className="link-row">
              <a
                href="https://github.com/sdolikeim/Servlet_Memo_Board"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>

          <div className="study-preview-area">
            <div className="study-preview main-preview">
              <a href="/images/Servlet_Memo_Board.JPG" target="_blank" rel="noreferrer">
                <img
                  src="/images/Servlet_Memo_Board.JPG"
                  alt="Servlet MyBatis Memo Board 화면"
                />
              </a>
              <div className="study-caption">
                <strong>메모 게시판 실행 화면</strong>
                <span>
                  Servlet/JSP, MyBatis, Oracle을 사용해 메모 등록, 조회, 수정, 삭제와 이미지 첨부를 구현한 화면입니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section study-section">
        <div className="section-head">
          <p className="section-kicker">Linux Practice</p>
          <h2>Linux Log Analyzer Practice</h2>
          <p>
            Docker Ubuntu 컨테이너를 사용해 Linux 실습 환경을 구성하고,
            서버 로그 분석 상황을 가정해 기본 명령어와 Shell Script 흐름을 연습한 미니 실습입니다.
          </p>
        </div>

        <div className="study-showcase">
          <div className="study-main">
            <div className="study-label-row">
              <span>Linux</span>
              <span>Ubuntu</span>
              <span>Docker</span>
              <span>Shell</span>
              <span>grep</span>
              <span>chmod</span>
            </div>

            <h3>Docker Ubuntu 환경에서 서버 로그 검색과 분석 명령어 실습</h3>

            <p>
              개인 PC에 직접 Linux를 설치하지 않고 Docker Ubuntu 컨테이너를 실행해 실습 환경을 구성했습니다.
              컨테이너 내부에서 로그 파일을 만들고, <strong>grep</strong>, <strong>wc</strong>,
              <strong>find</strong>, <strong>chmod</strong> 같은 명령어를 사용해 ERROR/WARN 로그를 검색하고
              개수를 확인하는 흐름을 연습했습니다.
            </p>

            <div className="study-process">
              <div>
                <strong>01</strong>
                <span>Ubuntu 실행</span>
              </div>
              <div>
                <strong>02</strong>
                <span>로그 생성</span>
              </div>
              <div>
                <strong>03</strong>
                <span>grep 검색</span>
              </div>
              <div>
                <strong>04</strong>
                <span>개수 확인</span>
              </div>
              <div>
                <strong>05</strong>
                <span>스크립트화</span>
              </div>
            </div>

            <div className="study-point-box">
              <p>
                <strong>학습 포인트</strong>
                백엔드 개발자가 서버 로그를 확인하는 상황을 가정하고,
                Linux 기본 명령어와 파이프라인 사용법을 익혔습니다.
                단순 명령어 입력에서 끝내지 않고 반복적으로 사용할 수 있는 로그 분석 스크립트로 정리했습니다.
              </p>
            </div>

            <ul>
              <li>Docker Ubuntu 22.04 컨테이너 기반 Linux 실습 환경 구성</li>
              <li>pwd, ls, cat 등 기본 파일 탐색 명령어 실습</li>
              <li>grep을 사용한 ERROR/WARN 로그 검색</li>
              <li>wc -l을 사용한 로그 개수 확인</li>
              <li>chmod +x를 사용한 Shell Script 실행 권한 부여</li>
              <li>서버 로그 분석 상황을 가정한 미니 실습 정리</li>
            </ul>
          </div>

          <div className="study-preview-area">
            <div className="study-preview main-preview">
              <a href="/images/DockerUbuntu.JPG" target="_blank" rel="noreferrer">
                <img
                  src="/images/DockerUbuntu.JPG"
                  alt="Docker Ubuntu 컨테이너 실행 화면"
                />
              </a>
              <div className="study-caption">
                <strong>Docker Ubuntu 실행</strong>
                <span>
                  Docker로 Ubuntu 22.04 컨테이너를 실행하고 Linux 환경을 확인한 화면입니다.
                </span>
              </div>
            </div>

            <div className="study-preview">
              <a href="/images/UbuntuLinuxGrep.JPG" target="_blank" rel="noreferrer">
                <img
                  src="/images/UbuntuLinuxGrep.JPG"
                  alt="Linux grep 로그 분석 화면"
                />
              </a>
              <div className="study-caption">
                <strong>로그 분석 명령어 실습</strong>
                <span>
                  app.log 파일에서 grep으로 ERROR 로그를 검색하고 서버 로그 분석 흐름을 확인한 화면입니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


        <section className="section">
          <h2>Resume Statement</h2>

          <div className="statement-card">
            <p>
              프로젝트를 진행하며 가장 많이 생각했던 부분은 “사용자가 이 기능을 사용한 다음에는
              무엇을 확인하게 될까?”였습니다. 북마크 기능은 버튼을 누르는 것에서 끝나는 것이 아니라,
              사용자가 마이페이지에서 북마크한 상품을 다시 확인하고 상품 상세로 이동할 수 있어야 했습니다.
            </p>

            <p>
              상담 기능도 문의 등록에서 끝나는 것이 아니라, 관리자가 답변을 등록하고 사용자가 다시
              상담창에서 답변 상태와 내용을 확인할 수 있도록 구성했습니다. 기능 구현 후에는 화면 동작,
              DB 저장 결과, 상태 변경 흐름을 함께 확인하며 기능이 끊기지 않도록 보완했습니다.
            </p>

            <p>
              아직 실무 경험은 부족하지만, 맡은 기능을 그냥 넘기지 않고 끝까지 실행해보며 이해하려고 노력합니다.
              팀 프로젝트에서는 사용자 흐름과 예외 상황을 중심으로 기능을 구현했고, 개인 미니 프로젝트에서는
              Spring Boot API, React 연동, Servlet/JSP와 MyBatis 구조, Linux 로그 분석, Docker Compose와 Kubernetes 실행 환경까지
              직접 구성하며 부족한 부분을 보완했습니다. 앞으로도 기능의 정상 동작뿐 아니라 데이터 흐름과 실행 환경까지
              함께 확인하는 백엔드 개발자로 성장하고 싶습니다.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>

          <div className="card">
            <h3>휴먼IT | 디지털컨버전스 중심 데이터 처리 SW 개발자 양성 과정</h3>
            <p>2025.12.16 ~ 2026.06.15</p>
            <p>
              Java, Spring Boot, React, Oracle 기반 웹 개발 과정 수료했습니다.
              REST API 설계, 데이터베이스 연동, 프론트엔드 화면 구현, GitHub 협업을 경험했습니다.
            </p>
          </div>
        </section>

        <section className="section contact">
          <h2>Contact</h2>

          <p>Email: sdolikeim@gmail.com</p>

          <p>
            GitHub:{' '}
            <a href="https://github.com/sdolikeim" target="_blank" rel="noreferrer">
              https://github.com/sdolikeim
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