# CMUC 4: Update Item (Cập nhật bản ghi)

## 1. Thông tin chung (Overview)
- **ID:** CMUC 4
- **Mục tiêu (Objective):**
  Chức năng này cho phép người dùng cập nhật bản ghi.
- **Tác nhân (Actor):**
  - All roles (theo từng UC cụ thể)

## 2. Kích hoạt & Tiền điều kiện (Trigger & Pre-conditions)
- **Trigger:**
  Người dùng chọn để cập nhật bản ghi.

- **Pre-conditions:**
  - Người dùng đăng nhập thành công.

## 3. Hậu điều kiện (Post-conditions)
- Bản ghi được cập nhật thành công.

## 4. Luồng sự kiện (Activity Flow)
| Bước | Người dùng (User) | Hệ thống (System) |
| :--- | :--- | :--- |
| 1 | Chọn cập nhật | |
| 2 | | Hiển thị màn hình cập nhật |
| 3 | Thay đổi dữ liệu | |
| 4 | | Hiển thị xác nhận |
| 5 | Xác nhận | |
| 6 | | Kiểm tra và thực hiện cập nhật |

## 5. Quy tắc nghiệp vụ (Business Rules)
| Bước liên quan | Mã BR | Mô tả chi tiết |
| :--- | :--- | :--- |
| (2) | BR 23 | **Screen Displaying Rules:** Hiển thị màn hình cập nhật. |
| (4) | BR 24 | **Confirmation:** Hiển thị CFD 7. |
| (6) | BR 25 | **Validating Rules:** Kiểm tra các trường bắt buộc (IEM 1). |
| (7) | BR 26 | **Updating Rules:** Lưu thay đổi, cập nhật audit trail (CBR1), hiển thị SCD 9. |
