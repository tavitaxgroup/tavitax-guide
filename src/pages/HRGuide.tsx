const HRGuide = () => {
  return (
    <div className="doc-card">
      <h1>SOP Khối Hành chính - Nhân sự (HR)</h1>
      <p className="subtitle">Hướng dẫn chuẩn hóa quy trình Tuyển dụng, Onboarding và Phê duyệt đơn từ trên Lark.</p>

      <h2>1. Quy trình Tuyển dụng (Recruitment Pipeline)</h2>
      <p>Sử dụng bảng <strong>HR Base</strong> để quản lý toàn bộ vòng đời của ứng viên:</p>
      <ul>
        <li><strong>Lọc CV:</strong> Nhập thông tin ứng viên vào Base. Tự động gửi email cảm ơn/từ chối bằng tính năng Automation.</li>
        <li><strong>Phỏng vấn:</strong> Khi chuyển trạng thái sang "Phỏng vấn", dùng <strong>Lark Calendar</strong> tạo lịch mời họp mặt hoặc gửi link Lark Video (họp online).</li>
        <li><strong>Gửi Offer:</strong> Nếu ứng viên Đậu, tự động tạo file Thư mời nhận việc (Offer Letter) từ Template trên Lark Docs.</li>
      </ul>

      <h2>2. Checklist Onboarding (Ngày đầu đi làm)</h2>
      <p>Để đảm bảo nhân sự mới hòa nhập nhanh chóng, HR cần thao tác đúng các bước sau:</p>
      <div className="info-grid">
        <div className="info-card">
          <h4>B1. Cấp tài khoản Lark</h4>
          <p>Sử dụng SĐT của nhân sự để tạo tài khoản nội bộ. Thêm họ vào các nhóm chat (Group) của phòng ban.</p>
        </div>
        <div className="info-card">
          <h4>B2. Phân quyền Base</h4>
          <p>Cấp quyền "Chỉ xem" (Read-only) hoặc "Được sửa" (Edit) vào các bảng Base tương ứng (VD: Marketing Base).</p>
        </div>
        <div className="info-card">
          <h4>B3. Gửi Guidebook</h4>
          <p>Ghim (Pin) đường link Tavitax Guidebook này lên nhóm chat để họ tự đọc văn hóa và quy trình làm việc.</p>
        </div>
      </div>

      <h2>3. Xử lý Đơn từ (Lark Approval)</h2>
      <p>Khối HR đóng vai trò quản trị hệ thống Phê duyệt. Các loại đơn phổ biến:</p>
      <table>
        <thead>
          <tr>
            <th>Loại đơn</th>
            <th>Luồng phê duyệt (Approval Flow)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Đơn xin Nghỉ phép</strong></td>
            <td>Nhân viên nộp &gt; Trưởng phòng duyệt &gt; Gửi thông báo về cho HR để lưu trữ.</td>
          </tr>
          <tr>
            <td><strong>Đơn đề xuất Chi phí</strong></td>
            <td>Nhân viên nộp (đính kèm bill) &gt; Trưởng phòng duyệt &gt; Kế toán duyệt &gt; Giám đốc duyệt (nếu &gt; 5 triệu).</td>
          </tr>
        </tbody>
      </table>

      <div className="alert">
        <div className="alert-title">Thống kê tự động</div>
        <p>Cuối tháng, HR không cần đếm tay số ngày nghỉ của từng người. Lark Approval sẽ tự động xuất báo cáo tổng hợp (Report) ra một file Excel hoặc Lark Sheet duy nhất để tính lương.</p>
      </div>
    </div>
  );
};

export default HRGuide;
