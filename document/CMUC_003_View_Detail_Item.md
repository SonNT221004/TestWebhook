# CMUC 3: View Detail Item (Xem chi tiết bản ghi)

## 1. Thông tin chung (Overview)
- **ID:** CMUC 3
- **Mục tiêu (Objective):**
  Chức năng này cho phép người dùng xem chi tiết bản ghi.
- **Tác nhân (Actor):**
  - All roles (theo từng UC cụ thể)

## 2. Kích hoạt & Tiền điều kiện (Trigger & Pre-conditions)
- **Trigger:**
  Người dùng chọn để xem chi tiết bản ghi.

- **Pre-conditions:**
  - Người dùng đăng nhập thành công.

## 3. Hậu điều kiện (Post-conditions)
- Màn hình xem chi tiết bản ghi được hiển thị.

## 4. Luồng sự kiện (Activity Flow)
| Bước | Người dùng (User) | Hệ thống (System) |
| :--- | :--- | :--- |
| 1 | Chọn xem chi tiết | |
| 2 | | Hiển thị màn hình chi tiết |

## 5. Quy tắc nghiệp vụ (Business Rules)
| Bước liên quan | Mã BR | Mô tả chi tiết |
| :--- | :--- | :--- |
| (2) | BR 27 | **Screen Displaying Rules:** Hiển thị màn hình chi tiết trong chế độ chỉ xem (view mode). |
