
const MarketingGuide = () => {
  return (
    <div className="doc-card">
      <h1>Khối Marketing</h1>
      <p className="subtitle">Hướng dẫn sử dụng các tính năng quản lý công việc và tự động hóa dành riêng cho phòng Marketing.</p>

      <h2>1. Làm chủ Hệ thống Lark Base</h2>
      <p>Mọi dữ liệu Bot thu thập sẽ được lưu trữ đồng bộ tại "Trung tâm điều hành" Marketing Base. Base này gồm 2 bảng (Table) cốt lõi:</p>
      
      <div className="info-grid">
        <div className="info-card">
          <h4>📝 Bảng Content (Quản lý Bài viết)</h4>
          <p>Nơi quản lý toàn bộ nội dung quảng cáo đa nền tảng. Các cột quan trọng gồm: <strong>Ý tưởng</strong>, <strong>Trạng thái</strong> (từ Ý tưởng mới -&gt; Đã Đăng), <strong>Nền tảng</strong> (FB, Zalo).</p>
        </div>
        <div className="info-card">
          <h4>🎯 Bảng Tasks (Quản lý Công việc)</h4>
          <p>Nơi chứa các nhiệm vụ nhỏ (Design, Quay phim). Đặc biệt: Cột <strong>Liên kết Content</strong> cho phép nối Task trực tiếp vào Bài viết tương ứng ở bảng Content.</p>
        </div>
      </div>

      <h2>2. Tính năng Quản lý Công việc (Tavibot)</h2>
      <p>Chỉ cần chat với Tavibot, bot sẽ tự động cập nhật Database ngay lập tức.</p>

      <table>
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>Lệnh tương tác (Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Giao việc</strong><br/><small>Khởi tạo công việc và gán deadline.</small></td>
            <td>
              <div className="prompt-box">Giao việc: "Thiết kế ảnh bìa Fanpage", mô tả: "Tone xanh". Hạn chót: 2026-06-10 15:00.</div>
              <div className="bot-reply">✅ Đã tạo thành công Task: 'Thiết kế ảnh bìa Fanpage' trên hệ thống Base.</div>
            </td>
          </tr>
          <tr>
            <td><strong>Xem việc</strong><br/><small>Truy xuất task Cần làm của bạn.</small></td>
            <td>
              <div className="prompt-box">Liệt kê các việc tôi cần làm hôm nay.</div>
              <div className="bot-reply">Danh sách công việc của bạn:<br/>- Thiết kế ảnh bìa Fanpage (🔴 Cần làm)</div>
            </td>
          </tr>
          <tr>
            <td><strong>Báo cáo tiến độ</strong><br/><small>Lưu thẳng ghi chú vào Base.</small></td>
            <td>
              <div className="prompt-box">Cập nhật tiến độ task "ảnh bìa": Đã làm xong nháp 1.</div>
              <div className="bot-reply">✅ Đã ghi nhận báo cáo tiến độ. (Chuyển sang 🟡 Đang làm)</div>
            </td>
          </tr>
          <tr>
            <td><strong>Hoàn thành</strong><br/><small>Nghiệm thu công việc.</small></td>
            <td>
              <div className="prompt-box">Hoàn thành task "ảnh bìa".</div>
              <div className="bot-reply">✅ Đã đánh dấu hoàn thành công việc. (Chuyển sang 🟢 Hoàn thành)</div>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>3. Quy trình Phối hợp (Workflow)</h2>
      <ol style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li><strong>Lên kế hoạch:</strong> Đầu tuần, Leader lên ý tưởng bài viết trong bảng Content. Chat với Bot để giao các Task thiết kế/quay dựng cho nhân sự.</li>
        <li><strong>Thực thi & Báo cáo:</strong> Nhân sự nhận task, làm việc và báo cáo tiến độ hàng ngày qua chat (VD: <code>Cập nhật tiến độ: Đang dựng 3D</code>).</li>
        <li><strong>Nghiệm thu:</strong> Nhân sự chat <code>Hoàn thành task...</code>. Leader vào bảng Content kiểm tra file đính kèm và chuyển trạng thái bài viết sang "Sẵn sàng lên lịch".</li>
      </ol>

      <h2>4. Lộ trình Tự động hóa (Future Work)</h2>
      <div className="alert">
        <div className="alert-title">Đang thử nghiệm (Beta)</div>
        <p>Các module AI siêu việt sau đang nằm trong lộ trình triển khai sắp tới.</p>
      </div>
      <div className="info-grid">
        <div className="info-card">
          <h4>✍️ Auto-Content AI</h4>
          <p>Bot tự động phân tích trend, viết bài chuẩn SEO và nháp thẳng vào Lark Base.</p>
        </div>
        <div className="info-card">
          <h4>🚀 Auto-Publishing</h4>
          <p>Khi bài viết đổi trạng thái "Sẵn sàng lên lịch", hệ thống tự động đăng lên Fanpage FB.</p>
        </div>
        <div className="info-card">
          <h4>🤖 Trợ lý Khách hàng</h4>
          <p>AI tự động trả lời bình luận Fanpage dựa theo kiến thức Thuế chuyên sâu.</p>
        </div>
      </div>
    </div>
  );
};

export default MarketingGuide;
