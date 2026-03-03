const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const DB_PATH = path.join(__dirname, '../data/items.json');

function readDB() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function generateId() {
  return Date.now().toString();
}

// CMUC 1: View List - GET /api/items
router.get('/', (req, res) => {
  const items = readDB().filter(item => !item.isDeleted);
  res.json(items);
});

// CMUC 3: View Detail - GET /api/items/:id
router.get('/:id', (req, res) => {
  // BUG: Không lọc isDeleted, cho phép xem cả bản ghi đã xóa (SAI với BR 27)
  const item = readDB().find(i => i.id === req.params.id);

  // BR 27: Chỉ hiển thị bản ghi chưa bị xóa (ĐÚNG theo requirement)
  //const item = readDB().find(i => i.id === req.params.id && !i.isDeleted);

  if (!item) return res.status(404).json({ message: 'Không tìm thấy bản ghi' });
  res.json(item);
});

// CMUC 2: Create - POST /api/items
router.post('/', (req, res) => {
  const { name, description } = req.body;

  // BR 25: Validate required fields
  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'Tên là trường bắt buộc (IEM 1)' });
  }

  const items = readDB();
  const newItem = {
    id: generateId(),
    name: name.trim(),
    description: description || '',
    isDeleted: false,
    createdAt: new Date().toISOString(), // CBR1: audit trail
    updatedAt: new Date().toISOString()
  };

  items.push(newItem);
  writeDB(items);
  res.status(201).json({ message: 'Tạo mới thành công (SCD 8)', data: newItem });
});

// CMUC 4: Update - PUT /api/items/:id
router.put('/:id', (req, res) => {
  const { name, description } = req.body;

  // BUG: Bỏ qua validation, cho phép name rỗng (SAI với BR 25)

  // BR 25: Validate required fields (ĐÚNG theo requirement)
  // if (!name || !name.trim()) {
  //   return res.status(400).json({ message: 'Tên là trường bắt buộc (IEM 1)' });
  // }

  const items = readDB();
  const index = items.findIndex(i => i.id === req.params.id && !i.isDeleted);
  if (index === -1) return res.status(404).json({ message: 'Không tìm thấy bản ghi' });

  items[index] = {
    ...items[index],
    name: name.trim(),
    description: description || '',
    updatedAt: new Date().toISOString() // CBR1: audit trail
  };

  writeDB(items);
  res.json({ message: 'Cập nhật thành công (SCD 9)', data: items[index] });
});

// CMUC 5: Delete - DELETE /api/items/:id
router.delete('/:id', (req, res) => {
  const items = readDB();
  const index = items.findIndex(i => i.id === req.params.id && !i.isDeleted);
  if (index === -1) return res.status(404).json({ message: 'Không tìm thấy bản ghi' });

  // BUG: Hard delete - xóa hẳn bản ghi khỏi mảng (SAI với BR 31)
  items.splice(index, 1);

  // BR 31: Soft delete - đánh dấu "Đã xóa" (ĐÚNG theo requirement)
  //items[index].isDeleted = true;
  //items[index].updatedAt = new Date().toISOString();

  writeDB(items);
  res.json({ message: 'Xóa thành công' });
});

module.exports = router;
