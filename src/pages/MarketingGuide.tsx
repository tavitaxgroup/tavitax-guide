const MarketingGuide = () => {
  return (
    <div className="doc-card">
      <h1>Khối Marketing</h1>
      <p className="subtitle">Cẩm nang thực chiến: Cách khai thác tối đa sức mạnh của Marketing Base và Trợ lý ảo Tavibot để luân chuyển công việc nhịp nhàng.</p>



      <h2>1. Nghệ thuật Quản lý Task Đa tầng (Task Linking)</h2>
      <p>Một bài Content thường cần nhiều người cùng làm (Ví dụ: 1 người viết chữ, 1 người vẽ hình, 1 người chạy Ads). Nếu gom chung vào 1 chỗ sẽ rất rối rắm.</p>
      <p>Đó là lý do chúng ta có Bảng <strong>Tasks</strong> (Công việc). Bảng này sử dụng tính năng <strong>Liên kết Content (Link to Record)</strong>.</p>
      
      <ul>
        <li><strong>Bóc tách công việc:</strong> Khi bài viết ở trạng thái <em>Ý tưởng mới</em>, Leader có thể tạo ra 3 Task riêng biệt trên Bảng Tasks (Task A: Viết bài, Task B: Thiết kế ảnh, Task C: Chạy Ads).</li>
        <li><strong>Gắn kết:</strong> Cả 3 Task này đều được "Link" (Nối) về đúng 1 dòng bài viết bên Bảng Content.</li>
        <li><strong>Góc nhìn của Leader:</strong> Khi vào Bảng Content bấm mở 1 bài viết, Leader sẽ thấy ngay bên dưới là danh sách các Task con. Mọi thứ được phân rã rõ ràng: Biết ngay khâu Viết chữ (Xong) nhưng khâu Thiết kế (Đang làm).</li>
      </ul>

      <h2>2. Mẹo Quản trị bằng Kanban & Filter (Dành cho Leader)</h2>
      <div className="alert">
        <div className="alert-title">Kỹ năng sống còn trên Base</div>
        <p>Tuyệt đối không nhìn Base ở dạng Bảng (Grid) thông thường khi có hàng trăm bài viết.</p>
      </div>
      <div className="info-grid">
        <div className="info-card">
          <h4>Chế độ Kanban (Thẻ kéo thả)</h4>
          <p>Bấm chuyển góc nhìn (View) trên cùng bên trái sang <strong>Kanban</strong>. Lúc này, các Status (Ý tưởng, Đang viết, Chờ duyệt...) sẽ biến thành các cột dọc. Leader chỉ cần nhìn lướt là biết ngay <strong>nút thắt cổ chai</strong> đang nằm ở đâu (VD: Cột "Chờ duyệt Design" đang ứ đọng quá nhiều).</p>
        </div>
        <div className="info-card">
          <h4>Lọc tự động (Filter)</h4>
          <p>Sử dụng nút <strong>Filter</strong> để thiết lập bộ lọc: <code>Trạng thái = Chờ duyệt Content</code> VÀ <code>Người phụ trách = [Tên nhân sự]</code>. Lưu lại View này để chỉ tập trung vào việc Duyệt bài mỗi sáng.</p>
        </div>
      </div>

      <h2>3. Các Lệnh Giao Việc Cơ Bản (Tavibot)</h2>
      <p>Sử dụng Bot để khởi tạo Task phụ (Bảng Tasks) ngay trên khung chat.</p>
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

      <h2>4. Các Tính Năng Tự Động Hóa <span style={{fontSize: '0.6em', background: '#fef08a', color: '#854d0e', padding: '2px 8px', borderRadius: '12px', verticalAlign: 'middle', fontWeight: 'normal'}}>Đang nghiên cứu</span></h2>
      <ul>
        <li><strong>Auto-Content AI:</strong> Tích hợp Bot tự động phân tích trend, viết bài và nháp thẳng vào Lark Base.</li>
        <li><strong>Auto-Publishing:</strong> Khi bài viết được duyệt, hệ thống tiến trình ngầm sẽ tự động quét và đăng lên Fanpage FB mỗi 5 phút mà không cần thao tác tay.</li>
        <li><strong>Báo cáo tự động:</strong> Bot có khả năng tự động tổng hợp danh sách các bài viết theo định kỳ và gửi báo cáo thẳng vào nhóm chat để nhắc nhở Leader.</li>
      </ul>
    </div>
  );
};

export default MarketingGuide;
