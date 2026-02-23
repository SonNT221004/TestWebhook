# CMUC 2: Create Item (Tạo mới bản ghi)

## 1. Thông tin chung (Overview)
- **ID:** CMUC 2
- **Mục tiêu (Objective):**
  Chức năng này cho phép người dùng tạo mới bản ghi.
- **Tác nhân (Actor):**
  - All roles (theo từng UC cụ thể)

## 2. Kích hoạt & Tiền điều kiện (Trigger & Pre-conditions)
- **Trigger:**
  Người dùng chọn để tạo mới bản ghi.

- **Pre-conditions:**
  - Người dùng đăng nhập thành công.

## 3. Hậu điều kiện (Post-conditions)
- Bản ghi mới được tạo thành công.

## 4. Luồng sự kiện (Activity Flow)
| Bước | Người dùng (User) | Hệ thống (System) |
| :--- | :--- | :--- |
| 1 | Chọn tạo mới | |
| 2 | | Hiển thị màn hình tạo mới |
| 3 | Nhập dữ liệu | |
| 4 | | Hiển thị xác nhận |
| 5 | Xác nhận | |
| 6 | | Kiểm tra và thực hiện tạo mới |

## 5. Quy tắc nghiệp vụ (Business Rules)
| Bước liên quan | Mã BR | Mô tả chi tiết |
| :--- | :--- | :--- |
| (2) | BR 23 | **Screen Displaying Rules:** Hiển thị màn hình tạo mới. |
| (4) | BR 24 | **Confirmation:** Hiển thị CFD 6. |
| (6) | BR 25 | **Validating Rules:** Kiểm tra các trường bắt buộc (IEM 1). |
| (7) | BR 26 | **Creating Rules:** Lưu dữ liệu, cập nhật audit trail (CBR1), hiển thị SCD 8. |
