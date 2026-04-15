const fs = require('fs');
const path = require('path');

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

// CMUC 1
function getAll() {
  return readDB().filter(item => !item.isDeleted);
}

// CMUC 3
function getById(id) {
  // BUG: Không lọc isDeleted, cho phép xem cả bản ghi đã xóa (SAI với BR 27)
  return readDB().find(i => i.id === id);

  // BR 27: Chỉ hiển thị bản ghi chưa bị xóa (ĐÚNG theo requirement)
  // return readDB().find(i => i.id === id && !i.isDeleted);
}

// CMUC 2
function create(name, description) {
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
  return newItem;
}

// CMUC 4
// function update(id, name, description) {
//   const items = readDB();
//   const index = items.findIndex(i => i.id === id && !i.isDeleted);
//   if (index === -1) return null;

//   items[index] = {
//     ...items[index],
//     name: name.trim(),
//     description: description || '',
//     updatedAt: new Date().toISOString() // CBR1: audit trail
//   };
//   writeDB(items);
//   return items[index];
// }

// CMUC 5
function remove(id) {
  const items = readDB();
  const index = items.findIndex(i => i.id === id && !i.isDeleted);
  if (index === -1) return false;

  // BUG: Hard delete - xóa hẳn bản ghi khỏi mảng (SAI với BR 31)
  items.splice(index, 1);

  // BR 31: Soft delete - đánh dấu "Đã xóa" (ĐÚNG theo requirement)
  // items[index].isDeleted = true;
  // items[index].updatedAt = new Date().toISOString();

  writeDB(items);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
