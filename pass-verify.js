const bcrypt = require('bcrypt')

async function verifyPassword() {
  const myPassword = 'admin123';
  const hash = '$2b$10$zbFvE1TN5dOOUdj2PLxnh.2RgCG7XkOog1yxGR6UQIqLNW2qBVMZ.'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch)
}

verifyPassword();
