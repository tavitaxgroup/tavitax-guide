const AccountingConsultingGuide = () => {
  return (
    <div className="doc-card">
      <h1>Khối Kế toán & Tư vấn</h1>
      <p className="subtitle">Cẩm nang ứng dụng Lark Suite xuyên suốt từ khâu tiếp cận, tư vấn chốt sales đến quản lý hồ sơ, chứng từ và kê khai thuế, đảm bảo luồng công việc liền mạch giữa hai bộ phận.</p>

      <h2>Phần I: Nghiệp vụ Tư vấn (Sales)</h2>
      
      <h3>1. Quản lý Phễu Khách hàng (CRM) bằng Lark Base</h3>
      <p>Mọi thông tin khách hàng từ các nguồn (Website, Facebook, Giới thiệu) đều được quy tụ về một <strong>Bảng CRM</strong> duy nhất để theo dõi tập trung.</p>
      <ul>
        <li><strong>Phân loại trạng thái:</strong> Sử dụng cột Dropdown để quản lý hành trình khách hàng: <em>Mới tiếp cận, Đang tư vấn, Chờ chốt, Đã chốt, Từ chối</em>.</li>
        <li><strong>Lịch sử chăm sóc:</strong> Ghi chú chi tiết nội dung từng cuộc trao đổi, nhu cầu của khách vào bản ghi để không bị trôi thông tin.</li>
        <li><strong>Bảo mật thông tin:</strong> Phân quyền dữ liệu, mỗi nhân viên tư vấn chỉ thấy và chăm sóc khách hàng do mình phụ trách.</li>
      </ul>

      <h3>2. Sử dụng Trợ lý ảo (TaviBot) để hỗ trợ Sales</h3>
      <p>TaviBot giúp thao tác với CRM cực nhanh ngay trên giao diện chat mà không cần mở Lark Base.</p>
      <table>
        <thead>
          <tr>
            <th>Hành động</th>
            <th>Câu lệnh (Chat Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Lấy số liệu nhanh</strong></td>
            <td><div className="prompt-box">Hôm nay tôi có bao nhiêu khách hàng mới cần liên hệ?</div></td>
          </tr>
          <tr>
            <td><strong>Thêm khách hàng mới</strong></td>
            <td><div className="prompt-box">Thêm khách hàng Nguyễn Văn B, SĐT 090xxxx, nhu cầu: thành lập doanh nghiệp.</div></td>
          </tr>
          <tr>
            <td><strong>Cập nhật tiến độ</strong></td>
            <td><div className="prompt-box">Khách hàng Văn B đã chốt hợp đồng.</div></td>
          </tr>
        </tbody>
      </table>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px dashed #e5e7eb' }} />

      <h2>Phần II: Chuyển giao & Nghiệp vụ Kế toán</h2>

      <div className="alert" style={{ marginBottom: '24px' }}>
        <div className="alert-title">Kích hoạt Quy trình Bàn giao Tự động</div>
        <p>Ngay khi chuyên viên Tư vấn chuyển trạng thái thành "Đã chốt", Lark Base sẽ tự động gửi thông báo đến Khối Kế toán để tiếp nhận, đồng thời Link toàn bộ hồ sơ khách hàng vào bảng quản lý của Kế toán. Mọi dữ liệu tư vấn trước đó kế toán đều có thể đọc lại được.</p>
      </div>

      <h3>1. Quản lý Hồ Sơ & Chứng Từ với Lark Base</h3>
      <p>Việc theo dõi tình trạng thu thập chứng từ của hàng trăm doanh nghiệp được số hóa hoàn toàn thông qua Bảng <strong>Quản lý Chứng từ</strong>.</p>
      <ul>
        <li><strong>Theo dõi tình trạng:</strong> Các cột trạng thái (Status) rõ ràng: <em>Chưa gửi, Đã nhận đủ, Đang xử lý, Đã chốt thuế</em>.</li>
        <li><strong>Đính kèm hóa đơn:</strong> Sử dụng cột Attachment để lưu trữ trực tiếp file hóa đơn (PDF, ảnh) vào từng bản ghi của khách hàng, tránh thất lạc.</li>
        <li><strong>Góc nhìn trực quan:</strong> Sử dụng chế độ Kanban hoặc Grouping theo "Tháng báo cáo" để biết chính xác những doanh nghiệp nào còn thiếu chứng từ.</li>
      </ul>

      <h3>2. Tự Động Hóa Nhắc Nhở & Thu Thập (Automations)</h3>
      <p><strong>Nhắc nhở tự động:</strong> Thiết lập Automation trên Base để hệ thống tự động gửi tin nhắn nhắc nhở (gần ngày mùng 5 hàng tháng) cho các khách hàng có trạng thái "Chưa gửi chứng từ" qua nhóm chat chung của từng công ty.</p>

      <h3>3. Khai thác Trợ lý ảo (TaviBot) trong Kế toán</h3>
      <p>Sử dụng TaviBot để tra cứu nhanh các quy định, thông tư hoặc thao tác hệ thống.</p>
      <table>
        <thead>
          <tr>
            <th>Hành động</th>
            <th>Câu lệnh (Chat Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tra cứu Luật/Quy định (RAG)</strong></td>
            <td><div className="prompt-box">Thuế suất GTGT hiện tại cho mặt hàng phần mềm là bao nhiêu theo luật mới nhất?</div></td>
          </tr>
          <tr>
            <td><strong>Kiểm tra tiến độ khách hàng</strong></td>
            <td><div className="prompt-box">Cho tôi xem danh sách các công ty chưa nộp đủ chứng từ tháng này.</div></td>
          </tr>
          <tr>
            <td><strong>Cập nhật trạng thái</strong></td>
            <td><div className="prompt-box">Cập nhật công ty ABC thành "Đã chốt thuế".</div></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default AccountingConsultingGuide;
