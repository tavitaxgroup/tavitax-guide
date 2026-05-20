import { useState } from 'react';
import { Smartphone, Laptop, Globe, Zap, Table } from 'lucide-react';



const LarkBasics = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'desktop' | 'mobile'>('mobile');

  return (
    <div className="doc-card">
      <h1>Cẩm nang Lark Suite Cơ bản</h1>
      <p className="subtitle">Dành cho nhân sự mới. Lark là siêu ứng dụng làm việc nhóm duy nhất bạn cần tại Tavitax, thay thế hoàn toàn cho Zalo, Google Drive, Excel và Trello.</p>

      <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2em' }}>
        🛠️ Hướng dẫn Cài đặt & Đăng nhập Lark Suite
      </h2>
      <p>Bắt đầu hành trình làm việc số bằng cách lựa chọn thiết bị bạn đang sử dụng dưới đây để xem hướng dẫn cài đặt cụ thể:</p>

      {/* Tabs Selector */}
      <div className="install-tabs">
        <button 
          className={`install-tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          <Smartphone size={18} />
          Thiết bị Di động
          <span className="badge badge-gold" style={{ marginLeft: '6px' }}>Khuyên dùng</span>
        </button>
        <button 
          className={`install-tab-btn ${activeTab === 'desktop' ? 'active' : ''}`}
          onClick={() => setActiveTab('desktop')}
        >
          <Laptop size={18} />
          Ứng dụng Desktop (Máy tính)
        </button>
        <button 
          className={`install-tab-btn ${activeTab === 'web' ? 'active' : ''}`}
          onClick={() => setActiveTab('web')}
        >
          <Globe size={18} />
          Trình duyệt Web
        </button>
      </div>

      {activeTab === 'web' && (
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-icon">1</div>
            <div className="step-content">
              <h3>Mở trang Đăng nhập</h3>
              <p>Mở trình duyệt web của bạn (ưu tiên sử dụng Google Chrome hoặc Microsoft Edge) và truy cập trang đăng nhập Lark Suite chính thức:</p>
              <div className="prompt-box">
                https://www.larksuite.com/
              </div>
            </div>
          </div>
          
          <div className="workflow-step">
            <div className="step-icon">2</div>
            <div className="step-content">
              <h3>Đăng nhập & Vào Tổ chức Tavitax Group</h3>
              <p>Nhập số điện thoại di động hoặc email cá nhân đã được phòng Hành chính Nhân sự của Tavitax đăng ký trên hệ thống. Nhập mã OTP xác thực được gửi đến điện thoại/email của bạn. Sau khi xác thực thành công, hệ thống sẽ tự động đưa bạn vào thẳng không gian làm việc chung của <strong>Tavitax Group</strong>.</p>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">3</div>
            <div className="step-content">
              <h3>Tối ưu hóa Trải nghiệm trên Web</h3>
              <p>Để đảm bảo công việc không bị gián đoạn khi làm việc bằng trình duyệt:</p>
              <ul>
                <li><strong>Ghim Tab (Pin Tab):</strong> Bấm chuột phải vào tab Lark trên trình duyệt và chọn <code>Ghim tab (Pin Tab)</code> để tránh thao tác nhầm tắt mất trang làm việc.</li>
                <li><strong>Lưu vào Dấu trang (Bookmark):</strong> Nhấn tổ hợp phím <span className="mini-icon-box">Ctrl</span> + <span className="mini-icon-box">D</span> (trên Windows) hoặc <span className="mini-icon-box">Cmd</span> + <span className="mini-icon-box">D</span> (trên macOS) để lưu trang vào thanh Bookmark của trình duyệt.</li>
                <li><strong>Cấp quyền Nhận thông báo:</strong> Khi trình duyệt gửi yêu cầu, hãy chọn <code>Allow / Cho phép (Cho phép gửi thông báo)</code> để nhận tin nhắn mới ngay lập tức.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'desktop' && (
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-icon">1</div>
            <div className="step-content">
              <h3>Tải bộ cài đặt chính thức</h3>
              <p>Truy cập vào trang tải xuống chính thức của Lark Suite. Hệ thống sẽ tự động nhận diện và đề xuất bản cài đặt tương thích nhất với cấu hình máy tính của bạn:</p>
              <div className="download-btn-group">
                <a href="https://www.larksuite.com/download" target="_blank" rel="noopener noreferrer" className="download-btn">
                  <Laptop size={16} /> Tải bản cài đặt cho Máy tính (Tự động nhận diện)
                </a>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">2</div>
            <div className="step-content">
              <h3>Cài đặt phần mềm</h3>
              <ul>
                <li><strong>Đối với Windows:</strong> Nhấp đúp chuột vào file <code>.exe</code> vừa tải xuống, tích chọn đồng ý với điều khoản dịch vụ và nhấn <code>Install Now (Cài đặt ngay)</code>.</li>
                <li><strong>Đối với macOS:</strong> Mở file <code>.dmg</code> tải về, tiến hành kéo và thả biểu tượng Lark Suite vào thư mục <code>Applications (Ứng dụng)</code> trên máy của bạn.</li>
              </ul>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">3</div>
            <div className="step-content">
              <h3>Đăng nhập và Tự động gia nhập Tavitax Group</h3>
              <p>Khởi động phần mềm Lark Suite trên máy tính để bắt đầu làm việc:</p>
              <ol style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Nhập số điện thoại cá nhân (đã được phòng nhân sự add trước vào hệ thống) hoặc email cá nhân của bạn.</li>
                <li>Nhập mã xác thực OTP gửi qua SMS/Email để xác minh danh tính.</li>
                <li>Hệ thống Lark sẽ tự động nhận diện tài khoản của bạn thuộc tổ chức chung **Tavitax Group**. Bạn chỉ cần bấm đồng ý gia nhập là đã kết nối thành công mà không cần cấu hình thêm gì khác.</li>
              </ol>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">4</div>
            <div className="step-content">
              <h3>Cấu hình Khuyên dùng trên Máy tính</h3>
              <ul>
                <li><strong>Khởi động cùng hệ thống:</strong> Vào mục <code>Settings &gt; General</code>, tích chọn <code>Auto-start Lark when system boots</code> để Lark tự động khởi chạy khi bạn mở máy.</li>
                <li><strong>Ghim ứng dụng:</strong> Bấm chuột phải vào biểu tượng Lark trên thanh Taskbar (Windows) hoặc Dock (macOS) và chọn <code>Pin (Ghim)</code> để có lối tắt mở nhanh bất cứ khi nào cần.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mobile' && (
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-icon">1</div>
            <div className="step-content">
              <h3>Cài đặt Ứng dụng từ App Store / Google Play Store</h3>
              <p>Bấm trực tiếp vào các nút liên kết dưới đây để tải về nhanh chóng trên thiết bị của bạn:</p>
              
              <div className="download-btn-group">
                <a href="https://apps.apple.com/app/lark-work-together/id1352535390" target="_blank" rel="noopener noreferrer" className="download-btn">
                  🍏 Tải từ App Store (cho iPhone/iPad)
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.larksuite.lark" target="_blank" rel="noopener noreferrer" className="download-btn download-btn-secondary">
                  🤖 Tải từ Google Play (cho Android)
                </a>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginTop: '15px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '220px', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>🍏 Cách tải thủ công trên iOS</strong>
                  Mở ứng dụng <strong>App Store</strong> trên điện thoại, tìm kiếm từ khóa <code>Lark Suite</code>, chọn tải và xác thực bằng vân tay/FaceID.
                </div>
                <div style={{ flex: '1', minWidth: '220px', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>🤖 Cách tải thủ công trên Android</strong>
                  Mở ứng dụng <strong>CH Play (Google Play Store)</strong>, tìm kiếm từ khóa <code>Lark Suite</code> và chọn nút <strong>Cài đặt</strong>.
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">2</div>
            <div className="step-content">
              <h3>Đăng nhập & Tự động vào Tổ chức Tavitax Group</h3>
              <p>Đăng nhập trên điện thoại vô cùng nhanh gọn qua các bước sau:</p>
              <ol style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                <li>Khởi động Lark Suite trên điện thoại vừa cài đặt thành công.</li>
                <li>Nhập số điện thoại cá nhân (đã được đăng ký trước với bộ phận Hành chính Nhân sự của Tavitax) hoặc email cá nhân.</li>
                <li>Nhập mã xác thực OTP gửi qua tin nhắn SMS hoặc Email để đăng nhập vào tài khoản.</li>
                <li>Hệ thống sẽ tự động liên kết và đưa bạn thẳng vào không gian làm việc của <strong>Tavitax Group</strong>. *(Nếu là nhân sự mới chưa được add trước, hãy quét mã QR lời mời hoặc nhấp vào liên kết mời gia nhập của quản lý để chính thức vào tổ chức)*.</li>
              </ol>
              <div className="alert" style={{ margin: '12px 0 0 0', padding: '12px' }}>
                <div className="alert-title" style={{ fontSize: '0.8rem' }}>⚠️ Bật Quyền nhận Thông báo</div>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>Khi hệ điều hành điện thoại đưa ra câu hỏi cấp quyền, vui lòng chọn <strong>Cho phép (Allow)</strong> để các cuộc hội thoại khẩn cấp, cuộc gọi họp hay cập nhật công việc luôn được gửi đến bạn tức thời.</p>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">3</div>
            <div className="step-content">
              <h3>Tổng quan Giao diện chính trên Điện thoại</h3>
              <p>Giao diện di động được tối ưu với 4 phân vùng chính nằm ở thanh điều hướng dưới cùng màn hình (Bottom Navigation Bar):</p>
              <ul>
                <li><strong>Messenger (Tin nhắn):</strong> Nơi diễn ra mọi luồng giao tiếp cá nhân, chat nhóm, phòng ban và nhận thông báo từ hệ thống.</li>
                <li><strong>Workplace (Không gian làm việc):</strong> Trung tâm dịch vụ số chứa tất cả các ứng dụng nghiệp vụ bổ sung như Lark Base, tài liệu Docs, quy trình làm việc, biểu mẫu.</li>
                <li><strong>Calendar (Lịch làm việc):</strong> Xem lịch trình làm việc cá nhân, tạo sự kiện, đặt lịch họp trực tuyến hoặc kiểm tra thời gian biểu trống của đồng nghiệp.</li>
                <li><strong>Feeds / Contacts (Danh bạ):</strong> Tra cứu thông tin, chức vụ, bộ phận, số điện thoại của bất kỳ ai thuộc Tavitax Group chỉ trong vài giây.</li>
              </ul>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">4</div>
            <div className="step-content">
              <h3>Tương tác với Trợ lý AI (Tavibot) trên Điện thoại</h3>
              <p>Sử dụng AI di động giúp nâng cao hiệu suất làm việc ngoài văn phòng:</p>
              <ul>
                <li><strong>Trò chuyện riêng tư 1-1:</strong> Bấm vào thanh tìm kiếm ở đầu trang Messenger, gõ từ khóa <code>@Tavibot</code>, chọn Bot từ danh sách hiển thị để mở khung chat riêng. Tại đây bạn có thể hỏi đáp các quy định, giao task cá nhân hoặc nhờ AI soạn thảo.</li>
                <li><strong>Tag Bot trong Nhóm chat:</strong> Gõ <code>@Tavibot</code> trong bất kỳ nhóm chat công việc liên phòng ban nào kèm theo câu lệnh để Bot xử lý yêu cầu và trả kết quả hiển thị cho mọi người cùng theo dõi.</li>
                <li><strong>Sử dụng trả lời dạng Thread (Luồng phụ):</strong> Khi thảo luận về một thông báo hoặc nhiệm vụ trong nhóm chat, luôn nhấn giữ tin nhắn đó và chọn <code>Reply in Thread (Trả lời trong luồng)</code> để mở một cuộc trao đổi riêng biệt, giữ cho không gian chat chính luôn gọn gàng và không bị trôi thông tin.</li>
              </ul>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-icon">5</div>
            <div className="step-content">
              <h3>Thao tác trên Lark Base (Bitable) Quản trị Công việc</h3>
              <p>Quản lý tiến độ công việc liên phòng ban ngay trên lòng bàn tay của bạn:</p>
              <ul>
                <li><strong>Giao diện Kanban tối ưu hóa màn hình dọc:</strong> Truy cập <code>Workplace &gt; Base</code> và mở bảng Quản trị công việc của Tavitax. Giao diện bảng Kanban tự động chuyển sang cấu trúc thẻ dọc. Bạn chỉ cần nhấn giữ vào một thẻ công việc và vuốt kéo nhẹ sang trái hoặc phải để thay đổi <strong>Trạng thái</strong> công việc nhanh chóng (ví dụ: chuyển từ <code>🔴 Cần làm</code> sang <code>🟡 Đang làm</code>).</li>
                <li><strong>Popup chi tiết thẻ công việc:</strong> Nhấn nhẹ vào bất kỳ thẻ công việc nào, một cửa sổ popup chứa toàn bộ thông tin chi tiết sẽ mở ra. Bạn có thể dễ dàng thay đổi mức độ ưu tiên, người phụ trách hoặc chỉnh sửa hạn chót nhanh gọn.</li>
                <li><strong>Đính kèm ảnh kết quả trực tiếp từ Camera điện thoại:</strong> Khi cần cập nhật kết quả công việc, nhấn vào trường dữ liệu <strong>Attachment (Tệp đính kèm)</strong> trên thẻ công việc, chọn <code>Camera (Máy ảnh)</code> để chụp trực tiếp hóa đơn, biên lai hay ảnh nghiệm thu thực tế để tải lên Base ngay lập tức.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <hr style={{ border: 'none', borderBottom: '1px solid var(--border-color)', margin: '40px 0' }} />

      <h2>💬 1. Lark Messenger (Nhắn tin) & Quy chuẩn Giao tiếp Tavitax</h2>
      <p>Lark Messenger không chỉ đơn thuần là công cụ chat thông thường, mà là <strong>hệ thống quản lý thông tin tập trung</strong> giúp hạn chế tối đa việc phân tán dữ liệu và giảm tải ô nhiễm tiếng ồn thông báo.</p>
      
      <div className="alert" style={{ background: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '16px', borderRadius: '4px' }}>
        <div className="alert-title" style={{ color: '#1d4ed8' }}>📌 TẠI SAO TAVITAX CẤM SỬ DỤNG ZALO CHO CÔNG VIỆC?</div>
        <table style={{ margin: '10px 0', border: '1px solid #bfdbfe' }}>
          <thead>
            <tr style={{ background: '#dbeafe' }}>
              <th style={{ padding: '8px 12px', fontSize: '0.9rem' }}>Tiêu chí</th>
              <th style={{ padding: '8px 12px', fontSize: '0.9rem' }}>Zalo (Hạn chế)</th>
              <th style={{ padding: '8px 12px', fontSize: '0.9rem', color: '#1d4ed8' }}>Lark Messenger (Ưu việt)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem' }}><strong>Lưu trữ file</strong></td>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem', color: '#991b1b' }}>Tự động xóa file sau vài tuần (Trôi file)</td>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem', color: '#166534' }}>Lưu trữ vĩnh viễn trên đám mây</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem' }}><strong>Bảo mật dữ liệu</strong></td>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem', color: '#991b1b' }}>Dễ bị lộ khi mất điện thoại/đăng nhập thiết bị mới</td>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem', color: '#166534' }}>Mã hóa doanh nghiệp, thu hồi quyền khi nhân sự nghỉ</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem' }}><strong>Luồng thảo luận</strong></td>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem', color: '#991b1b' }}>Bị trôi tin nhắn liên tục, lẫn lộn các chủ đề</td>
              <td style={{ padding: '8px 12px', fontSize: '0.85rem', color: '#166534' }}>Phân luồng sâu bằng Thread cực kỳ ngăn nắp</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Các Quy tắc Vàng khi Giao tiếp trên Lark tại Tavitax:</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong>Luôn sử dụng Trả lời trong Luồng (Reply in Thread):</strong> 
          <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>Khi thảo luận về một thông báo, nhiệm vụ hoặc tài liệu, tuyệt đối không chat tự do ở khung chat chính. Hãy nhấp đúp vào tin nhắn đó và chọn <code>Reply in Thread</code>. Việc này giúp thu gom mọi ý kiến đóng góp vào một luồng duy nhất, tránh làm phiền các thành viên khác không liên quan.</p>
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Quy tắc Thả biểu cảm cảm xúc (Emoji Reactions):</strong> 
          <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>Để tránh làm loãng nhóm chat bằng hàng chục tin nhắn thừa như *"Dạ"*, *"Em đã nhận"*, *"Ok"*, hãy sử dụng biểu cảm 👍 hoặc 👌 trực tiếp trên tin nhắn. Quản lý sẽ nhìn thấy danh sách người thả cảm xúc để biết ai đã đọc thông tin.</p>
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Ghim Tab nhóm chat thông minh:</strong> 
          <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>Ở đầu mỗi nhóm chat nghiệp vụ, luôn có các liên kết quan trọng được ghim lại (như bảng Base công việc, file Docs hướng dẫn). Hãy bấm vào thanh ghim đầu phòng chat để truy cập nhanh tài liệu thay vì nhắn tin hỏi xin link lại.</p>
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Đặt chế độ Thông báo & Trạng thái:</strong> 
          <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>Khi đi họp hoặc tập trung xử lý số liệu, hãy chuyển trạng thái Lark sang <code>Do Not Disturb</code> hoặc <code>In a Meeting</code>. Lark sẽ tự động chặn thông báo phiền toái và hiển thị biểu tượng báo cho đồng nghiệp biết.</p>
        </li>
      </ul>

      <h2>📊 2. Lark Base (Cơ sở dữ liệu Bitable) - Quản trị Công việc Kỷ nguyên Mới</h2>
      <p>Lark Base (Bitable) là cuộc cách mạng thay thế cho Excel truyền thống, đóng vai trò là "trái tim" trong mọi quy trình phối hợp chéo phòng ban tại Tavitax.</p>
      
      <div className="info-grid">
        <div className="info-card">
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Table size={18} /> Chế độ Bảng (Grid View)</h4>
          <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>Nơi tổng hợp dữ liệu khổng lồ. Hỗ trợ lọc (Filter), Sắp xếp (Sort) và Nhóm (Group) linh hoạt theo phòng ban, hạn chót hay mức độ ưu tiên mà không ảnh hưởng đến góc nhìn của người khác.</p>
        </div>
        <div className="info-card">
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Zap size={18} /> Chế độ Thẻ (Kanban View)</h4>
          <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>Chuyển đổi giao diện thành các thẻ công việc trực quan. Bạn chỉ cần <strong>kéo và thả</strong> một thẻ từ cột <code>🔴 Cần làm</code> sang cột <code>🟡 Đang làm</code> hoặc <code>🟢 Hoàn thành</code> để cập nhật trạng thái cực kỳ mượt mà.</p>
        </div>
        <div className="info-card">
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Table size={18} /> Liên thông Dữ liệu (Relation Link)</h4>
          <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>Không còn việc sao chép dữ liệu thủ công. Bảng "Task List" được kết nối trực tiếp với bảng "Dự án & Chiến dịch", tự động cập nhật tiến độ phần trăm dự án dựa trên số lượng task hoàn thành.</p>
        </div>
      </div>

      <div className="alert" style={{ background: '#f0fdf4', borderLeft: '4px solid #22c55e' }}>
        <div className="alert-title" style={{ color: '#166534' }}>💡 QUY TRÌNH PHỐI HỢP CÔNG VIỆC TRÊN BASE TẠI TAVITAX:</div>
        <ol style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '0.95rem' }}>
          <li style={{ marginBottom: '6px' }}><strong>Giao việc:</strong> Tạo dòng mới, ghi rõ tên công việc, tag nhân sự phụ trách tại cột <code>People</code>, đặt mức độ ưu tiên (P0-P3) và chọn <code>Hạn chót</code>.</li>
          <li style={{ marginBottom: '6px' }}><strong>Tiến hành:</strong> Nhân sự nhận việc chuyển trạng thái sang <code>🟡 Đang làm</code>. Mọi trao đổi chi tiết sẽ bình luận ngay trong thẻ công việc đó.</li>
          <li style={{ marginBottom: '6px' }}><strong>Nghiệm thu:</strong> Đính kèm kết quả (ảnh chụp, hóa đơn, file báo cáo) vào cột <code>Attachment</code> và chuyển sang <code>🟢 Hoàn thành</code>. Hệ thống sẽ tự động bắn tin nhắn báo cho người giao việc biết.</li>
        </ol>
      </div>

      <h2>📅 3. Lark Calendar & Approval - Số hóa Lịch trình & Phê duyệt</h2>
      <p>Loại bỏ hoàn toàn các loại văn bản giấy, đơn từ bản cứng và các buổi họp trùng lịch phức tạp.</p>

      <h3>🗓️ Lark Calendar (Quản lý Thời gian Thông minh):</h3>
      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={{ marginBottom: '10px' }}>
          <strong>Tính năng Find a Time (Tìm giờ rảnh chung):</strong>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>Khi cần lên lịch họp với nhiều người, thay vì nhắn tin hỏi từng người rảnh lúc nào, hãy tạo sự kiện trên Lark Calendar, thêm toàn bộ thành viên dự họp và bấm <code>Find a Time</code>. Hệ thống sẽ quét lịch làm việc của tất cả mọi người và tự động tô xanh các khung giờ trống chung.</p>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong>Phòng họp số Lark Meeting:</strong>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem' }}>Hệ thống tự động chèn liên kết phòng họp trực tuyến độ nét cao vào lịch hẹn. Người tham gia chỉ cần bấm <code>Join Meeting</code> ngay trên thông báo lịch để bắt đầu họp mà không cần mật khẩu.</p>
        </li>
      </ul>

      <h3>✍️ Lark Approval (Phê duyệt Tự động Không giấy tờ):</h3>
      <p>Để xin nghỉ phép, xin tạm ứng chi phí công tác hay đề xuất mua sắm trang thiết bị, toàn bộ nhân sự thực hiện qua quy trình 4 bước:</p>
      <ol style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li>Mở ứng dụng Lark, truy cập vào <code>Workplace &gt; Approval</code>.</li>
        <li>Chọn đúng loại đơn tương ứng (ví dụ: *Đơn nghỉ phép*, *Yêu cầu thanh toán*).</li>
        <li>Điền đầy đủ thông tin vào biểu mẫu, đính kèm chứng từ cần thiết (hóa đơn, vé tàu xe...).</li>
        <li>Chọn Quản lý trực tiếp phê duyệt và nhấn <code>Submit</code>. Đơn sẽ tự động chuyển đến tài khoản của quản lý dưới dạng tin nhắn khẩn, quản lý chỉ cần bấm <code>Approve</code> ngay lập tức trên điện thoại.</li>
      </ol>

      <h2>🤖 4. Khai phá Sức mạnh Trợ lý Ảo AI (Tavibot)</h2>
      <div className="alert" style={{ background: '#fdf2f8', borderLeft: '4px solid #db2777' }}>
        <div className="alert-title" style={{ color: '#9d174d' }}>🌟 TAVIBOT - NGƯỜI ĐỒNG HÀNH AI ĐẮC LỰC</div>
        <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>Tavibot không phải là một chatbot thông thường. Đây là một trợ lý AI sâu sắc được huấn luyện riêng trên cơ sở tri thức của Tavitax Group, có khả năng giúp bạn xử lý tác vụ văn phòng, tra cứu quy định và làm việc trực tiếp với Lark Base công ty.</p>
      </div>

      <h3>Các Kịch bản Ứng dụng Thực tế với Tavibot:</h3>
      <table style={{ margin: '20px 0', border: '1px solid #fbcfe8' }}>
        <thead>
          <tr style={{ background: '#fce7f3' }}>
            <th style={{ padding: '12px', fontSize: '0.9rem', width: '30%' }}>Tác vụ bạn muốn làm</th>
            <th style={{ padding: '12px', fontSize: '0.9rem', color: '#9d174d' }}>Cách tương tác và câu lệnh mẫu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', fontSize: '0.85rem' }}><strong>Tạo nhanh công việc trên Base</strong></td>
            <td style={{ padding: '12px', fontSize: '0.85rem' }}>
              Chat 1-1 hoặc Tag bot kèm câu lệnh: <br />
              <code>Tạo công việc "Soạn thảo kịch bản sales mới", người thực hiện @Nguyễn Văn A, hạn chót ngày 25/05.</code>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', fontSize: '0.85rem' }}><strong>Tra cứu quy định, chính sách công ty</strong></td>
            <td style={{ padding: '12px', fontSize: '0.85rem' }}>
              Hỏi trực tiếp Bot bằng ngôn ngữ tự nhiên: <br />
              <code>Quy định thanh toán chi phí tiếp khách của công ty như thế nào vậy Bot?</code> hoặc <code>Chính sách thử việc của nhân viên kinh doanh.</code>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '12px', fontSize: '0.85rem' }}><strong>Trợ giúp soạn thảo & Biên dịch tài liệu</strong></td>
            <td style={{ padding: '12px', fontSize: '0.85rem' }}>
              Yêu cầu Bot viết lách: <br />
              <code>Viết hộ tôi một email gửi khách hàng để xin lỗi vì giao hàng trễ hạn 1 ngày do thời tiết.</code> hoặc <code>Dịch đoạn văn bản này sang tiếng Anh chuyên ngành kế toán.</code>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="alert" style={{ background: '#fffbeb', borderLeft: '4px solid #d97706' }}>
        <div className="alert-title" style={{ color: '#b45309' }}>💡 MẸO SỬ DỤNG AI ĐẠT HIỆU QUẢ CAO NHẤT</div>
        <ul style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '0.9rem' }}>
          <li style={{ marginBottom: '6px' }}><strong>Tag Bot trong nhóm:</strong> Khi muốn cả nhóm cùng nhìn thấy câu trả lời của AI hoặc cần Bot xử lý dữ liệu chung, hãy gõ <code>@Tavibot</code> kèm câu hỏi trong nhóm.</li>
          <li style={{ marginBottom: '6px' }}><strong>Chat riêng tư 1-1:</strong> Hãy dùng kênh chat riêng với Bot để nháp văn bản, hỏi đáp quy định mang tính cá nhân, giúp giữ không gian làm việc của phòng ban luôn gọn gàng và bảo mật.</li>
        </ul>
      </div>
    </div>
  );
};

export default LarkBasics;
