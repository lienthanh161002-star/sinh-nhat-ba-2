# website-chuc-mung-sinh-nhat
Một website sinh nhật tương tác, tương thích nhiều kích thước màn hình, được tạo để lưu giữ những khoảnh khắc đặc biệt với lời chúc cá nhân hóa, hiệu ứng động, thư viện ảnh và những lời nhắn đáng nhớ. Website sử dụng các công nghệ web hiện đại để tạo nên trải nghiệm sinh nhật vui tươi, lôi cuốn và đẹp mắt.

# 🎂 Website bất ngờ sinh nhật

Website chúc mừng sinh nhật nhiều trang, được xây dựng bằng HTML, CSS và JavaScript thuần. Website có khu vực mã khóa bí mật, bánh kem động, bảng lời chúc, thư viện ảnh, trình phát nhạc và video lời nhắn đặc biệt — tất cả trong giao diện kính tối đầy ấn tượng.

---

## 🌟 Luồng truy cập

```
index.html  ──▶  cake.html  ──▶  celebration.html  ──▶  gallery.html  ──▶  video.html
 (Nhập mã)       (Đang tải)       (Chúc mừng)          (Ảnh + nhạc)     (Video lời nhắn)
```

---

## 📁 Các tệp trong dự án

### `birthday-website.html` — 🎉 Bản tất cả trong một tệp
> Phiên bản gốc, tự chứa toàn bộ website sinh nhật trong **một tệp duy nhất**.

**Tệp này có gì:**
- Chứa **toàn bộ trải nghiệm sinh nhật** — CSS, JavaScript và HTML được gộp vào cùng một tệp (khoảng 93 KB, 2.993 dòng).
- Không cần tệp bên ngoài (ngoại trừ ảnh/video) — mở trực tiếp bằng trình duyệt là có thể dùng ngay.
- Bao gồm các phần sau trên một trang dài có thể cuộn:
  - 🎈 **Phần mở đầu** — tên động, bóng bay, hiệu ứng phát sáng và nút kêu gọi thao tác
  - 🔢 **Bộ đếm tuổi** — con số tuổi lớn với phần hậu tố kiểu chữ viết tay
  - ⏱️ **Đồng hồ đếm ngược sinh nhật** — đếm trực tiếp theo ngày/giờ/phút/giây
  - 🕯️ **Bánh kem ảo tương tác** — chạm vào lửa nến để thổi tắt, kèm âm thanh và khói
  - 🎁 **Hộp quà** — hiệu ứng mở hộp 3D để lộ lá thư viết tay dành riêng cho người nhận
  - 📌 **Bảng lời chúc** — lời chúc sinh nhật của gia đình trên các mẩu giấy nhiều màu
  - Và nhiều nội dung khác...

**So sánh với phiên bản nhiều trang:**

| Tính năng | `birthday-website.html` | Phiên bản nhiều trang |
|---|---|---|
| Cấu trúc | Một tệp duy nhất, tất cả trong một | 5 trang HTML riêng biệt |
| CSS | Nằm trong thẻ `<style>` | Tệp `style.css` bên ngoài |
| JavaScript | Nằm trong các thẻ `<script>` | Tệp `shared.js` bên ngoài |
| Mã khóa | ❌ Không có màn hình khóa | ✅ Nhập mã tại `index.html` |
| Phù hợp khi | Muốn chia sẻ một tệp duy nhất | Muốn trải nghiệm đầy đủ / đăng lên GitHub Pages |

> 💡 **Nên dùng bản nào?** Chọn `birthday-website.html` nếu bạn chỉ muốn chia sẻ một tệp. Dùng bản nhiều trang nếu muốn trải nghiệm đầy đủ với khu vực mã khóa bí mật.

---

### `index.html` — 🔐 Trang nhập mã (điểm bắt đầu)
> Trang đầu tiên người nhận sinh nhật nhìn thấy.

**Trang này có gì:**
- Bố cục **chia đôi màn hình** — ảnh bìa lớn bên trái và thẻ nhập mã ở bên phải.
- Người xem cần nhập **mã bí mật gồm 6 chữ số** (`110615`) để mở bất ngờ.
- Tự chuyển sang ô nhập số tiếp theo sau khi nhập mỗi chữ số.
- Có nút **“Tiết lộ gợi ý mã”** để hiện mã lớn với hiệu ứng phát sáng (hữu ích khi người nhận cần gợi ý).
- Nhập đúng mã sẽ chạy hiệu ứng pháo hoa + kim tuyến và âm báo thành công, sau đó chuyển đến `cake.html` sau 2,5 giây.
- Nhập sai mã sẽ hiện thông báo lỗi và tô đỏ các ô nhập.

