const MarketingGuide = () => {
  return (
    <div className="doc-card">
      <h1>Khối Marketing</h1>
      <p className="subtitle">Cẩm nang thực chiến: Cách khai thác tối đa sức mạnh của Marketing Base và Trợ lý ảo Tavibot để luân chuyển công việc nhịp nhàng.</p>

      <h2>1. Giải phẫu Vòng đời Content (Content Lifecycle)</h2>
      <p>Bảng <strong>Content</strong> không chỉ là nơi lưu trữ, nó là một "băng chuyền" sản xuất. Mỗi bài viết sẽ đi qua 9 trạm (Status). Đây là nhiệm vụ của bạn tại từng trạm quan trọng:</p>
      
      <div className="info-grid">
        <div className="info-card">
          <h4>Trạm 1: Ý tưởng mới 💡</h4>
          <p>Nhân sự điền <strong>Text (Tựa đề nháp)</strong>, chọn <strong>Nền tảng</strong> (VD: Facebook, Website) và <strong>Loại nội dung</strong> (Bán hàng, Kiến thức). Không cần viết nội dung chi tiết ở bước này.</p>
        </div>
        <div className="info-card">
          <h4>Trạm 3: Đang viết Content ✍️</h4>
          <p>Content Creator viết bài trực tiếp vào cột <strong>Nội dung chi tiết</strong>. Nếu bài quá dài, có thể dẫn link Google Docs vào cột <strong>Link Bài/Docs</strong>.</p>
        </div>
        <div className="info-card">
          <h4>Trạm 5: Đang Design 🎨</h4>
          <p>Designer nhận việc. Sau khi hoàn thành, bắt buộc đính kèm hình ảnh/video vào cột <strong>File Design/Video</strong> (có thể upload trực tiếp lên Base) trước khi chuyển sang Trạm 6 (Chờ duyệt).</p>
        </div>
        <div className="info-card">
          <h4>Trạm 7: Sẵn sàng lên lịch 🚀</h4>
          <p>Trạm dành riêng cho Leader. Khi Leader chuyển sang status này, bài viết đã được chốt 100% (cả chữ lẫn hình) và sẵn sàng để đăng tải.</p>
        </div>
      </div>

      <ul className="workflow-steps" style={{ margin: '30px 0' }}>
        <li className="workflow-step">
          <div className="step-icon">💡</div>
          <div className="step-content">
            <h3>Trạm 1: Lên Ý Tưởng</h3>
            <p>Leader hoặc Creator điền tựa đề và nền tảng. Sau đó Leader chốt để bắt đầu viết.</p>
          </div>
        </li>
        <li className="workflow-step">
          <div className="step-icon">✍️</div>
          <div className="step-content">
            <h3>Trạm 2: Sản Xuất Nội Dung</h3>
            <p>Creator viết nội dung. Khi xong, trạng thái chuyển sang "Chờ duyệt Content" để Leader kiểm tra câu chữ.</p>
          </div>
        </li>
        <li className="workflow-step">
          <div className="step-icon">🎨</div>
          <div className="step-content">
            <h3>Trạm 3: Thiết Kế Hình Ảnh</h3>
            <p>Designer vào việc. Up file đính kèm lên Base và chuyển sang "Chờ duyệt Design".</p>
          </div>
        </li>
        <li className="workflow-step">
          <div className="step-icon">🚀</div>
          <div className="step-content">
            <h3>Trạm 4: Đăng Tải</h3>
            <p>Bài viết đã hoàn thiện 100%. Leader chốt "Sẵn sàng lên lịch" và đăng bài.</p>
          </div>
        </li>
      </ul>

      <h2>2. Nghệ thuật Quản lý Task Đa tầng (Task Linking)</h2>
      <p>Một bài Content thường cần nhiều người cùng làm (Ví dụ: 1 người viết chữ, 1 người vẽ hình, 1 người chạy Ads). Nếu gom chung vào 1 chỗ sẽ rất rối rắm.</p>
      <p>Đó là lý do chúng ta có Bảng <strong>Tasks</strong> (Công việc). Bảng này sử dụng tính năng <strong>Liên kết Content (Link to Record)</strong>.</p>
      
      <ul>
        <li><strong>Bóc tách công việc:</strong> Khi bài viết ở trạng thái <em>Ý tưởng mới</em>, Leader có thể tạo ra 3 Task riêng biệt trên Bảng Tasks (Task A: Viết bài, Task B: Thiết kế ảnh, Task C: Chạy Ads).</li>
        <li><strong>Gắn kết:</strong> Cả 3 Task này đều được "Link" (Nối) về đúng 1 dòng bài viết bên Bảng Content.</li>
        <li><strong>Góc nhìn của Leader:</strong> Khi vào Bảng Content bấm mở 1 bài viết, Leader sẽ thấy ngay bên dưới là danh sách các Task con. Mọi thứ được phân rã rõ ràng: Biết ngay khâu Viết chữ (Xong) nhưng khâu Thiết kế (Đang làm).</li>
      </ul>

      <h2>3. Mẹo Quản trị bằng Kanban & Filter (Dành cho Leader)</h2>
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

      <h2>4. Các Lệnh Giao Việc Cơ Bản (Tavibot)</h2>
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

      <h2>5. Lộ trình Tự động hóa (Future Work)</h2>
      <ul>
        <li><strong>Auto-Content AI:</strong> Bot tự động phân tích trend, viết bài và nháp thẳng vào Lark Base.</li>
        <li><strong>Auto-Publishing:</strong> Khi bài viết đổi trạng thái "7. Sẵn sàng lên lịch", hệ thống tự động đăng lên Fanpage FB mà không cần thao tác tay.</li>
        <li><strong>Báo cáo Chat nhóm tự động:</strong> Mỗi 8h sáng, Bot tự động tổng hợp danh sách các bài viết "Chờ duyệt" và gửi báo cáo thẳng vào nhóm chat để nhắc nhở Leader.</li>
      </ul>
    </div>
  );
};

export default MarketingGuide;
