import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="doc-card">
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '20px 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Chào mừng đến với Tavitax <span style={{ color: '#ca8a04' }}>Guidebook</span></h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Hệ thống tài liệu nội bộ và quy trình số hóa dành riêng cho toàn thể nhân sự Tavitax Group.
        </p>
      </div>
      
      <div className="alert" style={{ background: '#fefce8', borderLeft: '4px solid #ca8a04', padding: '20px' }}>
        <div className="alert-title" style={{ color: '#854d0e', fontSize: '1.1rem', marginBottom: '10px' }}>🎯 Tầm nhìn Không gian làm việc Số</div>
        <p style={{ margin: 0, color: '#3f3f46' }}>
          Tavitax Guidebook ra đời với mục tiêu đập bỏ mọi rào cản hành chính truyền thống. Chúng ta đang chuyển dịch từ việc "làm việc chăm chỉ" sang "làm việc thông minh" bằng cách ứng dụng toàn diện <strong>Lark Suite</strong> làm trung tâm và tận dụng sức mạnh của <strong>Trợ lý ảo AI (Tavibot)</strong> để tự động hóa tối đa các tác vụ lặp đi lặp lại.
        </p>
      </div>

      <h2 style={{ marginTop: '40px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>🧭 Lộ trình Dành cho bạn</h2>
      <div className="info-grid" style={{ marginTop: '20px' }}>
        <Link to="/lark-basics" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="info-card" style={{ height: '100%', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🚀 1. Làm quen Lark Suite</h4>
            <p>Khóa đào tạo cấp tốc giúp bạn nắm vững vũ khí làm việc chính: Nhắn tin, tạo Base, lên lịch và duyệt đơn từ.</p>
          </div>
        </Link>
        <Link to="/agent-features" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="info-card" style={{ height: '100%', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🤖 2. Khai phá TaviBot</h4>
            <p>Học cách "sai việc" AI nội bộ. Từ việc tra cứu luật, giao task, đến lấy báo cáo kinh doanh tự động.</p>
          </div>
        </Link>
        <Link to="/marketing" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="info-card" style={{ height: '100%', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📈 3. Nghiệp vụ Khối</h4>
            <p>Khám phá quy trình vận hành chi tiết của các phòng ban (như Marketing) và cách luân chuyển công việc nhịp nhàng.</p>
          </div>
        </Link>
      </div>

      <h2 style={{ marginTop: '40px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>💡 Nguyên tắc làm việc tại Tavitax</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li><strong>Một nền tảng duy nhất:</strong> Nói không với việc phân tán luồng giao tiếp (chat Zalo rồi gửi file qua Google Drive). Mọi thứ từ trao đổi, lưu trữ tài liệu đến duyệt đơn đều phải được thực hiện 100% trên Lark.</li>
        <li><strong>Dữ liệu liên thông:</strong> Tận dụng sức mạnh của Bitable để biến dữ liệu tĩnh thành các luồng chảy (pipeline) liên tục. Tránh việc nhập thủ công dữ liệu từ bảng này sang bảng khác.</li>
        <li><strong>AI First:</strong> Bất cứ khi nào có việc lặp đi lặp lại hoặc cần tìm thông tin nội bộ, hãy nghĩ ngay đến việc chat nhờ TaviBot xử lý trước khi hỏi đồng nghiệp.</li>
      </ul>

      <div style={{ marginTop: '50px', padding: '30px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Cần hỗ trợ kỹ thuật?</h3>
        <p style={{ margin: 0, color: '#64748b' }}>Nếu bạn gặp khó khăn trong việc ứng dụng công cụ vào nghiệp vụ hằng ngày, đừng ngần ngại ping trực tiếp cho bộ phận quản trị hệ thống trên Lark hoặc tag thẳng TaviBot vào nhóm để hỏi cách sử dụng nhé.</p>
      </div>
    </div>
  );
};

export default Home;