**Các chỗ có thể tùy chỉnh:**

| Nội dung cần đổi | Vị trí |
|---|---|
| Mã khóa đúng | `const correctCode = "110615";` (dòng 80) |
| Ảnh bìa ở khung bên trái | `<img src="pic4.jpg" ...>` (dòng 27) |
| Dòng mô tả | Tự cập nhật từ cấu hình trong `shared.js` |

---

### `cake.html` — 🎂 Màn hình đang tải / làm bánh (trang 2)
> Màn hình chuyển tiếp vui nhộn với hiệu ứng động, xuất hiện sau khi nhập mã.

**Trang này có gì:**
- Hình minh họa bánh sinh nhật **SVG vẽ tay**, nhún lên xuống.
- **Thanh tiến trình** chạy từ 0% đến 100% trong khoảng 3,5 giây.
- Cập nhật trạng thái tải ở các mốc tiến trình khác nhau (ví dụ: *“Đang trộn bột bánh sinh nhật...”*, *“Đang thắp nến ảo...”*).
- Phát âm báo thành công khi tải xong.
- Tự chuyển sang `celebration.html` khi thanh tiến trình đạt 100%.

**Các chỗ có thể tùy chỉnh:**

| Nội dung cần đổi | Vị trí |
|---|---|
| Thời gian tải | `const duration = 3500;` (tính bằng mili giây) |
| Các dòng trạng thái | Mảng `statusUpdates` |
| Tên người nhận trong tiêu đề | Lấy từ cấu hình `shared.js` (`activeConfig.name`) |

---

### `celebration.html` — 🎉 Trang chúc mừng chính (trang 3)
> Trung tâm của trải nghiệm — lời chúc sinh nhật lớn, bánh kem tương tác và bảng lời chúc.

**Trang này có gì:**
- Tiêu đề lớn **“CHÚC MỪNG SINH NHẬT HANNUUU”** với chữ chuyển sắc phát sáng.
- **Bánh kem ảo tương tác** có 5 ngọn nến có thể chạm vào — mỗi ngọn lửa tắt kèm khói và âm thanh thổi.
- Nút **“Ước một điều và thổi nến”** thổi tắt toàn bộ nến, tạo hiệu ứng sao băng và thêm điều ước bí mật lên bảng.
- **Bảng lời chúc bằng giấy ghi chú** hiển thị 7 lời chúc cá nhân hóa từ các thành viên gia đình (Ishaan, Ba, Mẹ, Ông bà, Arhaan, Tulya, Atta) — mỗi lời chúc dùng một ảnh nền khác nhau (`wp1.jpg` đến `wp7.jpg`).
- **Ngăn tùy chỉnh** dạng bảng trượt cho phép đổi tông màu và tên người nhận; các thay đổi được lưu trong `localStorage`.
- Bóng bay chuyển động bay lên ở nền.
- Nhấn **“Cùng ba nhìn lại những kỷ niệm”** để đến `gallery.html`.

**Các chỗ có thể tùy chỉnh:**

| Nội dung cần đổi | Vị trí |
|---|---|
| Tên người nhận sinh nhật | `shared.js` → `DEFAULT_CONFIG.name` |
| Dòng mô tả ở phần mở đầu | `shared.js` → `DEFAULT_CONFIG.heroSubtext` |
| Nội dung và người gửi lời chúc | Mảng `shared.js` → `DEFAULT_CONFIG.wishes` |
| Ảnh nền giấy ghi chú | Thay các tệp `wp1.jpg` đến `wp7.jpg` trong thư mục |

---

### `gallery.html` — 📸 Thư viện ảnh + nhạc + dòng thời gian (trang 4)
> Khu vực kỷ niệm với thanh trượt ảnh kiểu Polaroid, trình phát nhạc và dòng thời gian cuộc đời.

**Trang này có gì:**
- **Thanh trượt ảnh Polaroid** — hiển thị ảnh trong mảng `activeConfig.photos` dưới dạng thẻ Polaroid hơi xoay, có chú thích. Dùng nút mũi tên ← → hoặc các chấm để chuyển ảnh.
- **Trình phát nhạc Web Audio** — phát giai điệu “Chúc mừng sinh nhật” bằng Web Audio API của trình duyệt (không cần tệp ngoài). Có nút Phát/Tạm dừng, Phát lại từ đầu và Nốt ngẫu nhiên; kèm thanh tiến trình động và ảnh bìa xoay.
- **Dòng thời gian cuộc đời** — hiển thị các thẻ dấu mốc cho từng năm được khai báo trong `shared.js` (2015 → 2026), xếp dọc cùng biểu tượng, tiêu đề và mô tả.
- **Ngăn tùy chỉnh** — cho phép tải ảnh Polaroid mới, tải video và đổi tên/mô tả bài nhạc. Cài đặt được lưu trong `localStorage`.
- Nhấn **“Xem video lời nhắn bí mật”** để đến `video.html`.

