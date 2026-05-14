const MarketingGuide = () => {
  return (
    <div className="doc-card">
      <h1>SOP Khối Marketing</h1>
      <p className="subtitle">Hướng dẫn sử dụng hệ thống tự động hóa và các tiêu chuẩn Content dành riêng cho phòng Marketing Tavitax.</p>

      <h2>1. Quy chuẩn Content (SOP)</h2>
      <div className="info-grid">
        <div className="info-card">
          <h4>Facebook Fanpage</h4>
          <p>
            - <strong>Độ dài:</strong> Tối đa 300 - 500 từ. 3 dòng đầu phải chứa thông điệp chính "giật tít".<br/>
            - <strong>Hashtag bắt buộc:</strong> <code>#Tavitax</code> <code>#KeToanThue</code> <code>#ThanhLapDoanhNghiep</code><br/>
            - <strong>Call-to-Action (CTA):</strong> Luôn chèn link inbox Zalo OA ở cuối bài.
          </p>
        </div>
        <div className="info-card">
          <h4>Website / SEO Blog</h4>
          <p>
            - <strong>Độ dài:</strong> Tối thiểu 1000 từ. Cấu trúc chuẩn thẻ H2, H3 rõ ràng.<br/>
            - <strong>Từ khóa (Keyword):</strong> Phân bổ từ khóa chính ở tiêu đề, đoạn mở đầu và ít nhất 3 thẻ H2.<br/>
            - <strong>Hình ảnh:</strong> Đóng logo watermark Tavitax góc phải dưới.
          </p>
        </div>
      </div>

      <h2>2. Quy trình Thực thi 5 Bước</h2>
      <p>Bảng dưới đây mô tả luồng công việc luân chuyển giữa Idea (Ý tưởng) đến Đăng bài (Publishing).</p>
      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', overflowX: 'auto', marginBottom: '20px' }}>
        <pre className="mermaid" style={{ margin: 0 }}>
{`graph TD;
    A[1. Lên Ý Tưởng] -->|Leader giao task trên chat| B[2. Viết Content & Design];
    B -->|Nhân viên gõ: Hoàn thành task| C[3. Chờ Duyệt];
    C -->|Leader đổi trạng thái thành Sẵn sàng| D[4. Lên Lịch / Auto Publish];
    D --> E[5. Auto-Analytics thu thập KPI];`}
        </pre>
      </div>

      <h2>3. Đo lường KPI Tự động</h2>
      <p>Không cần tự lập file báo cáo cuối tháng, hệ thống <strong>Auto-Analytics</strong> sẽ quét số liệu mỗi ngày lúc 23:00 và điền thẳng vào Lark Base.</p>
      <table>
        <thead>
          <tr>
            <th>Chỉ số (Metrics)</th>
            <th>Cách hệ thống tính điểm & Đánh giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Lượt Xem (Reach/Views)</strong></td>
            <td>Tổng số lượt tiếp cận tự nhiên. Bài viết &gt; 5,000 Reach được đánh dấu sao 🌟 (Viral Content).</td>
          </tr>
          <tr>
            <td><strong>Lượt Tương Tác (Engagements)</strong></td>
            <td>Tổng cộng Like + Share + Clicks. Là thước đo chính cho các bài dạng [Kiến thức] hoặc [Giải trí].</td>
          </tr>
          <tr>
            <td><strong>Lượt Bình Luận (Comments)</strong></td>
            <td>Đặc biệt quan trọng với bài [Bán hàng]. Bot sẽ tự phân tích Comment nào là hỏi giá (Leads) để chuyển cho Sales.</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Các Lệnh Giao Việc Cơ Bản (Tavibot)</h2>
      <p>Thực thi công việc ngay trên khung chat thay vì phải thao tác trên Base.</p>
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

      <h2>5. Lộ trình Tự động hóa (Future Work)</h2>
      <div className="alert">
        <div className="alert-title">Đang thử nghiệm (Beta)</div>
        <p>Các module AI siêu việt sau đang nằm trong lộ trình triển khai sắp tới.</p>
      </div>
      <ul>
        <li><strong>Auto-Content AI:</strong> Bot tự động phân tích trend, viết bài chuẩn SEO và nháp thẳng vào Lark Base.</li>
        <li><strong>Auto-Publishing:</strong> Khi bài viết đổi trạng thái "Sẵn sàng lên lịch", hệ thống tự động đăng lên Fanpage FB mà không cần bấm đăng tay.</li>
        <li><strong>Trợ lý Khách hàng:</strong> AI tự động trả lời bình luận Fanpage dựa theo kiến thức Thuế chuyên sâu.</li>
      </ul>
    </div>
  );
};

export default MarketingGuide;
