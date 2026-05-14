const LarkBasics = () => {
  return (
    <div className="doc-card">
      <h1>Cẩm nang Lark Suite Cơ bản</h1>
      <p className="subtitle">Dành cho nhân sự mới. Lark là siêu ứng dụng làm việc nhóm duy nhất bạn cần tại Tavitax, thay thế hoàn toàn cho Zalo, Google Drive, Excel và Trello.</p>

      <h2>1. Lark Messenger (Nhắn tin)</h2>
      <p>Nơi trao đổi công việc chính thức của toàn công ty.</p>
      <ul>
        <li><strong>Chat 1-1 và Group Chat:</strong> Tương tự Zalo nhưng bảo mật hơn và hỗ trợ gửi file lớn không giới hạn.</li>
        <li><strong>Tính năng Thread:</strong> Luôn sử dụng "Reply in thread" (Trả lời trong luồng) đối với các thông báo quan trọng để tránh trôi tin nhắn.</li>
        <li><strong>Ghim (Pin):</strong> Ghim các tài liệu, bảng Base quan trọng lên đầu nhóm chat để mọi người dễ dàng truy cập.</li>
      </ul>

      <h2>2. Lark Base (Cơ sở dữ liệu)</h2>
      <p>Nâng cấp của Excel. Base không chỉ lưu dữ liệu dạng bảng mà còn cho phép tạo các góc nhìn (View) đa dạng.</p>
      <div className="info-grid">
        <div className="info-card">
          <h4>Kanban View</h4>
          <p>Kéo thả các thẻ công việc qua lại giữa các cột (Trạng thái) tương tự như Trello.</p>
        </div>
        <div className="info-card">
          <h4>Gantt / Calendar View</h4>
          <p>Xem toàn bộ tiến độ dự án trên dạng lịch hoặc sơ đồ ngang trực quan.</p>
        </div>
        <div className="info-card">
          <h4>Liên kết Dữ liệu (Link)</h4>
          <p>Dữ liệu ở bảng này có thể móc nối (Link) sang bảng khác, tránh việc phải nhập tay nhiều lần.</p>
        </div>
      </div>

      <h2>3. Lark Calendar & Approval (Lịch & Phê duyệt)</h2>
      <p>Số hóa toàn bộ các tác vụ hành chính và sắp xếp thời gian biểu.</p>
      <ul>
        <li><strong>Lark Calendar:</strong> Nơi bạn xem lịch làm việc cá nhân và lịch công ty. Khi cần tạo cuộc họp, hãy chọn "Create Event", sau đó thêm những người cần tham gia. Hệ thống sẽ tự động đối chiếu lịch rảnh của mọi người và gợi ý khung giờ trống chung.</li>
        <li><strong>Lark Approval (Phê duyệt):</strong> Chấm dứt kỷ nguyên "đơn từ giấy". Để xin nghỉ phép, tạm ứng, hoặc đề xuất chi phí, bạn chỉ cần vào mục <code>Workplace &gt; Approval</code>, chọn form tương ứng và điền. Hệ thống sẽ tự động chuyển đơn đến Quản lý trực tiếp để bấm duyệt ngay trên điện thoại.</li>
      </ul>

      <h2>4. Làm quen với AI (Tavibot)</h2>
      <div className="alert">
        <div className="alert-title">Cách tương tác chuẩn xác</div>
        <p>Tavibot là trợ lý AI nội bộ của Tavitax. Để giao tiếp hiệu quả, bạn cần nhớ:</p>
      </div>
      <ul>
        <li><strong>Tìm kiếm:</strong> Gõ tên <code>@Tavibot</code> vào thanh tìm kiếm phía trên cùng của Lark và bấm trò chuyện.</li>
        <li><strong>Trong nhóm chat:</strong> Khi chat trong Group, bạn BẮT BUỘC phải tag <code>@Tavibot</code> thì Bot mới nhận được lệnh của bạn.</li>
        <li><strong>Chat riêng (1-1):</strong> Nếu bạn muốn kiểm tra công việc cá nhân hoặc nhờ Bot viết lách, hãy chat trực tiếp với Bot để giữ không gian làm việc của nhóm được gọn gàng.</li>
      </ul>
    </div>
  );
};

export default LarkBasics;