**Các chỗ có thể tùy chỉnh:**

| Nội dung cần đổi | Vị trí |
|---|---|
| Ảnh mặc định trong thư viện | Mảng `shared.js` → `DEFAULT_CONFIG.photos` (tên tệp như `pic1.jpg`) |
| Các mốc dòng thời gian | Mảng `shared.js` → `DEFAULT_CONFIG.timeline` |
| Tên bài nhạc hiển thị | `shared.js` → `DEFAULT_CONFIG.musicTitle` và `musicArtist` |
| Chú thích ảnh | Mảng `photoCaptions` trong script của `gallery.html` |

---

### `video.html` — 🎥 Video lời nhắn bí mật (trang 5)
> Bất ngờ cuối cùng — video lời nhắn sinh nhật đặc biệt.

**Trang này có gì:**
- Thẻ trình phát video **hiệu ứng kính** phát tệp `11.mp4` theo mặc định.
- Video phát với **âm lượng đầy đủ** và có các điều khiển thông thường (phát, tạm dừng, tua, toàn màn hình).
- **Ngăn tùy chỉnh** cho phép tải video khác để thay video sinh nhật (tệp dưới 3,5 MB được lưu vào `localStorage`; tệp lớn hơn chỉ phát trong phiên hiện tại).
- Nút điều hướng cho phép quay **“Trở lại kỷ niệm”** (thư viện) hoặc **“Về trang mở khóa”** (quay lại index).
- Lời chào trong tiêu đề trang tự cập nhật theo tên người nhận trong cấu hình.

**Các chỗ có thể tùy chỉnh:**

| Nội dung cần đổi | Vị trí |
|---|---|
| Video mặc định | Thay tệp `11.mp4` trong thư mục dự án |
| Tên người nhận trong tiêu đề | Lấy từ cấu hình `shared.js` |

---

### `shared.js` — ⚙️ Cấu hình chung và tiện ích (bộ não chính)
> Được mọi trang tải vào. Chứa dữ liệu dùng chung, cấu hình và các hàm có thể tái sử dụng.

**Nội dung chính:**

#### Đối tượng `DEFAULT_CONFIG` — nơi chỉnh sửa nội dung:

| Trường | Mô tả |
|---|---|
| `name` | Tên người được chúc mừng (ví dụ: `"hannu"`) |
| `age` / `ageSuffix` | Số tuổi và hậu tố (ví dụ: `11`, `"st"`) |
| `birthdayDate` | Chuỗi ngày sinh để hiển thị |
| `heroSubtext` | Dòng giới thiệu trên trang chúc mừng |
| `message` | Nội dung thư/lời nhắn riêng |
| `messageSig` | Dòng ký tên cuối lời nhắn |
| `musicTitle` / `musicArtist` | Tên bài nhạc và nghệ sĩ hiển thị trong trình phát |
| `theme` | Tông màu mặc định (`"rose"`, `"cosmic"`, `"emerald"`, `"retro"`) |
| `wishes` | Mảng lời chúc — mỗi mục có `icon`, `text`, `author`, `color` |
| `timeline` | Mảng dấu mốc cuộc đời — mỗi mục có `year`, `icon`, `title`, `desc` |
| `photos` | Mảng tên tệp ảnh dùng trong thanh trượt thư viện |

#### Các hàm tiện ích dùng chung:

| Hàm | Tác dụng |
|---|---|
| `saveConfig()` | Lưu `activeConfig` vào `localStorage` |
| `applyTheme(name)` | Đặt thuộc tính CSS `data-theme` để đổi bảng màu |
| `initCursor()` | Khởi chạy hiệu ứng con trỏ tùy chỉnh và vòng sáng đuổi theo |
| `initBackgroundCanvas()` | Vẽ hạt sáng chuyển động và pháo hoa trên canvas |
| `launchConfetti()` | Tạo các mảnh kim tuyến nhiều màu rơi từ đầu màn hình |
| `initAudio()` | Khởi tạo ngữ cảnh Web Audio API |
| `playBlowSound()` | Phát âm thanh thổi ngắn bằng nhiễu trắng tổng hợp |
| `playSuccessChime()` | Phát chuỗi 4 nốt đi lên (C→E→G→C) |

---

