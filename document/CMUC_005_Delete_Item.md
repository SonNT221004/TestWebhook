# CMUC 5: Delete Item (Xóa bản ghi)

## 1. Thông tin chung (Overview)
- **ID:** CMUC 5
- **Mục tiêu (Objective):**
  Chức năng này cho phép người xóa bản ghi.
- **Tác nhân (Actor):**
  - All roles (theo từng UC cụ thể)

## 2. Kích hoạt & Tiền điều kiện (Trigger & Pre-conditions)
- **Trigger:**
  Người dùng chọn để xóa bản ghi.

- **Pre-conditions:**
  - Người dùng đăng nhập thành công.

## 3. Hậu điều kiện (Post-conditions)
- Bản ghi được xóa thành công.

## 4. Luồng sự kiện (Activity Flow)
| Bước | Người dùng (User) | Hệ thống (System) |
| :--- | :--- | :--- |
| 1 | Chọn xóa bản ghi | |
| 2 | | Hiển thị hộp thoại xác nhận |
| 3 | Xác nhận | |
| 4 | | Thực hiện xóa bản ghi |

## 5. Quy tắc nghiệp vụ (Business Rules)
| Bước liên quan | Mã BR | Mô tả chi tiết |
| :--- | :--- | :--- |
| (2) | BR 30 | **Confirmation Rules:** Hiển thị CFD 8. |
| (4) | BR 31 | **Deleting Rules:** Nếu đồng ý, đánh dấu bản ghi là "Đã xóa" ("Deleted"). |
