const itemModel = require('../models/itemModel');

// CMUC 1: View List
function getList(req, res) {
  const items = itemModel.getAll();
  res.json(items);
}

// CMUC 3: View Detail
function getDetail(req, res) {
  const item = itemModel.getById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Không tìm thấy bản ghi' });
  res.json(item);
}

// CMUC 2: Create
function createItem(req, res) {
  const { name, description } = req.body;

  // BR 25: Validate required fields
  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'Tên là trường bắt buộc (IEM 1)' });
  }

  const newItem = itemModel.create(name, description);
  res.status(201).json({ message: 'Tạo mới thành công (SCD 8)', data: newItem });
}

// CMUC 4: Update
function updateItem(req, res) {
  const { name, description } = req.body;

  // BUG: Bỏ qua validation, cho phép name rỗng (SAI với BR 25)

  // BR 25: Validate required fields(ĐÚNG theo requirement)
  // if (!name || !name.trim()) {
  //   return res.status(400).json({ message: 'Tên là trường bắt buộc (IEM 1)' });
  // }

  const updated = itemModel.update(req.params.id, name, description);
  if (!updated) return res.status(404).json({ message: 'Không tìm thấy bản ghi' });
  res.json({ message: 'Cập nhật thành công (SCD 9)', data: updated });
}

// CMUC 5: Delete
function deleteItem(req, res) {
  const deleted = itemModel.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Không tìm thấy bản ghi' });
  res.json({ message: 'Xóa thành công' });
}

module.exports = { getList, getDetail, createItem, updateItem, deleteItem };
