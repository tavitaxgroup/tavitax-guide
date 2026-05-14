const MarketingGuide = () => {
  return (
    <div className="doc-card">
      <h1>Khối Marketing</h1>
      <p className="subtitle">Hướng dẫn sử dụng hệ thống tự động hóa và quản lý công việc trên Lark Base dành riêng cho phòng Marketing Tavitax.</p>

      <h2>1. Quy trình Thực thi (Marketing Base)</h2>
      <p>Mọi bài đăng sẽ luân chuyển qua các trạng thái (Status) cố định trên bảng <strong>Content</strong>. Dưới đây là luồng phối hợp giữa các thành viên:</p>
      
      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', overflowX: 'auto', marginBottom: '20px' }}>
        <pre className="mermaid" style={{ margin: 0 }}>
{`graph TD;
    A[1. Ý tưởng mới] -->|Leader duyệt| B[2. Duyệt Ý tưởng];
    B -->|Bắt đầu viết| C[3. Đang viết Content];
    C -->|Gửi nháp| D[4. Chờ duyệt Content];
    D -->|Leader duyệt content| E[5. Đang Design / Quay Video];
    E -->|Gửi file thiết kế| F[6. Chờ duyệt Design];
    F -->|Leader chốt file| G[7. Sẵn sàng lên lịch];
    G -->|Đăng bài| H[8. Đã Đăng];`}
        </pre>
      </div>
      <p><em>Lưu ý: Bất cứ lúc nào nếu bài viết không khả thi, Leader có thể chuyển sang trạng thái <strong>9. Hủy bỏ</strong>.</em></p>

      <h2>2. Quản lý Công việc Hàng ngày (Tavibot)</h2>
      <p>Sử dụng Bảng <strong>Tasks</strong> (Công việc) để quản lý các tác vụ nhỏ (Ví dụ: thiết kế banner, quay phim) phục vụ cho bài Content. Bạn có thể giao việc ngay trên khung chat thay vì phải thao tác trên Base.</p>
      
      <table>
        <thead>
          <tr>
            <th>Hành động</th>
            <th>Câu lệnh (Chat Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Giao việc</strong></td>
            <td><div className="prompt-box">Giao việc: "Thiết kế ảnh bìa Fanpage", mô tả: "Tone xanh". Hạn chót: 2026-06-10 15:00.</div></td>
          </tr>
          <tr>
            <td><strong>Xem việc của bạn</strong></td>
            <td><div className="prompt-box">Liệt kê các việc tôi cần làm hôm nay.</div></td>
          </tr>
          <tr>
            <td><strong>Cập nhật tiến độ</strong></td>
            <td><div className="prompt-box">Cập nhật tiến độ task "ảnh bìa": Đã làm xong nháp 1.</div></td>
          </tr>
          <tr>
            <td><strong>Hoàn thành task</strong></td>
            <td><div className="prompt-box">Hoàn thành task "ảnh bìa".</div></td>
          </tr>
        </tbody>
      </table>

      <h2>3. Lộ trình Tự động hóa (Future Work)</h2>
      <div className="alert">
        <div className="alert-title">Đang thử nghiệm (Beta)</div>
        <p>Các module AI siêu việt sau đang nằm trong lộ trình triển khai sắp tới.</p>
      </div>
      <ul>
        <li><strong>Auto-Content AI:</strong> Bot tự động phân tích trend, viết bài chuẩn SEO và nháp thẳng vào Lark Base.</li>
        <li><strong>Auto-Publishing:</strong> Khi bài viết đổi trạng thái "7. Sẵn sàng lên lịch", hệ thống tự động đăng lên Fanpage FB mà không cần thao tác tay.</li>
        <li><strong>Auto-Analytics:</strong> Hệ thống tự động thu thập số lượt xem, tương tác từ Fanpage và điền ngược lại vào Base mỗi ngày.</li>
      </ul>
    </div>
  );
};

export default MarketingGuide;
