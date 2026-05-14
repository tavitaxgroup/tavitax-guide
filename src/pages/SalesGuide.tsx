const SalesGuide = () => {
  return (
    <div className="doc-card">
      <h1>SOP Khối Sales (Kinh doanh)</h1>
      <p className="subtitle">Hệ thống hóa quy trình quản trị phễu khách hàng (Sales Pipeline) và tự động hóa phân bổ Leads.</p>

      <h2>1. Phễu Khách hàng (Sales Pipeline)</h2>
      <p>Tại Tavitax, hành trình của một Khách hàng tiềm năng (Lead) trên Lark Base được chia thành 5 giai đoạn:</p>
      <ul>
        <li><strong>Lead mới:</strong> Khách hàng vừa nhắn tin/để lại số điện thoại. Cần phản hồi trong vòng 5 phút.</li>
        <li><strong>Đã liên hệ:</strong> Sales đã gọi điện hoặc nhắn tin Zalo lần 1 để khảo sát nhu cầu.</li>
        <li><strong>Đang tư vấn / Báo giá:</strong> Đã gửi bảng giá chi tiết các gói (VD: Dịch vụ Kế toán trọn gói).</li>
        <li><strong>Chốt Deal (Won):</strong> Khách hàng đồng ý ký hợp đồng. Chuyển thông tin sang bộ phận Kế toán.</li>
        <li><strong>Thất bại (Lost):</strong> Khách không có nhu cầu hoặc chê đắt. Cần ghi chú rõ lý do để Marketing tối ưu lại chiến dịch.</li>
      </ul>

      <h2>2. Luồng Nhận Leads Tự Động</h2>
      <p>Chấm dứt việc phải canh trực Fanpage. Khi có người bình luận "Hỏi giá" trên Facebook:</p>
      <div className="info-grid">
        <div className="info-card">
          <h4>B1. AI Phân loại</h4>
          <p>Tavibot tự động đọc bình luận, phân loại xem đây là khách hàng hỏi dịch vụ hay chỉ là spam.</p>
        </div>
        <div className="info-card">
          <h4>B2. Bắn thông báo</h4>
          <p>Nếu là khách xịn, Bot lập tức gửi thẻ thông báo (Card) vào nhóm chat "Sales Tavitax" trên Lark.</p>
        </div>
        <div className="info-card">
          <h4>B3. Nhận Khách</h4>
          <p>Sales nào đang rảnh chỉ cần bấm nút "Nhận chăm sóc" ngay trên đoạn chat. Lead đó sẽ được gắn tên người Sales đó trên Base.</p>
        </div>
      </div>

      <h2>3. Kịch Bản Chốt Sale (Script Mẫu)</h2>
      <p>Để đảm bảo sự đồng bộ và chuyên nghiệp, mọi Sales phải sử dụng mẫu câu sau cho lần chạm đầu tiên (First Touch):</p>
      <div className="prompt-box" style={{ background: '#f1f5f9', color: '#0f172a', border: '1px solid #e2e8f0' }}>
        <strong>Zalo/Gọi điện:</strong><br/>
        "Dạ em chào anh/chị. Em là [Tên Sales], chuyên viên tư vấn của Tavitax Group. Em thấy anh/chị đang quan tâm đến Dịch vụ Thành lập Doanh nghiệp bên em.<br/><br/>
        Không biết hiện tại anh/chị đã chuẩn bị được những hồ sơ cơ bản nào rồi ạ? Để em tư vấn gói phù hợp và tối ưu chi phí nhất cho mình nhé!"
      </div>

      <h2>4. Lưu ý khi dùng Lark Base</h2>
      <div className="alert">
        <div className="alert-title">Quy tắc 24h</div>
        <p>Mọi Lead ở trạng thái "Lead mới" nếu không được đổi sang trạng thái khác trong vòng 24h sẽ bị hệ thống đánh dấu đỏ (Overdue) và gửi cảnh báo cho Trưởng phòng Kinh doanh.</p>
      </div>
    </div>
  );
};

export default SalesGuide;
