
const Home = () => {
  return (
    <div className="doc-card">
      <h1>Chào mừng đến với Tavitax <span>Docs</span></h1>
      <p className="subtitle">Hệ thống tài liệu nội bộ dành cho toàn thể nhân sự Tavitax Group.</p>
      
      <div className="alert">
        <div className="alert-title">Mục tiêu</div>
        <p>Tavitax Docs cung cấp các hướng dẫn từ cơ bản đến nâng cao về quy trình làm việc, ứng dụng phần mềm (Lark Suite) và sự hỗ trợ của các Trợ lý ảo AI (Tavibot) nhằm hướng tới một môi trường làm việc thông minh và tự động hóa.</p>
      </div>

      <h2>Bắt đầu từ đâu?</h2>
      <div className="info-grid">
        <div className="info-card">
          <h4>1. Hướng dẫn dùng Lark</h4>
          <p>Nếu bạn là nhân sự mới, hãy bắt đầu bằng việc làm quen với Lark Messenger và Lark Base.</p>
        </div>
        <div className="info-card">
          <h4>2. Chọn Phòng ban</h4>
          <p>Click vào mục phòng ban của bạn ở thanh menu bên trái để xem các quy trình làm việc chuyên biệt.</p>
        </div>
        <div className="info-card">
          <h4>3. Làm quen với AI</h4>
          <p>Học cách tương tác với Tavibot để tự động hóa các tác vụ lặp đi lặp lại hàng ngày.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
