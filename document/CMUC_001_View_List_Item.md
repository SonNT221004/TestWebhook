# CMUC 1: View List Item (Xem danh sách bản ghi)

## 1. Thông tin chung (Overview)
- **ID:** CMUC 1
- **Mục tiêu (Objective):**
  Chức năng này cho phép người dùng xem được danh sách các bản ghi.
- **Tác nhân (Actor):**
  - All roles (theo từng UC cụ thể)

## 2. Kích hoạt & Tiền điều kiện (Trigger & Pre-conditions)
- **Trigger:**
  Người dùng chọn để xem danh sách các bản ghi.

- **Pre-conditions:**
  - Người dùng đăng nhập thành công.

## 3. Hậu điều kiện (Post-conditions)
- Danh sách các bản ghi được hiển thị.

## 4. Luồng sự kiện (Activity Flow)
| Bước | Người dùng (User) | Hệ thống (System) |
| :--- | :--- | :--- |
| 1 | Yêu cầu xem danh sách | |
| 2 | | Hiển thị màn hình danh sách |

## 5. Quy tắc nghiệp vụ (Business Rules)
| Bước liên quan | Mã BR | Mô tả chi tiết |
| :--- | :--- | :--- |
| (2) | BR 22 | **Screen Displaying Rules:** Hệ thống hiển thị màn hình danh sách các bản ghi tương ứng. |