### `style.css` — 🎨 Tệp định kiểu chung (toàn bộ giao diện)
> Một tệp định kiểu thống nhất được mọi trang sử dụng.

**Tệp này định dạng:**
- **Biến CSS tùy chỉnh** — hệ thống màu cho 4 chủ đề: `rose` (mặc định), `cosmic`, `emerald`, `retro`. Màu sắc, phông chữ, bóng đổ và hiệu ứng kính đều được khai báo dưới dạng biến.
- **Hiệu ứng chuyển động khung hình** — `floatGlow`, `fadeUp`, `fadeDown`, `flicker` (lửa nến), `heartbeat`, `riseUp` (bóng bay), `confettiFall`, `pulseGlow`, `floatUpStar`, `shake`.
- **Con trỏ tùy chỉnh** — chấm tròn và vòng sáng đuổi theo chuột, có hiệu ứng khi rê lên phần tử.
- **Canvas nền** — canvas cố định phủ toàn màn hình để tạo hiệu ứng hạt chuyển động.
- **Bố cục riêng cho từng trang:**
  - **Trang 1** — bố cục chia đôi để nhập mã, các ô nhập số và lớp phủ mã khóa.
  - **Trang 2** — màn hình đang tải/làm bánh, bánh SVG chuyển động và thanh tiến trình.
  - **Trang 3** — phần mở đầu sinh nhật, bánh kem và nến tương tác, bảng lời chúc.
  - **Trang 4** — thanh trượt ảnh Polaroid, trình phát nhạc, dòng thời gian và ngăn tùy chỉnh.
  - **Trang 5** — thẻ trình phát video (dùng lại kiểu dáng trình phát nhạc).
- **Thiết kế tương thích nhiều kích thước màn hình** — dùng `clamp()` để cỡ chữ thay đổi linh hoạt, bố cục thân thiện với điện thoại.
- **Google Fonts** — `Outfit` (tiêu đề), `DM Sans` (nội dung), `Dancing Script` (chữ viết tay).

---

## 🗂️ Các tệp ảnh/video

| Tệp | Được dùng bởi | Mục đích |
|---|---|---|
| `pic1.jpg` – `pic8.jpg`, `pic77.jpg` | `shared.js`, `gallery.html` | Ảnh trong thanh trượt thư viện Polaroid |
| `wp1.jpg` – `wp7.jpg` | `celebration.html` | Ảnh nền cho các thẻ lời chúc |
| `11.mp4` | `video.html` | Video lời nhắn sinh nhật mặc định |

> ℹ️ Muốn thay ảnh, chỉ cần đặt ảnh mới vào thư mục dự án với **cùng tên tệp**. Muốn đổi ảnh xuất hiện trong thư viện, hãy sửa mảng `photos` trong `shared.js`.

---

## 🚀 Cách chạy

Đây là dự án **HTML/CSS/JS thuần** — không cần công cụ build hay cài thư viện!

1. Tải xuống hoặc clone kho mã nguồn này.
2. Mở `index.html` bằng trình duyệt hiện đại như Chrome, Edge hoặc Firefox.
3. Nhập mã `110615` để bắt đầu.

> **Lưu ý:** Một số trình duyệt có thể chặn truy cập tệp video/âm thanh khi mở trang trực tiếp từ máy. Nếu video không chạy, hãy thử chạy máy chủ cục bộ (ví dụ tiện ích Live Server trong VS Code).

---

## 🎨 Các chủ đề màu

Đổi chủ đề bằng **Ngăn tùy chỉnh** (nút ✨, xuất hiện ở các trang chúc mừng/thư viện/video):

| Chủ đề | Màu chính | Phong cách |
|---|---|---|
| 🌸 Hoa hồng | Hồng `#ff4f7b` | Lãng mạn và ấm áp (mặc định) |
| 🌌 Vũ trụ | Tím `#e0aaff` | Mơ màng và huyền ảo |
| 🌿 Ngọc lục bảo | Xanh lá `#52b788` | Tươi mới và tự nhiên |
| ⚡ Hoài cổ | Neon `#ff007f` | Nổi bật và rực rỡ |

---

## 🛠️ Công nghệ sử dụng

- **HTML5** — cấu trúc ngữ nghĩa trên 6 trang
- **CSS3** — hiệu ứng kính, biến CSS, chuyển động khung hình và bố cục tương thích nhiều màn hình
- **JavaScript thuần** — Web Audio API, Canvas API, IntersectionObserver, localStorage
- **Google Fonts** — Outfit, DM Sans, Dancing Script
- **Không framework, không thư viện phụ thuộc, không cần bước build**

---

*Được làm bằng 💖 như một món quà sinh nhật đặc biệt.*
