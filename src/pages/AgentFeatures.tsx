const AgentFeatures = () => {
  return (
    <div className="doc-card">
      <h1>Tính năng Tavitax Agent</h1>
      <p className="subtitle">Tổng hợp toàn bộ các tính năng hiện có của hệ thống Lark Agent. TaviBot đóng vai trò như một trợ lý ảo toàn năng, giúp tự động hóa và tối ưu hóa các quy trình từ nhân sự, quản lý công việc, bán hàng cho đến truyền thông.</p>

      <h2>1. 💼 Nhóm Tính Năng Quản Lý Khách Hàng (CRM)</h2>
      <p>Agent có thể tương tác trực tiếp với cơ sở dữ liệu khách hàng (CRM Base) để giúp đội ngũ Sales thao tác nhanh chóng ngay trên khung chat:</p>
      <table>
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>Câu lệnh mẫu (Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Lấy danh sách khách hàng mới</strong></td>
            <td><div className="prompt-box">Cho tôi xem 5 khách hàng tiềm năng mới nhất.</div></td>
          </tr>
          <tr>
            <td><strong>Tìm kiếm thông tin khách hàng</strong></td>
            <td><div className="prompt-box">Tìm thông tin của khách hàng tên Nguyễn Văn A</div></td>
          </tr>
          <tr>
            <td><strong>Cập nhật trạng thái</strong></td>
            <td><div className="prompt-box">Cập nhật trạng thái của khách Văn A thành Đã chốt.</div></td>
          </tr>
          <tr>
            <td><strong>Phân công khách hàng</strong></td>
            <td><div className="prompt-box">Giao khách hàng Văn A cho @Tên_Nhân_Viên chăm sóc.</div></td>
          </tr>
        </tbody>
      </table>

      <h2>2. 📋 Nhóm Tính Năng Quản Lý Công Việc (Task Management)</h2>
      <p>Hệ thống cung cấp sự linh hoạt tối đa khi kết hợp quản lý công việc trên ứng dụng Native Tasks của Lark và đồng bộ thẳng về Bitable.</p>
      <table>
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>Câu lệnh mẫu (Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tạo và Giao Việc</strong></td>
            <td><div className="prompt-box">Tạo task 'Làm báo cáo thuế' giao cho @Tên_Nhân_Viên, hạn chót chiều mai.</div></td>
          </tr>
          <tr>
            <td><strong>Kiểm tra Việc Cá Nhân</strong></td>
            <td><div className="prompt-box">Hôm nay tôi có việc gì cần làm không?</div></td>
          </tr>
          <tr>
            <td><strong>Cập Nhật Tiến Độ</strong></td>
            <td><div className="prompt-box">Ghi chú vào task Báo Cáo Thuế là đã làm xong phần 1.</div></td>
          </tr>
          <tr>
            <td><strong>Hoàn Thành / Đóng Việc</strong></td>
            <td><div className="prompt-box">Đóng task Báo Cáo Thuế giúp tôi.</div></td>
          </tr>
          <tr>
            <td><strong>Xóa Công Việc</strong></td>
            <td><div className="prompt-box">Xóa task Báo Cáo Thuế do tạo nhầm nhé.</div></td>
          </tr>
          <tr>
            <td><strong>Theo Dõi Đội Nhóm</strong></td>
            <td><div className="prompt-box">Kiểm tra xem @Tên_Nhân_Viên đang có những task nào chưa làm.</div></td>
          </tr>
          <tr>
            <td><strong>Thống Kê Công Việc</strong></td>
            <td><div className="prompt-box">Thống kê tình hình hoàn thành công việc của cả phòng.</div></td>
          </tr>
        </tbody>
      </table>
      <div className="alert">
        <div className="alert-title">🔄 Đồng Bộ Tự Động (Native to Bitable)</div>
        <p>Hệ thống có tiến trình tự động quét mỗi 15 phút. Khi bạn ấn "Hoàn thành" trong Lark Task, dữ liệu trên Bitable sẽ tự động cập nhật thành "🟢 Hoàn thành" (và ngược lại).</p>
      </div>

      <h2>3. 🧠 Tri Thức Tự Động & Tiện Ích Lịch Trình</h2>
      <table>
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>Câu lệnh mẫu (Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Hỏi Đáp Chuyên Vụ (RAG)</strong></td>
            <td><div className="prompt-box">Quy trình hoàn thuế GTGT của công ty là gì?</div></td>
          </tr>
          <tr>
            <td><strong>Tra Cứu Mạng & Website</strong></td>
            <td><div className="prompt-box">Tìm kiếm tin tức luật đất đai trên mạng, tóm tắt thành 3 ý chính.</div></td>
          </tr>
          <tr>
            <td><strong>Sắp Xếp Cuộc Họp</strong></td>
            <td><div className="prompt-box">Lên lịch họp tổng kết tháng vào 3h chiều thứ 6 tuần này.</div></td>
          </tr>
        </tbody>
      </table>

      <h2>4. ⚙️ Hệ Thống Tiến Trình Ngầm (Background Jobs)</h2>
      <p>Agent chủ động theo dõi hệ thống và báo cáo cho bạn:</p>
      <ul>
        <li><strong>08:00 mỗi ngày:</strong> Quét toàn bộ CRM, cảnh báo khách hàng nguội (quá 3 ngày chưa chốt).</li>
        <li><strong>08:30 mỗi ngày:</strong> Nhắc nhở các task cá nhân quá hạn hoặc đến hạn trong ngày.</li>
        <li><strong>Báo Cáo Chủ Động:</strong> Tự động tổng hợp dữ liệu khách hàng mới định kỳ mỗi 2 giờ.</li>
        <li><strong>Cấu Hình Kênh Nhận Báo Cáo:</strong> Chat <code>nhận thông báo ở đây</code> vào một group bất kỳ để đăng ký nhận các thông báo tự động.</li>
      </ul>

      <h2>5. 👨‍💼 Nhóm Tính Năng Hành Chính - Nhân Sự (HR) <span style={{fontSize: '0.6em', background: '#fef08a', color: '#854d0e', padding: '2px 8px', borderRadius: '12px', verticalAlign: 'middle', fontWeight: 'normal'}}>Đang nghiên cứu</span></h2>
      <table>
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>Câu lệnh mẫu (Prompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Xin Nghỉ Phép Qua Chat</strong></td>
            <td><div className="prompt-box">Tạo đơn xin nghỉ ốm sáng mai từ 8h đến 12h.</div></td>
          </tr>
          <tr>
            <td><strong>Tra Cứu Chấm Công</strong></td>
            <td><div className="prompt-box">Hôm nay tôi chấm công lúc mấy giờ vậy?</div></td>
          </tr>
          <tr>
            <td><strong>Quản Lý Phê Duyệt</strong></td>
            <td><div className="prompt-box">Có đơn nào đang chờ duyệt không? (Sau đó có thể báo: Duyệt đơn của Khang)</div></td>
          </tr>
        </tbody>
      </table>

      <h2>6. 📢 Marketing & Truyền Thông <span style={{fontSize: '0.6em', background: '#fef08a', color: '#854d0e', padding: '2px 8px', borderRadius: '12px', verticalAlign: 'middle', fontWeight: 'normal'}}>Đang nghiên cứu</span></h2>
      <div className="info-grid">
        <div className="info-card">
          <h4>Sáng Tạo Nội Dung</h4>
          <p>Yêu cầu bot: "Viết một bài quảng cáo Facebook về dịch vụ kế toán thuế...". AI tự động nghiên cứu, viết bài và lưu nháp vào Base.</p>
        </div>
        <div className="info-card">
          <h4>Tự Động Đăng Bài</h4>
          <p>Tiến trình ngầm quét các bài viết trong Base đã được "Approved" (Đã duyệt) và tự động đăng lên Fanpage mỗi 5 phút.</p>
        </div>
      </div>
    </div>
  );
};

export default AgentFeatures;
